import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import Footer from "./Footer";
import { useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import WhatsappContact from "../../components/General/WhatsappContact";

const DashbordLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} setClicked={setClicked} />
      <div className="w-full flex">
        <MobileSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setClicked={setClicked}
          clicked={clicked}
        />
        <DesktopSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setClicked={setClicked}
          clicked={clicked}
        />
        <Outlet />
      </div>
      <WhatsappContact />
      <Footer />
    </>
  );
};

export default DashbordLayout;
