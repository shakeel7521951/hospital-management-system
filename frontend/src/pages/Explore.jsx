import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Explore = () => {
  const contactDetails = [
    { title: "Emergency Help", link: "/emergency" },
    { title: "Laboratory Services", link: "/hematology" },
    { title: "MRI", link: "/mri" },
    { title: "Cardiology", link: "/cardiology" },
    { title: "X-Ray Diagnostic", link: "/xray" },
    { title: "Haematology", link: "/hematology" },
    { title: "Neurology", link: "/neurology" },
    { title: "Pediatrics", link: "/pediatrics" },
    { title: "Dental", link: "/dental" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Explore <span className="text-blue-600">Departments / Wards</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 shadow-lg rounded-lg p-4 transition-all duration-300 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
            <Link to={item.link} className="flex items-center text-blue-600 mt-3 group">
              <span className="mr-2 font-medium">Learn More</span>
              <IoMdArrowRoundForward className="text-lg transition-transform transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
