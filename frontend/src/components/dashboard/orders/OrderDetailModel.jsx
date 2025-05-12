import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { useUpdateStatusMutation } from "../../../redux/slices/AppointmentApi";

const OrderDetailModal = ({ order, onClose }) => {
  const [status, setStatus] = useState(order?.orderStatus || "Pending");
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();

  useEffect(() => {
    setStatus(order?.orderStatus || "Pending");
  }, [order]);

  const handleStatusChange = async () => {
    try {
      await updateStatus({ orderId: order._id, status }).unwrap();
      toast.success("Order status updated successfully");
      onClose();
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update order status");
    }
  };

  if (!order) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-xl p-6 sm:p-10 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">
          Appointment Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm sm:text-base">
          <div className="space-y-2">
            <p><span className="font-semibold">Order ID:</span> {order._id}</p>
            <p><span className="font-semibold">Patient Name:</span> {order.name || "N/A"}</p>
            <p><span className="font-semibold">Email:</span> {order.email || "N/A"}</p>
            <p><span className="font-semibold">Reason for Visit:</span> {order.reason || "N/A"}</p>
            <p><span className="font-semibold">Appointment Date:</span> {new Date(order.date).toLocaleDateString()}</p>
            <p><span className="font-semibold">Time:</span> {order.time || "N/A"}</p>
            <p><span className="font-semibold">Created At:</span> {new Date(order.createdAt).toLocaleString()}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-600">Doctor Info</h3>
            <p><span className="font-semibold">Name:</span> {order.doctor?.name || "N/A"}</p>
            <p><span className="font-semibold">Email:</span> {order.doctor?.email || "N/A"}</p>
            <p><span className="font-semibold">Speciality:</span> {order.doctor?.speciality || "N/A"}</p>

            <div className="mt-6">
              <label className="block mb-2 font-semibold text-sm">Update Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="Fulfilled">Fulfilled</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8 space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleStatusChange}
            disabled={isLoading}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderDetailModal;
