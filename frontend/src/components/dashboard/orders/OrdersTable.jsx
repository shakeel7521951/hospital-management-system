import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";
import OrderDetailModal from "./OrderDetailModel";
import { useGetAppointmentsQuery } from "../../../redux/slices/AppointmentApi";

const OrdersTable = () => {
  const { data: orders = [], isLoading, isError } = useGetAppointmentsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [showDetailModel, setShowDetailModel] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (orders?.length) {
      setFilteredOrders(orders);
    }
  }, [orders]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orders.filter(
      (order) =>
        order._id?.toLowerCase().includes(term) ||
        order.name?.toLowerCase().includes(term) ||
        order.email?.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setShowDetailModel(true);
  };

  const closeModal = () => {
    setShowDetailModel(false);
    setSelectedOrder(null);
  };

  if (isLoading) {
    return (
      <div className="text-blue-700 text-center">Loading appointments...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center">
        Failed to load appointments.
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-700">
          Appointments List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search appointments..."
            className="bg-white text-blue-700 placeholder-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-blue-700" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {[
                "Name",
                "Email",
                "Doctor Name",
                "Date",
                "Status",
                "Time",
                "Created At",
                "Actions",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 text-sm text-black text-nowrap">
                  {order.name || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-black text-nowrap">
                  {order.email || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-black text-nowrap" >
                  {order.doctor?.name || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-blue-700 text-nowrap">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-black">
                  {order.status || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-blue-700 text-nowrap">
                  {order.time || "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-blue-700 text-nowrap">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-blue-700">
                  <button
                    onClick={() => openModal(order)}
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetailModel && selectedOrder && (
        <OrderDetailModal order={selectedOrder} onClose={closeModal} />
      )}
    </motion.div>
  );
};

export default OrdersTable;
