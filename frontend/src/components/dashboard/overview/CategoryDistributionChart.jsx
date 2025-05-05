import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useGetDoctorsQuery } from "../../../redux/slices/DoctorApi";

// Define Colors
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

// Count services by speciality
const getCategoryData = (doctors) => {
  if (!Array.isArray(doctors)) return [];

  const categoryCounts = doctors.reduce((acc, doctor) => {
    const category = doctor.speciality || "Unknown";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(categoryCounts).map(([name, value]) => ({ name, value }));
};

const CategoryDistributionChart = () => {
  // Fetch data using the custom hook
  const { data, isLoading, error } = useGetDoctorsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Get category data based on the doctors fetched
  const categoryData = getCategoryData(data?.doctors || []);

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-blue-700">Speciality Distribution</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
