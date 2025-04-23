import { useState } from "react";
import { FaSearch, FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Doctors = () => {
  const specialists = [
    { name: "Dentist", img: "https://cdn-icons-png.freepik.com/512/12604/12604692.png" },
    { name: "Heart Specialist", img: "https://cdn-icons-png.freepik.com/256/8679/8679678.png" },
    { name: "Orthopedic", img: "https://cdn-icons-png.freepik.com/256/9169/9169833.png" },
    { name: "Neurologist", img: "https://cdn-icons-png.freepik.com/256/7277/7277132.png" },
    { name: "Otology", img: "https://cdn-icons-png.freepik.com/256/13077/13077490.png" },
  ];

  const doctors = [
    { name: "Dr. Adil Haider", specialty: "Heart Specialist", img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr8-2.jpg" },
    { name: "Dr. Shahida Shafi", specialty: "Trauma Surgery", img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr04-2.jpg" },
    { name: "Dr. Faisal Mahmood", specialty: "Infectious Diseases", img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr05-2.jpg" },
    { name: "Dr. Tariq Mahmood", specialty: "Neurology", img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr05-2.jpg" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    (selectedSpecialty === "" || doctor.specialty === selectedSpecialty) &&
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Section */}
      <div className="flex flex-col items-center text-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-3">Search <span className="text-gray-900">Doctors</span></h1>
        <p className="text-gray-600 text-lg mb-6">Find your doctor and book an appointment in one click</p>
        
        <form className="flex w-full max-w-lg bg-white shadow-lg rounded-full overflow-hidden border border-gray-300">
          <input
            className="w-full px-5 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Find Doctors Here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-6 flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
            <FaSearch className="text-lg" />
          </button>
        </form>
      </div>

      {/* Specialist Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Find Your Specialist</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-300 w-44 h-44 ${selectedSpecialty === specialist.name ? 'bg-blue-100' : ''}`}
              onClick={() => setSelectedSpecialty(specialist.name === selectedSpecialty ? "" : specialist.name)}
            >
              <img src={specialist.img} alt={specialist.name} className="w-20 h-20 object-contain mb-3" />
              <h6 className="text-md font-semibold text-gray-800 text-center">{specialist.name}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Meet Our <span className="text-blue-600">Specialists</span></h1>
          <p className="text-gray-600 text-lg mt-3">Highly skilled professionals ready to help you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div key={index} className="bg-white border border-gray-200 shadow-md rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative">
                  <img src={doctor.img} alt={doctor.name} className="w-full h-56 object-cover rounded-lg" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">{doctor.name}</h4>
                <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-4">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;