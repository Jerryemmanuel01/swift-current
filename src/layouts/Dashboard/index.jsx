import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import Footer from "./Footer";
import { useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import WhatsappContact from "../../components/General/WhatsappContact";
import useDashboardInfo from "../../hooks/dashboardHooks/useDashboardInfo";
import Loader from "../../components/General/Loader";
import DashboardFetchError from "../../components/Dashboard/DashboardFetchError";
import useLogout from "../../hooks/dashboardHooks/useLogout";
import { Helmet } from "react-helmet-async";

const DashbordLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const { logoutBtn } = useLogout();

  const { user, isLoading, isError, setRetry } = useDashboardInfo();
  if (isLoading) return <Loader title="Getting User Information" />;
  if (isError)
    return <DashboardFetchError setRetry={setRetry} logoutBtn={logoutBtn} />;

  return (
    <>
      {user && (
        <>
          <Helmet>
            <title>
              Dashboard - {user?.userInfo.lastName} {user?.userInfo.firstName}
            </title>
            <meta
              name="Description"
              content="Swift Current is a secure banking application that offers seamless financial services, including transfer, deposits, Loan and more."
            />
          </Helmet>
          <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setClicked={setClicked}
          />
          <div className="w-full flex mt-[80px]">
            <div className="md:hidden">
              <MobileSidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setClicked={setClicked}
                clicked={clicked}
                logoutBtn={logoutBtn}
              />
            </div>
            <div className="hidden md:block">
              <DesktopSidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setClicked={setClicked}
                clicked={clicked}
                logoutBtn={logoutBtn}
              />
            </div>
            <div className="overflow-hidden w-full md:ml-[250px]">
              <div
                className={` min-h-[75vh] w-full mt-6 ${
                  user?.userInfo?.role !== "User" ? "bg-[#f1f5f6]" : ""
                }`}
              >
                <ScrollRestoration />
                <Outlet context={{ logoutBtn, user }} />
              </div>
              <Footer />
            </div>
          </div>
          <WhatsappContact />
        </>
      )}
    </>
  );
};

export default DashbordLayout;
