import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/dashboard/common/Header";
import StatCard from "../../components/dashboard/common/StatCard";
import DailyOrders from "../../components/dashboard/orders/DailyOrders";
import OrdersTable from "../../components/dashboard/orders/OrdersTable";
import { useGetAppointmentsQuery } from "../../redux/slices/AppointmentApi";

const OrdersPage = () => {
  // Fetch appointments using the getAppointments query
  const { data: orders, isLoading, isError, error } = useGetAppointmentsQuery();
  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title={"Appointments"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Appointments"
            icon={ShoppingBag}
            value={orders?.length || 0} // Use safe fallback for length
            color="#6366F1"
          />
          <StatCard
            name="Pending Appointments"
            icon={Clock}
            value={orders?.filter((order) => order.status === "Pending").length || 0}
            color="#F59E0B"
          />
          <StatCard
            name="Completed Appointments"
            icon={CheckCircle}
            value={orders?.filter((order) => order.status === "Fulfilled").length || 0}
            color="#10B981"
          />
        </motion.div>

        {/* Orders Table with Data */}
        <OrdersTable orders={orders} />

        <div className="grid grid-cols-1 gap-8 mt-8">
          <DailyOrders orders={orders} />
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;
