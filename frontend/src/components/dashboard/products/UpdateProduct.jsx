import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useEditDoctorMutation } from "../../../redux/slices/DoctorApi";

const UpdateService = ({ isOpen, onClose, serviceData, onUpdate }) => {
  const [product, setProduct] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "",
    experience: "",
    education: "",
    workingDays: [],
    doctorImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const [updateService, { isLoading }] = useEditDoctorMutation();

  useEffect(() => {
    if (serviceData) {
      setProduct({
        name: serviceData.name || "",
        email: serviceData.email || "",
        phone: serviceData.phone || "",
        speciality: serviceData.speciality || "",
        experience: serviceData.experience || "",
        education: serviceData.education || "",
        workingDays: serviceData.workingDays || [],
        doctorImage: null,
      });
      setImagePreview(serviceData.doctorImage || null);
    }
  }, [serviceData]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  // console.log("working.......",workingDays)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prev) => ({ ...prev, doctorImage: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleWorkingDayChange = (day) => {
    setProduct((prev) => {
      const updatedDays = prev.workingDays.includes(day)
        ? prev.workingDays.filter((d) => d !== day)
        : [...prev.workingDays, day];
      return { ...prev, workingDays: updatedDays };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...serviceData,
      ...product,
      doctorImage: imagePreview,
    };

    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("email", updatedProduct.email);
      formData.append("phone", updatedProduct.phone);
      formData.append("speciality", updatedProduct.speciality);
      formData.append("experience", updatedProduct.experience);
      formData.append("education", updatedProduct.education);
      formData.append("availableDays", JSON.stringify(updatedProduct.workingDays));
      if (updatedProduct.doctorImage instanceof File) {
        formData.append("doctorImage", updatedProduct.doctorImage);
      }

      await updateService({ id: serviceData._id, data: formData }).unwrap();

      toast.success("Doctor profile updated successfully!", { position: "top-center" });
      if (onUpdate) onUpdate(updatedProduct);
      onClose();
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Failed to update profile.", { position: "top-center" });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="absolute inset-0"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white p-6 rounded-lg shadow-xl w-[700px] max-w-full relative z-10"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition"
          onClick={onClose}
        >
          ❌
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Update Doctor Profile
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {["name", "email", "phone", "speciality", "experience", "education"].map((field, index) => (
              <div key={index} className="mb-3">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={product[field]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
            ))}

            {/* Working Days */}
            <div className="mb-3 col-span-2">
              <label className="block text-sm font-medium text-gray-700">Working Days:</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <label key={day} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={product.workingDays.includes(day)}
                      onChange={() => handleWorkingDayChange(day)}
                      className="accent-blue-600"
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Upload Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border cursor-pointer border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <motion.button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateService;
