import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";
import { showError, showSuccess } from "../components/CustomLoader";
import { toast } from "react-toastify";

const ADDRESS_API = "https://glassadminpanelapi.onrender.com/api/users/addresses";
const ORDER_API = "https://glassadminpanelapi.onrender.com/api/user-orders/place";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrder();

  const token = localStorage.getItem("token");

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    addressType: "home",
    isDefault: false,
  });

  /* ================= DELETE ADDRESS ================= */
  const deleteAddress = async (addressId) => {
    if (!confirm('Are you sure you want to delete this address?')) return;
    
    try {
      const res = await fetch(`${ADDRESS_API}/${addressId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (res.ok) {
        setAddresses(addresses.filter(addr => addr._id !== addressId));
        if (selectedAddressId === addressId) setSelectedAddressId(null);
        showSuccess('Address deleted successfully');
      } else {
        showError('Failed to delete address');
      }
    } catch {
      showError('Network error');
    }
  };

  /* ================= UPDATE ADDRESS ================= */
  const updateAddress = async (addressId, updatedData) => {
    try {
      const res = await fetch(`${ADDRESS_API}/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      });
      
      if (res.ok) {
        setAddresses(addresses.map(addr => 
          addr._id === addressId ? { ...addr, ...updatedData } : addr
        ));
        setEditingAddress(null);
        showSuccess('Address updated successfully');
      } else {
        showError('Failed to update address');
      }
    } catch {
      showError('Network error');
    }
  };

  /* ================= FETCH ADDRESSES ================= */
  const fetchAddresses = async () => {
    try {
      const res = await fetch(ADDRESS_API, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (res.ok) {
        setAddresses(data.addresses || []);
        const def = data.addresses?.find((a) => a.isDefault);
        if (def) setSelectedAddressId(def._id);
      }
    } catch (err) {
      // console.error("Address fetch error", err);
    }
  };

  useEffect(() => {
    if (token) fetchAddresses();
  }, [token]);

  /* ================= ADD ADDRESS ================= */
  const handleAddAddress = async () => {
    const requiredFields = [
      "name",
      "phone",
      "addressLine1",
      "city",
      "state",
      "pincode",
    ];

    for (let field of requiredFields) {
      if (!newAddress[field]) {
        showError("All address fields are required");
        return;
      }
    }

    try {
      const res = await fetch(ADDRESS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newAddress),
      });

      const data = await res.json();

      if (res.ok) {
        showSuccess("Address added successfully");
        setAddresses(data.addresses || []);
        setShowAddForm(false);
        setNewAddress({
          name: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          pincode: "",
          country: "India",
          addressType: "home",
          isDefault: false,
        });
      } else {
        showError(data.message || "Address add failed");
      }
    } catch {
      showError("Network error");
    }
  };

  /* ================= PLACE ORDER ================= */
  const placeOrder = async () => {
    // console.log('🛒 Place Order clicked');
    // console.log('📍 Selected Address ID:', selectedAddressId);
    // console.log('📦 Available Addresses:', addresses.length);
    
    if (!token) {
      toast.error("Please login first to place an order!");
      return;
    }

    if (!selectedAddressId) {
      showError("Please select a shipping address");
      return;
    }

    setLoading(true);

    try {
      // Check cart first
      const cartSyncRes = await fetch('https://glassadminpanelapi.onrender.com/api/cart', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const cartData = await cartSyncRes.json();
      const backendCart = cartData.cart || cartData;
      
      if (!cartSyncRes.ok || !backendCart.items || backendCart.items.length === 0) {
        showError("Your cart is empty. Please add items to cart first.");
        setLoading(false);
        setTimeout(() => navigate('/'), 2000);
        return;
      }
      
      // Place order using standard cart flow
      const orderPayload = {
        addressId: selectedAddressId,
        paymentMethod: "COD",
        offerCode: "",
        notes: ""
      };
      
      // console.log('🛒 Placing order with payload:', orderPayload);

    const response = await fetch(ORDER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderPayload),
    });

    const data = await response.json();
    // console.log('📊 Order response:', { status: response.status, data });

    if (response.ok) {
      showSuccess("🎉 Order placed successfully");
      if (data?.order) addOrder(data.order);
      
      clearCart();
      navigate("/profile");
    } else {
      // console.error('❌ Order failed:', data);
      showError(data.message || `Order failed: ${data.error || 'Unknown error'}`);
    }
  } catch (error) {
    // console.error('🚨 Order API error:', error);
    showError("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};

  /* ================= UI ================= */
  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-gray-100 text-black"} min-h-screen`}>
      <div className="max-w-5xl mx-auto p-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="text-xl">
            <FaArrowLeft />
          </button>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        {/* SHIPPING ADDRESS */}
        <div className={`${isDark ? "bg-gray-900" : "bg-white"} rounded-2xl p-6 shadow mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 text-orange-500 font-medium"
            >
              <FaPlus /> Add Address
            </button>
          </div>

          {/* ADDRESS LIST */}
          <div className="space-y-4">
            {addresses.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No shipping addresses found. Please add an address to continue.</p>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Add Your First Address
                </button>
              </div>
            ) : (
              addresses.map((addr) => (
                <div key={addr._id}>
                  {editingAddress === addr._id ? (
                    <EditAddressForm 
                      address={addr}
                      onSave={(data) => updateAddress(addr._id, data)}
                      onCancel={() => setEditingAddress(null)}
                      isDark={isDark}
                    />
                  ) : (
                    <label
                      className={`block border rounded-xl p-4 cursor-pointer transition ${
                        selectedAddressId === addr._id
                          ? "border-orange-500 bg-orange-50 text-black"
                          : isDark
                          ? "border-gray-700 hover:border-gray-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between">
                        <div className="flex gap-3">
                          <input
                            type="radio"
                            checked={selectedAddressId === addr._id}
                            onChange={() => {
                              setSelectedAddressId(addr._id);
                              // console.log('📍 Address selected:', addr._id);
                            }}
                            className="mt-1 accent-orange-500"
                          />
                          <div>
                            <p className="font-semibold">
                              {addr.name} ({addr.phone})
                            </p>
                            <p className="text-sm opacity-80">
                              {addr.addressLine1}
                              {addr.addressLine2 && `, ${addr.addressLine2}`}
                              <br />
                              {addr.city}, {addr.state} - {addr.pincode}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setEditingAddress(addr._id);
                            }}
                            className="p-2 text-orange-500 hover:bg-orange-100 rounded-lg"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              deleteAddress(addr._id);
                            }}
                            className="p-2 text-red-500 hover:bg-red-100 rounded-lg"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </label>
                  )}
                </div>
              ))
            )}
          </div>

          {/* ADD ADDRESS FORM */}
          {showAddForm && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "name",
                "phone",
                "addressLine1",
                "addressLine2",
                "city",
                "state",
                "pincode",
              ].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  value={newAddress[field]}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, [field]: e.target.value })
                  }
                  className="border rounded-lg p-3 text-black"
                />
              ))}

              <button
                onClick={handleAddAddress}
                className="md:col-span-2 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
              >
                Save Address
              </button>
            </div>
          )}
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={placeOrder}
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl text-lg font-bold shadow"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

const EditAddressForm = ({ address, onSave, onCancel, isDark }) => {
  const [formData, setFormData] = useState({
    name: address.name || "",
    phone: address.phone || "",
    addressLine1: address.addressLine1 || "",
    addressLine2: address.addressLine2 || "",
    city: address.city || "",
    state: address.state || "",
    pincode: address.pincode || "",
    country: address.country || "India",
    addressType: address.addressType || "home",
    isDefault: address.isDefault || false
  });

  const handleSave = () => {
    const requiredFields = ["name", "phone", "addressLine1", "city", "state", "pincode"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        showError("All address fields are required");
        return;
      }
    }
    onSave(formData);
  };

  return (
    <div className={`border rounded-xl p-4 ${isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {[
          "name",
          "phone",
          "addressLine1",
          "addressLine2",
          "city",
          "state",
          "pincode",
        ].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={formData[field]}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            className={`border rounded-lg p-3 ${isDark ? "bg-gray-900 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
