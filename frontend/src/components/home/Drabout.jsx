import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaStethoscope,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Dr. Shahida Shafi",
    role: "Trauma Surgeon",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specialty: "Emergency trauma care and surgical interventions",
  },
  {
    name: "Dr. Faizan Akram",
    role: "Radiologist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    specialty: "Advanced diagnostic imaging interpretation",
  },
  {
    name: "Dr. Faisal Mehmood",
    role: "Infectious Disease Specialist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    specialty: "Treatment of complex infectious diseases",
  },
  {
    name: "Dr. Faisal Sultan",
    role: "General Surgeon",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    specialty: "Minimally invasive surgical procedures",
  },
  {
    name: "Dr. Adil Haider",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    specialty: "Cardiac diagnostics and interventions",
  },
  {
    name: "Dr. Asima Yousaf",
    role: "Oncologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specialty: "Personalized cancer treatment plans",
  },
];

const TeamMemberCard = ({ member, index }) => {
  const [hover, setHover] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={hover ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {hover && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href="#"
                className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </motion.div>
          )}
        </div>

        <div className="p-6 text-center">
          <div className="flex justify-center -mt-14 mb-4">
            <div className="bg-blue-600 p-3 rounded-full shadow-lg">
              <FaStethoscope className="text-white text-xl" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-blue-600 font-medium mb-3">{member.role}</p>
          <p className="text-gray-600 text-sm mb-4">{member.specialty}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Profile →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Drabout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            OUR TEAM
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Medical</span> Specialists
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our board-certified physicians bring exceptional expertise and
            compassionate care to every patient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/doctors">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              View All Medical Staff
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Drabout;
