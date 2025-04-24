import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/dashboard/common/Header";
import StatCard from "../../components/dashboard/common/StatCard";
import SalesOverviewChart from "../../components/dashboard/overview/SalesOverviewChart";
import CategoryDistributionChart from "../../components/dashboard/overview/CategoryDistributionChart";
import SalesChannelChart from '../../components/dashboard/overview/SalesChannelChart';

// import { useAllUsersQuery } from "../../redux/slices/UserApi";

const OverviewPage = () => {
  // Mock static data
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const services = [
    { id: 1, name: "Consultation" },
    { id: 2, name: "Surgery" },
    { id: 3, name: "Therapy" },
  ];

  const orders = [
    { id: 1, item: "Package A" },
    { id: 2, item: "Package B" },
    { id: 3, item: "Package C" },
    { id: 4, item: "Package D" },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366F1"
          />
          <StatCard
            name="Total Users"
            icon={Users}
            value={users.length}
            color="#8B5CF6"
          />
          <StatCard
            name="Total Services"
            icon={ShoppingBag}
            value={services.length}
            color="#EC4899"
          />
          <StatCard
            name="Total Orders"
            icon={BarChart2}
            value={orders.length}
            color="#10B981"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
