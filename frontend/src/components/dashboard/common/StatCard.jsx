import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-100 backdrop-blur-lg overflow-hidden shadow-lg rounded-xl border border-blue-300"
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 255, 0.2)",
      }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-blue-600">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-blue-700">{value}</p>
      </div>
    </motion.div>
  );
};
export default StatCard;
``;
