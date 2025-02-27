import { ChevronRight, LogOut } from "lucide-react";
import HeaderName from "../../../components/Dashboard/HeaderName";
import { Link, useOutletContext } from "react-router-dom";

const Settings = () => {
  const { logoutBtn } = useOutletContext();
  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] lg:max-w-[770px] xl:max-w-[900px] mx-auto">
      <HeaderName title={"Settings"} />
      <div className="text-sm mt-6">
        <h3 className="text-Gray font-inter font-medium">Profile Settings</h3>
        <Link
          to="/dashboard/manage-profile"
          className="flex items-center justify-between text-textGray border-b border-borderColor py-2 mt-1 "
        >
          <span>Update Email Address</span>
          <ChevronRight width={16} />
        </Link>
        <Link
          to="/dashboard/manage-profile"
          className="flex items-center justify-between text-textGray border-b border-borderColor py-2 mt-1 "
        >
          <span>Change Phone Number</span>
          <ChevronRight width={16} />
        </Link>
      </div>
      <div className="text-sm mt-6">
        <h3 className="text-Gray font-inter font-medium">Account Upgrade</h3>
        <Link
          to="/dashboard/upgrade-fee"
          className="flex items-center justify-between text-textGray border-b border-borderColor py-2 mt-1 "
        >
          <span>Upgrade</span>
          <ChevronRight width={16} />
        </Link>
        
      </div>
      <div className="text-sm mt-6">
        <h3 className="text-Gray font-inter font-medium">Security</h3>
        <Link
          to="/dashboard/manage-pin"
          className="flex items-center justify-between text-textGray border-b border-borderColor py-2 mt-1 "
        >
          <span>Transfer Pin</span>
          <ChevronRight width={16} />
        </Link>
        <Link
          to="/dashboard/manage-pin"
          className="flex items-center justify-between text-textGray border-b border-borderColor py-2 mt-1 "
        >
          <span>Update Password</span>
          <ChevronRight width={16} />
        </Link>
      </div>
      <button
        onClick={logoutBtn}
        className="flex gap-3 items-center text-sm md:text-base outline-none mt-10 hover:text-primary duration-300 mb-20"
      >
        <LogOut className="md:w-4 w-3.5" /> Logout
      </button>
    </section>
  );
};

export default Settings;
