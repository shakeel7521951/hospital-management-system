import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetDoctorsQuery } from "../redux/slices/DoctorApi";
import { useCreateAppointmentMutation } from "../redux/slices/AppointmentApi";
import { toast } from "react-toastify";

const Appointment = () => {
  const location = useLocation();
  const selectedDoctorId = location.state?.doctorId || "";

  const [createAppointment] = useCreateAppointmentMutation();
  const { data, isLoading, error } = useGetDoctorsQuery();
  const doctors = Array.isArray(data) ? data : data?.doctors || [];

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    doctor: selectedDoctorId,
    reason: "",
  });

  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    try {
      await createAppointment(formData).unwrap();
      toast("Appointment booked successfully!");
      setFormData({
        name: "",
        date: "",
        time: "",
        doctor: selectedDoctorId,
        reason: "",
      });
    } catch (err) {
      setSubmitError("Failed to book the appointment. Please try again.");
    }
  };

  const selectedDoctor = doctors.find((doc) => doc._id === selectedDoctorId);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Book an Appointment
        </h2>

        {selectedDoctor && (
          <div className="mb-4 p-4 border rounded-md bg-blue-50">
            <h3 className="text-xl font-semibold text-blue-800">{selectedDoctor.name}</h3>
            <p className="text-gray-700">Speciality: {selectedDoctor.speciality}</p>
            <p className="text-gray-700">Experience: {selectedDoctor.experience} years</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Choose Doctor</label>
            <select
              name="doctor"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.doctor}
              onChange={handleChange}
              required
              disabled={!!selectedDoctorId || isLoading}
            >
              <option value="">-- Select Doctor --</option>
              {isLoading ? (
                <option disabled>Loading doctors...</option>
              ) : error ? (
                <option disabled>Error loading doctors</option>
              ) : (
                doctors.map((doc) => (
                  <option key={doc._id} value={doc._id}>
                    {doc.name} ({doc.speciality})
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Reason for Visit</label>
            <textarea
              name="reason"
              rows="4"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Describe your symptoms or reason for the appointment"
            />
          </div>

          {submitError && (
            <p className="text-red-500 text-sm">{submitError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
