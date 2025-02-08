import { ChevronDown, ChevronRight, ChevronUp, LogOut } from "lucide-react";
import EditPinForm from "../../../components/Dashboard/EditPinForm";
import EditProfileForm from "../../../components/Dashboard/EditProfileForm";
import { useState } from "react";
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
{
  /* <div className="overflow-hidden mt-8">
        <div
          className={`flex items-center justify-between text-darker px-6 py-3 border-x border-borderColor bg-borderColor/30 md:text-lg font-inter tracking-wide font-medium ${
            toggleProfile ? "rounded-t-md  border-t" : "rounded-md  border"
          }`}
        >
          <span className="">Manage Profile</span>
          <button
            className="outline-none"
            onClick={() => setToggleProfile((prev) => !prev)}
          >
            {toggleProfile ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <div
          className={`overflow-hidden duration-500 transition-all mt- px-6 border-x border-b border-borderColor shadow-custo rounded-b-lg ${
            toggleProfile ? "opacity-100 py-4 md:py-6" : "opacity-0 h-0"
          }`}
        >
          <EditProfileForm />
        </div>
      </div>

      <div className="mt-10">
        <div
          className={`flex items-center justify-between text-darker px-6 py-3 border-x border-borderColor bg-borderColor/30 md:text-lg font-inter tracking-wide font-medium ${
            togglePin ? "rounded-t-md  border-t" : "rounded-md  border"
          }`}
        >
          <span className="">Manage pin & password</span>
          <button
            className="outline-none"
            onClick={() => setTogglePin((prev) => !prev)}
          >
            {togglePin ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <div
          className={`overflow-hidden duration-500 transition-all mt- px-6 md:py-6 border-x border-b border-borderColor shadow-custo rounded-b-lg ${
            togglePin ? "opacity-100 py-4" : "opacity-0 h-0"
          }`}
        >
          <EditPinForm />
        </div>
      </div> */
}
