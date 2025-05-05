import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import AlertDialog from "../alert/AlertDialog";
import AddProduct from "../popup/Add";
import UpdateService from "./UpdateProduct";
import { toast } from "react-toastify";
import { useGetDoctorsQuery, useDeleteDoctorMutation } from "../../../redux/slices/DoctorApi";

// ... (Imports stay the same)
const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isOpenUpdate, setOpenUpdate] = useState(false);

  const { data, isLoading, isError, refetch } = useGetDoctorsQuery();
  const [deleteDoctor] = useDeleteDoctorMutation();

  useEffect(() => {
    if (!data) refetch();
  }, [data, refetch]);

  const doctors = data?.doctors ?? [];
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.speciality?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = () => {
    if (!selectedProduct) return;
    deleteDoctor(selectedProduct._id)
      .then(() => {
        toast.success("Doctor deleted successfully", { position: "top-center" });
        setDialogOpen(false);
        setSelectedProduct(null);
      })
      .catch(() => {
        toast.error("Failed to delete doctor", { position: "top-center" });
      });
  };

  const handleUpdate = (doctor) => {
    setSelectedProduct(doctor);
    setOpenUpdate(true);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => setAddProductOpen(true)}
        className="px-4 py-2 mb-10 bg-blue-700 text-white rounded-lg hover:bg-blue-500 transition"
      >
        + Add New Doctor
      </motion.button>

      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 border border-blue-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Doctors List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search doctors..."
              className="bg-white text-blue-700 placeholder-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <Search className="absolute left-3 top-2.5 text-blue-700" size={18} />
          </div>
        </div>

        {isLoading ? (
          <p className="text-center py-4 text-gray-500">Loading doctors...</p>
        ) : isError ? (
          <p className="text-center py-4 text-red-500">Failed to load doctors. Please try again.</p>
        ) : filteredDoctors.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700 text-sm">
              <thead>
                <tr>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Photo & Name</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Speciality</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Email</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Phone</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Experience</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Education</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Available Days</th>
                  <th className="px-4 text-nowrap py-2 text-left text-blue-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {filteredDoctors.map((doctor) => (
                  <motion.tr
                    key={doctor._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-4 py-2 flex items-center gap-2 text-blue-700">
                      <img
                        src={doctor.doctorImage || "https://via.placeholder.com/50"}
                        alt={doctor.name}
                        className="size-10 rounded-full"
                      />
                      {doctor.name}
                    </td>
                    <td className="px-4 py-2 text-nowrap text-blue-700">{doctor.speciality}</td>
                    <td className="px-4 py-2 text-blue-700">{doctor.email}</td>
                    <td className="px-4 py-2 text-blue-700">{doctor.phone}</td>
                    <td className="px-4 py-2 text-blue-700">
                      {doctor.experience} {doctor.experience === 1 ? "year" : "years"}
                    </td>
                    <td className="px-4 py-2 text-blue-700">{doctor.education || "-"}</td>
                    <td className="px-4 py-2 text-blue-700">
                      {doctor.availableDays?.length > 0
                        ? doctor.availableDays.join(", ")
                        : "-"}
                    </td>
                    <td className="px-4 py-2 text-blue-700">
                      <button
                        className="text-indigo-500 hover:text-indigo-300 mr-2"
                        onClick={() => handleUpdate(doctor)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-300"
                        onClick={() => {
                          setSelectedProduct(doctor);
                          setDialogOpen(true);
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center py-4 text-gray-500">No doctors found.</p>
        )}
      </motion.div>

      <UpdateService
        isOpen={isOpenUpdate}
        onClose={() => setOpenUpdate(false)}
        serviceData={selectedProduct}
      />
      <AddProduct
        isOpen={addProductOpen}
        onClose={() => setAddProductOpen(false)}
      />
      <AlertDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default ProductsTable;
