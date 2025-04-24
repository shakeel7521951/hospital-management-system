import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Static Order Data for Testing
const staticOrder = {
  _id: "1",
  customerId: {
    name: "Alice Johnson",
    email: "alice@example.com",
  },
  price: 120.5,
  orderStatus: "Pending",
  createdAt: "2025-04-21T10:00:00Z",
  pickupLocation: "Downtown",
  dropoffLocation: "Airport",
};

const OrderDetailModal = ({ onClose }) => {
  const [status, setStatus] = useState(staticOrder.orderStatus);

  const handleStatusChange = async () => {
    try {
      // Simulate successful status update
      toast.success("Order status updated successfully");
      onClose();
    } catch (error) {
      toast.error(error?.message || "Failed to update order status");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#21202067] bg-opacity-50 flex justify-center items-center p-4 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Order Details</h2>

        <div className="space-y-2">
          <p>
            <strong>Order ID:</strong> {staticOrder._id}
          </p>
          <p>
            <strong>Customer:</strong> {staticOrder.customerId?.name}
          </p>
          <p>
            <strong>Email:</strong> {staticOrder.customerId?.email}
          </p>
          <p>
            <strong>Total Price:</strong> ${staticOrder.price.toFixed(2)}
          </p>
          <p>
            <strong>Pickup Location:</strong> {staticOrder.pickupLocation}
          </p>
          <p>
            <strong>Dropoff Location:</strong> {staticOrder.dropoffLocation}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(staticOrder.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Update Status:
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="Pending">Pending</option>
            <option value="Fulfilled">Fulfilled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleStatusChange}
            className={`px-4 py-2 text-white rounded-lg cursor-pointer ${
              false ? "bg-gray-400" : "bg-blue-600"
            }`}
            disabled={false}
          >
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderDetailModal;
