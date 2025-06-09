import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearchPlus, FaLink, FaHospital } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const categories = ["All", "Medicine", "Emergency", "ICU", "Oncology"];
const galleryItems = [
  {
    id: 1,
    category: "Medicine",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "General Medicine Ward",
    description: "Comprehensive care for adult patients with acute and chronic conditions"
  },
  {
    id: 2,
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Emergency Department",
    description: "24/7 emergency care with rapid response teams"
  },
  {
    id: 3,
    category: "ICU",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Intensive Care Unit",
    description: "Specialized critical care with advanced monitoring"
  },
  {
    id: 4,
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Surgical Ward",
    description: "Pre- and post-operative care for surgical patients"
  },
  {
    id: 5,
    category: "Oncology",
    image: "https://images.unsplash.com/photo-1579154343071-2d8d0f57b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    title: "Oncology Center",
    description: "Comprehensive cancer diagnosis and treatment"
  },
  {
    id: 6,
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Pediatric Emergency",
    description: "Specialized emergency care for children"
  },
  {
    id: 7,
    category: "Medicine",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Neurology Department",
    description: "Specialized care for neurological disorders"
  },
  {
    id: 8,
    category: "Oncology",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Radiation Therapy",
    description: "Advanced radiation treatment facilities"
  },
  {
    id: 9,
    category: "ICU",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Neonatal ICU",
    description: "Specialized care for newborns and premature infants"
  },
];

const GalleryItem = ({ item, index }) => {
  const [hover, setHover] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover"
        initial={{ scale: 1 }}
        animate={hover ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={hover ? { opacity: 1 } : { opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <FaHospital className="text-blue-400" />
          <span className="text-sm font-medium text-blue-400">{item.category}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-200 text-sm mb-4">{item.description}</p>
        
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            <FaSearchPlus className="text-lg" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            <FaLink className="text-lg" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
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
            HOSPITAL FACILITIES
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Medical</span> Departments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities equipped with advanced technology for comprehensive patient care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;