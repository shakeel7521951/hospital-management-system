import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
    ],
  },
  {path:'/login',element:<LoginForm />},
  {path:'/sign-up',element:<SignupForm />},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
