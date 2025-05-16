import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="w-full h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
