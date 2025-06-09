import Button from "../Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
  {
    id: 1,
    author: "Dr. Sarah Johnson",
    category: "Preventive Care",
    title: "10 Science-Backed Habits for Longevity",
    excerpt: "Discover the daily routines that can add years to your life according to the latest medical research...",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "June 15, 2023",
    readTime: "4 min read"
  },
  {
    id: 2,
    author: "Cardiology Team",
    category: "Heart Health",
    title: "Understanding Modern Heart Treatments",
    excerpt: "Explore the revolutionary techniques that are changing how we treat cardiovascular diseases...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "June 8, 2023",
    readTime: "6 min read"
  },
  {
    id: 3,
    author: "Neurology Dept.",
    category: "Brain Health",
    title: "Breakthroughs in Cognitive Enhancement",
    excerpt: "New research reveals surprising ways to boost memory and mental clarity at any age...",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "May 30, 2023",
    readTime: "8 min read"
  },
];

const BlogCard = ({ post, index }) => {
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
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform group-hover:-rotate-1 group-hover:scale-105 transition-all duration-300"></div>
      
      <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        {/* Image with floating category chip */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full shadow-sm text-xs font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {post.category}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {post.readTime}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-600">
              {post.author}
            </span>
            
            <motion.div whileHover={{ x: 3 }}>
              <Link 
                to={`/blog/${post.id}`} 
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LatestBlogs = () => {
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
            className="inline-block mb-4 text-sm font-semibold text-blue-600 tracking-wider"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            MEDICAL INSIGHTS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Health Articles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with cutting-edge medical knowledge and wellness tips from our expert team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          {/* <Link to="/blog">
            <Button
              text="Explore All Articles"
              bgColor="bg-gradient-to-r from-blue-500 to-purple-600"
              hoverBgColor="hover:from-blue-600 hover:to-purple-700"
              textColor="text-white"
              size="lg"
              icon={
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              }
              className="px-10 shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogs;