import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCalendarAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetDoctorsQuery } from "../redux/slices/DoctorApi";

const Doctors = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetDoctorsQuery();
  const doctors = data?.doctors || [];

  const specialists = [
    {
      name: "Dentist",
      img: "https://cdn-icons-png.freepik.com/512/12604/12604692.png",
      icon: "🦷"
    },
    {
      name: "Cardiologist",
      img: "https://cdn-icons-png.freepik.com/256/8679/8679678.png",
      icon: "❤️"
    },
    {
      name: "Orthopedic",
      img: "https://cdn-icons-png.freepik.com/256/9169/9169833.png",
      icon: "🦴"
    },
    {
      name: "Neurologist",
      img: "https://cdn-icons-png.freepik.com/256/7277/7277132.png",
      icon: "🧠"
    },
    {
      name: "ENT Specialist",
      img: "https://cdn-icons-png.freepik.com/256/13077/13077490.png",
      icon: "👂"
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedSpecialty === "" || doctor.specialty === selectedSpecialty) &&
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Search Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-6 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your <span className="text-blue-200">Trusted</span> Doctor
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Book appointments with top specialists in just a few clicks
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="flex w-full max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl"
          >
            <input
              className="w-full px-6 py-4 text-gray-800 outline-none"
              type="search"
              placeholder="Search doctors by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-8 flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              <FaSearch className="text-xl" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Specialist Categories */}
      <div className="container mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse by <span className="text-blue-600">Specialty</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a specialty to find the right doctor for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {specialists.map((specialist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer border-2 transition-all ${
                selectedSpecialty === specialist.name 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-transparent hover:border-blue-200"
              }`}
              onClick={() =>
                setSelectedSpecialty(
                  specialist.name === selectedSpecialty ? "" : specialist.name
                )
              }
            >
              <div className="text-4xl mb-3">{specialist.icon}</div>
              <h6 className="text-lg font-semibold text-gray-800 text-center">
                {specialist.name}
              </h6>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="container mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Medical</span> Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highly qualified professionals dedicated to your health
          </p>
        </motion.div>

        {isLoading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-blue-600">Loading our specialists...</p>
          </motion.div>
        ) : isError ? (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-500"
          >
            Failed to load doctors. Please try again later.
          </motion.p>
        ) : (
          <AnimatePresence>
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredDoctors.map((doctor, index) => (
                  <motion.div
                    key={doctor._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={doctor.doctorImage}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-4">
                        {doctor.speciality}
                      </p>

                      <div className="space-y-3 text-gray-600">
                        {doctor.experience > 0 && (
                          <div className="flex items-center gap-2">
                            <FaBriefcase className="text-blue-500" />
                            <span>
                              {doctor.experience} {doctor.experience === 1 ? "year" : "years"} experience
                            </span>
                          </div>
                        )}
                        {doctor.education && (
                          <div className="flex items-center gap-2">
                            <FaGraduationCap className="text-blue-500" />
                            <span>{doctor.education}</span>
                          </div>
                        )}
                        {doctor.availableDays?.length > 0 && (
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-blue-500" />
                            <span>Available: {doctor.availableDays.join(", ")}</span>
                          </div>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                          navigate("/appointments", {
                            state: { doctorId: doctor._id },
                          })
                        }
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        Book Appointment
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">👨‍⚕️</div>
                <h3 className="text-2xl font-medium text-gray-700 mb-2">
                  No doctors found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpecialty("");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Doctors;