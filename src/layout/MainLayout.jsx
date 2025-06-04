import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AdComponent from "../components/AdComponent";

function MainLayout() {
  return (
    <div className="w-full h-full">
      <ScrollToTop />
      <Header />
      <AdComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
