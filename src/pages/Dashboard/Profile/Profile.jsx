import { Check, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Profile = () => {
  const [copied, setCopied] = useState(false);
  const { user } = useSelector((state) => state.userInfo);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(user.userInfo.accountNumber)
      .then(() => {
        setCopied(true);
        toast.success("Account number copied");
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((error) => {
        toast.error("Failed to copy text: ", error);
      });
    return;
  };
  return (
    <section className="">
      <section className="px-6 mb-8 w-full md:max-w-[670px] lg:max-w-[770px] xl:max-w-[900px] mx-auto">
        <div className="mt-14 p-6 bg-[#eef3f9] border border-borderColor shadow-custom1 rounded-lg relative">
          <div className="absolute -top-6 w-24 h-24 rounded-full bg">
            <img
              src={user.userInfo?.profileImage}
              alt=""
              className="w-24 h-24 object-cover rounded-full border-[6px] border-[#e8edf4]"
            />
          </div>
          <div className="mt-16">
            <div className="flex items-center gap-2">
              <h2 className="font-merriweather font-bold text-dark md:text-lg">
                {user.userInfo.lastName} {user.userInfo.firstName}
              </h2>
              {user.userInfo.emailVerification && (
                <div className="rounded-full  bg-primary p-0.5">
                  <Check className="text-white w-2.5 h-2.5" />
                </div>
              )}
            </div>
            <h4 className="text-gray text-sm capitalize mt-0.5">
              {user.userInfo.country}
            </h4>
            <div className="flex items-center gap-2 mt-6 font-inter font-semibold">
              <Link
                to="/dashboard/KYC"
                className="px-3 py-2 tracking-wide text-[12px] md:text-[13px] rounded-lg hover:shadow-custom1 hover:scale-[1.01] duration-300 shadow-custom0 border border-borderColor text-primary"
              >
                KYC
              </Link>
              <Link
                to="/dashboard/settings"
                className="px-3 py-2 tracking-wide text-[12px] md:text-[13px] rounded-lg hover:shadow-custom1 hover:scale-[1.01] duration-300 shadow-custom0 border border-borderColor text-textGray"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-borderColor/30 border border-borderColor shadow-custom1 rounded-md relative">
          <h2 className="text-darker px-6 py-3 bg-borderColor/30 text-lg font-inter tracking-wide font-medium">
            Profile
          </h2>
          <div className="mt-4 text-sm px-6 pb-4">
            <div className="md:flex justify-between">
              <div className="w-full md:block flex items-center gap-2 justify-between">
                <h3 className="text-primary font-inter font-medium w-full">
                  Account Number
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray w-full">
                  <span className="">{user.userInfo.accountNumber}</span>
                  <button
                    onClick={handleCopy}
                    type="button"
                    className=" flex items-center justify-center"
                  >
                    {copied ? (
                      <Check className="w-3.5 " />
                    ) : (
                      <Copy className="w-3.5 " />
                    )}
                  </button>
                </div>
              </div>
              <div className="w-full md:block flex items-center gap-2 justify-between mt-4 md:mt-0">
                <h3 className="text-primary font-inter font-medium w-full">Email</h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray w-full">
                  <span className="">{user.userInfo.email}</span>
                  {user.userInfo.emailVerification && (
                    <div className="rounded-full  bg-primary p-0.5">
                      <Check className="text-white w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Account Type
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="">{user.userInfo.accountType}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Currency
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.userInfo.currency}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Phone Number
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="">{user.userInfo.phone}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  KYC Status
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.userInfo.kycStatus}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Account Status
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="">{user.userInfo.status}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Occupation
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.userInfo.occupation || "null"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
