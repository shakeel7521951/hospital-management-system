import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import Doctors from "./pages/Doctors";
import Explore from "./pages/Explore";
import Emergancy from "./pages/departments/Emergency";
import Hematology from "./pages/departments/Laboratory";
import MRI from "./pages/departments/MRI";
import Cardiology from "./pages/departments/Cardiology";
import Xray from "./pages/departments/Xray";
import Neurology from "./pages/departments/Neurology";
import Pediatrics from "./pages/departments/Pediatrics";
import Dental from "./pages/departments/Dental";
import { useDispatch } from "react-redux";
import { useProfileQuery } from "./redux/slices/UserApi";
import { useEffect } from "react";
import { clearProfile, setProfile } from "./redux/slices/UserSlice";
import VerifyUser from "./pages/VerifyUser";
import MyProfile from "./pages/MyProfile";
import UpdatePassword from "./pages/UpdatePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Sidebar from "./components/dashboard/common/Sidebar";
import AdminRoute from "./middleWares/AdminRoute";
import OverviewPage from "./pages/dashboard/OverviewPage";
import ProductsPage from "./pages/dashboard/ProductsPage";
import UsersPage from "./pages/dashboard/UsersPage";
import SalesPage from "./pages/dashboard/SalesPage";
import OrdersPage from "./pages/dashboard/OrdersPage";
import Appointment from "./pages/Appointment";
// import ScrollToTop from "./components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <div className="flex h-screen  text-blue-700 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br bg-white text-blue-700" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        {/* <ScrollToTop /> */}
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/doctors", element: <Doctors /> },
      { path: "/explore", element: <Explore /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/emergency", element: <Emergancy /> },
      { path: "/hematology", element: <Hematology /> },
      { path: "/mri", element: <MRI /> },
      { path: "/cardiology", element: <Cardiology /> },
      { path: "/xray", element: <Xray /> },
      { path: "/hematology", element: <Hematology /> },
      { path: "/neurology", element: <Neurology /> },
      { path: "/pediatrics", element: <Pediatrics /> },
      { path: "/dental", element: <Dental /> },

      { path: "/profile", element: <MyProfile /> },
      { path: "/update-password", element: <UpdatePassword /> },
    ],
  },
  { path: "/login", element: <LoginForm /> },
  { path: "/sign-up", element: <SignupForm /> },
  { path: "/user-verification", element: <VerifyUser /> },
  { path: "/forgot-passoword", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/appointments", element: <Appointment /> },

  {
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/dashboard", element: <OverviewPage /> },
          { path: "/admin-doctors", element: <ProductsPage /> },
          { path: "/users", element: <UsersPage /> },
          { path: "/sales", element: <SalesPage /> },
          { path: "/orders", element: <OrdersPage /> },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { data: profileData } = useProfileQuery();

  useEffect(() => {
    if (profileData) {
      dispatch(setProfile(profileData.user));
    } else {
      dispatch(clearProfile());
    }
  }, [profileData, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
