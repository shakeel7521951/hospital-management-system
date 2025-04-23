import React, { useState } from "react";
import { FaSearchPlus, FaLink } from "react-icons/fa";

const categories = ["All", "Medicine", "Emergency", "ICU", "Oncology"];
const galleryItems = [
  {
    id: 1,
    category: "Medicine",
    image:
      "https://img.freepik.com/free-photo/stethoscope-pills-tomograms_23-2147796507.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "General Medicine Ward",
  },
  {
    id: 2,
    category: "Emergency",
    image:
      "https://img.freepik.com/free-photo/team-doctors-walking-row_107420-84770.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "Rehabilitation Ward",
  },
  {
    id: 3,
    category: "ICU",
    image:
      "https://img.freepik.com/free-photo/doctor-with-face-mask-against-covid19-discussing-with-nurse-hospital-waiting-area-disabled-senior-woman-wheelchair-waiting-examination-assistant-working-reception-computer_482257-6055.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "Burn Unit",
  },
  {
    id: 4,
    category: "Emergency",
    image:
      "https://img.freepik.com/free-photo/doctor-asking-nurse-pills-consultation-medical-office-physician-specialist-medicine-providing-health-care-services-consultation-diagnostic-examination-treatment-hospital-cabinet_482257-14532.jpg?t=st=1740824921~exp=1740828521~hmac=b8571b29eb1e7112990d2121b8e96d7b1eaf50d4b093111e9d2e9bb4365eb564&w=1380",
    title: "Surgical Ward",
  },
  {
    id: 5,
    category: "Oncology",
    image:
      "https://img.freepik.com/premium-photo/business-colleagues-working-office_1048944-25961619.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "Pediatric Ward",
  },
  {
    id: 6,
    category: "Emergency",
    image:
      "https://img.freepik.com/free-photo/cheerful-group-medics-reading-papers_23-2147763840.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "General Medicine Ward",
  },
  {
    id: 7,
    category: "Medicine",
    image:
      "https://img.freepik.com/free-photo/retired-person-using-wheelchair-talking-with-senior-doctor-appointment-while-being-helped-by-professional-nurse-private-clinic-older-man-living-with-disability-busy-hospital-reception_482257-46754.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "Neurology Ward",
  },
  {
    id: 8,
    category: "Oncology",
    image:
      "https://img.freepik.com/premium-photo/dentist-showing-dentures-toothbrush-by-colleague-holding-file-table_1048944-24147780.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "Dentist",
  },
  {
    id: 9,
    category: "ICU",
    image:
      "https://img.freepik.com/free-photo/occupation-science-digitally-generated-folder-chemistry_1134-676.jpg?uid=R189609995&ga=GA1.1.1481950669.1740815275&semt=ais_hybrid",
    title: "Maternity Ward",
  },
];


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto p-4 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Main Wards</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 cursor-pointer rounded-lg transition-all text-sm font-medium border border-gray-300 ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-w-full object-cover group-hover:opacity-75 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-[#000000ac] bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300">
              <h5 className="text-white text-lg font-semibold mb-2">{item.title}</h5>
              <div className="flex space-x-4">
                <FaSearchPlus className="text-white text-2xl cursor-pointer hover:text-blue-300" title="View Larger" />
                <FaLink className="text-white text-2xl cursor-pointer hover:text-blue-300" title="More Details" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;