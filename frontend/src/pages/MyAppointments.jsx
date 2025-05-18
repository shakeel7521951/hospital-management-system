import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useGetMYAppointmentsQuery } from "../redux/slices/AppointmentApi";

const MyAppointments = () => {
  const { data: appointments = [], isLoading, isError } = useGetMYAppointmentsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter((appointment) => {
    const term = searchTerm.toLowerCase();
    return (
      appointment.doctor?.name?.toLowerCase().includes(term) ||
      appointment.reason?.toLowerCase().includes(term) ||
      appointment.status?.toLowerCase().includes(term) ||
      appointment.date?.toLowerCase().includes(term)
    );
  });

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700 p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-700">My Appointments</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by doctor, reason or status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white text-blue-700 placeholder-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-blue-700" size={18} />
        </div>
      </div>

      {isLoading ? (
        <p className="text-blue-700">Loading appointments...</p>
      ) : isError ? (
        <p className="text-red-500">Failed to load appointments.</p>
      ) : filteredAppointments.length === 0 ? (
        <p className="text-gray-700">No matching appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                {["Doctor Name", "Reason", "Date", "Status", "Time", "Created At"].map((heading, idx) => (
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
              {filteredAppointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="px-6 py-4 text-sm text-black">
                    {appointment.doctor?.name || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-black">
                    {appointment.reason || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-700">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-black">
                    {appointment.status || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-700">
                    {appointment.time || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-700">
                    {new Date(appointment.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default MyAppointments;
