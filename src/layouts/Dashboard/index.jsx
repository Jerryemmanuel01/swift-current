import { Outlet, ScrollRestoration } from "react-router-dom";
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
        <div className="md:hidden">
          <MobileSidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setClicked={setClicked}
            clicked={clicked}
          />
        </div>
        <div className="hidden md:block">
          <DesktopSidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setClicked={setClicked}
            clicked={clicked}
          />
        </div>
        <div className="overflow-hidden w-full">
          <div className=" min-h-[85vh] w-full">
            <ScrollRestoration />
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <WhatsappContact />
    </>
  );
};

export default DashbordLayout;
