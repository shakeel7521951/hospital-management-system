import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useAddDoctorMutation } from "../../../redux/slices/DoctorApi";

const AddProduct = ({ isOpen, onClose, onAdd }) => {
  const [addDoctor] = useAddDoctorMutation();

  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "",
    experience: "",
    education: "",
    availableDays: [], // array of strings
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (day) => {
    setDoctor((prev) => {
      const isChecked = prev.availableDays.includes(day);
      return {
        ...prev,
        availableDays: isChecked
          ? prev.availableDays.filter((d) => d !== day)
          : [...prev.availableDays, day],
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please upload a doctor image", { position: "top-center" });
      return;
    }

    const formData = new FormData();
    Object.entries(doctor).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(`${key}[]`, item));
      } else {
        formData.append(key, value);
      }
    });
    formData.append("doctorImage", imageFile);

    try {
      const res = await addDoctor(formData).unwrap();
      toast.success(res.message || "Doctor added successfully!", {
        position: "top-center",
      });

      if (onAdd) onAdd();
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || "Failed to add doctor", {
        position: "top-center",
      });
    }
  };

  const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white p-6 rounded-lg shadow-xl w-[700px] max-w-full relative z-10"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ❌
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Doctor</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone", type: "text" },
              { label: "Speciality", name: "speciality", type: "text" },
              { label: "Experience (years)", name: "experience", type: "number" },
              { label: "Education", name: "education", type: "text" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={doctor[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required={["name", "email", "phone", "speciality"].includes(field.name)}
                />
              </div>
            ))}
          </div>

          {/* Available Days (Checkboxes) */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Days:</label>
            <div className="flex flex-wrap gap-3">
              {allDays.map((day) => (
                <label key={day} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={doctor.availableDays.includes(day)}
                    onChange={() => handleCheckboxChange(day)}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
              {imagePreview ? (
                <img src={imagePreview} alt="Doctor Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Doctor Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <motion.button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add Doctor
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddProduct;
