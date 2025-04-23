import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Dr. Shahida Shafi", role: "Trauma Surgeon", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr04-2.jpg" },
  { name: "Dr. Faizan Akram", role: "Radiologist", image: "https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid" },
  { name: "Dr. Faisal Mehmood", role: "Infectious Disease Specialist", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr05-2.jpg" },
  { name: "Dr. Faisal Sultan", role: "General Surgeon", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr06-2.jpg" },
  { name: "Dr. Adil Haider", role: "Cardiologist", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr8-2.jpg" },
  { name: "Dr. Asima Yousaf", role: "Oncologist", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr02-2.jpg" },
  { name: "Dr. Minahaj Siraj", role: "ICU Specialist", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr01-2.jpg" },
  { name: "Dr. Samena Jamali", role: "Cardiologist", image: "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827760.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid" },
  { name: "Dr. Javed Akram", role: "Radiation Oncologist", image: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr08-2.jpg" }
];

const Drabout = () => {
  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Expert Medical Team</h2>
        <p className="text-gray-600 text-lg mt-3">
          Dedicated to providing top-quality healthcare services with expertise and compassion.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-64 cursor-pointer flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative w-40 h-40">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg transition-all duration-300"
        />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0000009c] bg-opacity-50 rounded-full transition-opacity duration-300 opacity-100">
            <FaTwitter className="text-white bg-blue-500 p-2 rounded-full w-10 h-10 hover:bg-blue-600 transition" />
            <FaFacebook className="text-white bg-blue-500 p-2 rounded-full w-10 h-10 hover:bg-blue-600 transition" />
            <FaLinkedin className="text-white bg-blue-500 p-2 rounded-full w-10 h-10 hover:bg-blue-600 transition" />
          </div>
        )}
      </div>
      <h6 className="text-xl font-bold text-gray-800 mt-3">{member.name}</h6>
      <p className="text-gray-500">{member.role}</p>
      <p className="text-gray-500 max-w-xs mt-1">
        Expert in {member.role}, providing exceptional care to patients with dedication and experience.
      </p>
    </div>
  );
};

export default Drabout;