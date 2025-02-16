import { Check, ChevronLeft, Copy } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/General/Modal";

const UserProfile = () => {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { users } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users?.find((obj) => obj.id === id);

  const dateTime = user.createdAt;
  const date = moment(dateTime).format("YYYY-MM-DD");
  const time = moment(dateTime).format("HH:mm:ss");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(user.accountNumber)
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
    <section className="w-full px-6 bg-[#f1f5f6] -mt-6 py-7">
      <div className="">
        <button
          onClick={() => navigate(-1)}
          className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
        >
          <ChevronLeft className="w-[18px] md:w-5" />
          Back
        </button>
        <div className="mt-10 p-6 bg-[#f6f8fa] border border-borderColor shadow-custom1 rounded-lg relative">
          <div className="absolute -top-6 w-24 h-24 rounded-full bg">
            <img
              src={user?.profileImage}
              alt=""
              className="w-24 h-24 object-cover rounded-full border-[6px] border-[#e8edf4]"
            />
          </div>
          <div className="mt-16">
            <div className="flex items-center gap-2">
              <h2 className="font-merriweather font-bold text-dark md:text-lg">
                {user.lastName} {user.firstName}
              </h2>
              {user.emailVerification && (
                <div className="rounded-full  bg-primary p-0.5">
                  <Check className="text-white w-2.5 h-2.5" />
                </div>
              )}
            </div>
            <h4 className="text-gray text-sm capitalize mt-0.5">
              {user.country}
            </h4>
          </div>
          {user.kycStatus === "Complete" && (
            <div className="flex items-center gap-2 mt-4 font-inter font-semibold">
              <button
                onClick={() => setShowModal(true)}
                className="px-3 py-2 tracking-wide text-[12px] md:text-[13px] rounded-lg hover:shadow-custom1 hover:scale-[1.01] duration-300 shadow-custom0 border border-borderColor text-primary"
              >
                KYC Details
              </button>
            </div>
          )}
        </div>
        <div className="mt-10 bg-borderColor/30 rounded-lg relative">
          <h2 className="text-darker px-6 py-3 bg-borderColor/30 text-lg font-inter tracking-wide font-medium">
            Profile
          </h2>
          <div className="mt-4 text-sm px-6 pb-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full flex sm:block items-center justify-between col-span-2 sm:col-span-1 gap-2">
                <h3 className="text-primary font-inter font-medium w-full">
                  Email
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray w-full">
                  <span className="">{user.email}</span>
                  {user.emailVerification && (
                    <div className="rounded-full  bg-primary p-0.5">
                      <Check className="text-white w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium w-full">
                  Account Number
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray w-full">
                  <span className="">{user.accountNumber}</span>
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
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Account Balance
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize font-bold">
                    {user.accountBalance.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Username
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.userName}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Currency
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.currency}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Phone Number
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="">{user.phone}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Account Type
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="">{user.accountType}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">Role</h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.role}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  KYC Status
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">{user.kycStatus}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Account Status
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="">{user.status}</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Occupation
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">
                    {user.occupation || "null"}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">Income</h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">
                    {user.income.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Expenses
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">
                    {user.expenses.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">Loan</h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <span className="capitalize">
                    {user.loan.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-primary font-inter font-medium">
                  Date of Opening
                </h3>
                <div className="flex gap-1.5 items-center text-[13px] text-textGray">
                  <h2 className="">{date}</h2>
                  <span className="text-gray text-[10px]">{time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="KYC Details"
        >
          <div className="">
            <img
              alt="id card"
              src={user.kycDocument.identityCardPhoto}
              className="w-full h-[220px] object-center rounded-lg"
            />
            <div className="mt-4 text-sm text-gray">
              <div className="flex items-center gap-2">
                <h2 className="font-inter">Identity Number:</h2>
                <span className="text-[13px] tracking-wide">
                  {user.kycDocument.identityNumber}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <h2 className="font-inter">Issuing Country:</h2>
                <span className="text-[13px] tracking-wide">
                  {user.kycDocument.issuingCountry}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <h2 className="font-inter">Identity Medium:</h2>
                <span className="text-[13px] tracking-wide">
                  {user.kycDocument.identityMedium}
                </span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default UserProfile;
