import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/dashboard/common/Header";
import StatCard from "../../components/dashboard/common/StatCard";
import CategoryDistributionChart from "../../components/dashboard/overview/CategoryDistributionChart";

import { useGetDoctorsQuery } from "../../redux/slices/DoctorApi";
import { useAllUsersQuery } from "../../redux/slices/UserApi";

const OverviewPage = () => {
  const { data: doctors = [], isLoading: loadingDoctors } =
    useGetDoctorsQuery();
  const { data: users = [], isLoading: loadingUsers } = useAllUsersQuery();

  const doctorsData = doctors?.doctors || [];
  const specialityCount = doctorsData.reduce((acc, doctor) => {
    const speciality = doctor.speciality || "Unknown";
    acc[speciality] = (acc[speciality] || 0) + 1;
    return acc;
  }, {});

  const serviceCount = Object.keys(specialityCount).length;

  if (loadingDoctors || loadingUsers) {
    return (
      <div className="flex-1 overflow-auto relative z-10">
        <Header title="Overview" />
        <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={Users}
            value={users.length}
            color="#8B5CF6"
          />
          <StatCard
            name="Total Services"
            icon={ShoppingBag}
            value={serviceCount}
            color="#EC4899"
          />
          <StatCard
            name="Total Doctors"
            icon={BarChart2}
            value={doctorsData.length}
            color="#10B981"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
