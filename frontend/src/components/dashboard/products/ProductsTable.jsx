import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import AlertDialog from "../alert/AlertDialog";
import AddProduct from "../popup/Add";
import UpdateService from "./UpdateProduct";
import { toast } from "react-toastify";

// ✅ Static services data
const staticServices = [
  {
    _id: "1",
    serviceName: "Toyota Camry",
    serviceCategory: "Sedan",
    price: 25000,
    passengers: 5,
    servicePic: "https://via.placeholder.com/50",
    sales: 120,
    stock: 10,
  },
  {
    _id: "2",
    serviceName: "Honda Accord",
    serviceCategory: "Sedan",
    price: 23000,
    passengers: 5,
    servicePic: "https://via.placeholder.com/50",
    sales: 95,
    stock: 3,
  },
  {
    _id: "3",
    serviceName: "Tesla Model 3",
    serviceCategory: "Electric",
    price: 40000,
    passengers: 5,
    servicePic: "https://via.placeholder.com/50",
    sales: 180,
    stock: 5,
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [servicesList, setServicesList] = useState(staticServices);
  const [isOpenUpdate, setOpenUpdate] = useState(false);

  const handleDelete = () => {
    if (!selectedProduct) return;

    setServicesList((prev) =>
      prev.filter((service) => service._id !== selectedProduct._id)
    );

    toast.success("Service deleted successfully", { position: "top-center" });

    setDialogOpen(false);
    setSelectedProduct(null);
  };

  const handleUpdate = (service) => {
    setSelectedProduct(service);
    setOpenUpdate(true);
  };

  const filteredProducts = servicesList.filter(
    (service) =>
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => setAddProductOpen(true)}
        className="px-4 py-2 mb-10 bg-blue-700 cursor-pointer text-white rounded-lg hover:bg-blue-500 transition"
      >
        + Add New Service
      </motion.button>

      <motion.div
        className="bg-white backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Cars List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cars..."
              className="bg-white text-blue-700 placeholder-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <Search className="absolute left-3 top-2.5 text-blue-700" size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          {filteredProducts.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase">Passengers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredProducts.map((service) => (
                  <motion.tr
                    key={service._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700 flex gap-2 items-center">
                      <img
                        src={service.servicePic || "https://via.placeholder.com/50"}
                        alt={service.serviceName}
                        className="size-10 rounded-full"
                      />
                      {service.serviceName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">{service.serviceCategory}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">${service.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">{service.passengers}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                      <button
                        className="text-indigo-500 cursor-pointer hover:text-indigo-300 mr-2"
                        onClick={() => handleUpdate(service)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="text-red-500 cursor-pointer hover:text-red-300"
                        onClick={() => {
                          setSelectedProduct(service);
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
          ) : (
            <p className="text-center text-gray-500 py-4">No services found.</p>
          )}
        </div>
      </motion.div>

      <UpdateService isOpen={isOpenUpdate} onClose={() => setOpenUpdate(false)} serviceData={selectedProduct} />
      <AddProduct isOpen={addProductOpen} onClose={() => setAddProductOpen(false)} />
      <AlertDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} onConfirm={handleDelete} />
    </>
  );
};

export default ProductsTable;
