import { motion } from "framer-motion";
import Header from "../../components/dashboard/common/Header";
import StatCard from "../../components/dashboard/common/StatCard";
import { AlertTriangle, Car, DollarSign, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../../components/dashboard/overview/CategoryDistributionChart";
import SalesTrendChart from "../../components/dashboard/products/SalesTrendChart";
import ProductsTable from "../../components/dashboard/products/ProductsTable";
import { useGetDoctorsQuery } from "../../redux/slices/DoctorApi";

const ProductsPage = () => {
  const { data, isLoading, error } = useGetDoctorsQuery();
  const doctors = data?.doctors || [];
  if (isLoading) {
    return <div className="text-center py-10 text-lg">Loading doctors...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Failed to load doctors.</div>;
  }

  const topDoctor = doctors[0];

  const mostCommonSpeciality = (() => {
    const specialityCount = {};
    doctors.forEach(doc => {
      const spec = doc.speciality?.trim().toLowerCase();
      if (spec) {
        specialityCount[spec] = (specialityCount[spec] || 0) + 1;
      }
    });
    const sorted = Object.entries(specialityCount).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || "N/A";
  })();

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Doctors" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Doctors"
            icon={Car}
            value={doctors.length}
            color="#6366F1"
          />
          <StatCard
            name="Top Doctor"
            icon={TrendingUp}
            value={topDoctor?.name || "N/A"}
            color="#10B981"
          />
          <StatCard
            name={`Most Common Speciality`}
            icon={AlertTriangle}
            value={mostCommonSpeciality}
            color="#F59E0B"
          />
          <StatCard
            name="Doctors with Email"
            icon={DollarSign}
            value={doctors.filter(doc => !!doc.email).length}
            color="#EF4444"
          />
        </motion.div>

        <ProductsTable services={doctors} />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-10">
          <SalesTrendChart />
          <CategoryDistributionChart services={doctors} />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
