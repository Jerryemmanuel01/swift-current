import { Check, ChevronLeft, Copy } from "lucide-react";
import HeaderName from "../../../components/Dashboard/HeaderName";
import { useOutletContext } from "react-router-dom";
import Logo from "../../../assets/Images/swiftcurrent-whiteLogo.png";
import useNotification from "../../../hooks/dashboardHooks/useNotification";
import moment from "moment/moment";
import Modal from "../../../components/General/Modal";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";

const Notification = () => {
  const {
    navigate,
    userInfo,
    isLoading,
    notifications,
    setShowModal,
    showModal,
    handleRowClick,
    isNotificationLoading,
    notification,
  } = useNotification();

  return (
    <section className={` ${userInfo?.role !== "User" ? "-mt-6 py-6" : ""} `}>
      <div className="flex items-center gap-3 mt-2 px-6">
        <button
          name="action"
          onClick={() => navigate(-1)}
          className="outline-none flex items-center gap-1.5 text-sm md:text-base"
        >
          <ChevronLeft className="w-5 md:w-6" />
        </button>
        <HeaderName title={"Notifications"} />
      </div>

      <div className="mt-4">
        {notifications.length ? (
          notifications?.map((notification) => {
            const dateTime = notification?.createdAt;
            const date = moment(dateTime).format("MMM Do, HH:mm:ss");

            return (
              <div
                className={` ${
                  notification?.isRead ? "bg-[#f6f8f9]" : ""
                } border-b border-borderColor px-6 py-3 flex items-center gap-2 w-full cursor-pointer`}
                onClick={() => handleRowClick(notification?._id)}
              >
                <div className="rounded-full shadow-custom bg-primary/90 w-[45px] h-[40px] p-1 flex items-center justify-center">
                  <img src={Logo} alt="" width={32} />
                </div>
                <div className="w-full">
                  <div className="flex justify-between gap-2 w-full">
                    <h2 className="text-sm font-semibold font-merriweather">
                      {notification?.title}
                    </h2>
                    <div className="flex gap-0.5">
                      <h6 className="text-[10.5px] md:text-xs font-inter font-medium">
                        {date}
                      </h6>
                      {!notification?.isRead && (
                        <span className="w-[5px] h-[5px] rounded-full bg-red-600"></span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-xs font-inter tracking-wide max-w-[700px]">
                    {notification?.title === "Deposit" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your deposit of $
                          {notification?.metadata?.amount.toLocaleString()} is
                          being processed. You’ll receive a confirmation once
                          it's completed. If you have any questions, contact our
                          support team.
                        </span>
                      )}
                    {notification?.title === "Deposit" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your deposit of $
                          {notification?.metadata?.amount.toLocaleString()} has
                          been successfully processed, and your account has been
                          credited. Thank you for banking with us!
                        </span>
                      )}
                    {notification?.title === "Deposit" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your deposit of $
                          {notification?.metadata?.amount.toLocaleString()} has
                          failed. Please try again or contact support for
                          assistance.
                        </span>
                      )}
                    {notification?.title === "Internal Transfer" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your account has been {notification?.category}ed with{" "}
                          ${notification?.metadata?.amount.toLocaleString()}.
                          Thank you for banking with us!
                        </span>
                      )}
                    {notification?.title === "Internal Transfer" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your Transfer of $
                          {notification?.metadata?.amount.toLocaleString()} has
                          failed. Please try again or contact support for
                          assistance.
                        </span>
                      )}
                    {notification?.title === "Token" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your token purchase is being processed. You will
                          receive a confirmation shortly.
                        </span>
                      )}
                    {notification?.title === "Token" ||
                      (notification?.title === "Token Purchase" &&
                        notification?.status === "Approved" && (
                          <span>
                            Your token purchase was successful! Check your email
                            or the token page for your OTP.
                          </span>
                        ))}
                    {notification?.title === "Token" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your token purchase was unsuccessful. Please try again
                          or contact support if the issue persists.
                        </span>
                      )}
                    {notification?.title === "Swift Current Fund" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your account has been {notification?.category}ed with
                          ${notification?.metadata?.amount.toLocaleString()}.
                          Thank you for banking with us!
                        </span>
                      )}
                    {notification?.title === "Swift Current Debt" &&
                      notification?.status === "Approved" && (
                        <span>
                          <span>
                            Your account has been {notification?.category}ed
                            with $
                            {notification?.metadata?.amount.toLocaleString()}.
                            Thank you for banking with us!
                          </span>
                        </span>
                      )}
                    {notification?.title === "International Transfer" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your international transaction is currently pending.
                          Please allow some time for processing.
                        </span>
                      )}
                    {notification?.title === "International Transfer" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your international transaction has been processed
                          successfully.
                        </span>
                      )}
                    {notification?.title === "International Transfer" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your international transaction could not be completed.
                          Please try again or contact support.
                        </span>
                      )}
                    {notification?.title === "Local Transfer" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your local transfer is currently pending. Please allow
                          some time for processing.
                        </span>
                      )}
                    {notification?.title === "Local Transfer" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your local transfer has been processed successfully.
                        </span>
                      )}
                    {notification?.title === "Local Transfer" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your local transfer could not be completed. Please try
                          again or contact support.
                        </span>
                      )}
                    {notification?.title === "Crypto Transfer" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your crypto transfer of $
                          {notification?.metadata?.amount.toLocaleString()} is
                          currently pending. Please allow some time for
                          processing.
                        </span>
                      )}
                    {notification?.title === "Crypto Transfer" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your crypto transfer of $
                          {notification?.metadata?.amount.toLocaleString()} has
                          been processed successfully.
                        </span>
                      )}
                    {notification?.title === "Crypto Transfer" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your crypto transfer of $
                          {notification?.metadata?.amount.toLocaleString()}{" "}
                          could not be completed. Please try again or contact
                          support.
                        </span>
                      )}
                    {notification?.title === "Loan Request" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your loan application for $
                          {notification?.metadata?.amount.toLocaleString()} has
                          been received and is currently under review. We’ll
                          update you soon.
                        </span>
                      )}
                    {notification?.title === "Loan" &&
                      notification?.status === "Approved" && (
                        <span>
                          Great news! Your loan application for $
                          {notification?.metadata?.amount.toLocaleString()} has
                          been approved. Check your account for details.
                        </span>
                      )}
                    {notification?.title === "Loan" &&
                      notification?.status === "Failed" && (
                        <span>
                          Unfortunately, your loan application for $
                          {notification?.metadata?.amount.toLocaleString()} was
                          not approved. Please contact support for assistance.
                        </span>
                      )}
                    {notification?.title === "Swift Fee" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your Swift fee transaction is being processed. Please
                          wait while we complete the transaction.
                        </span>
                      )}
                    {notification?.title === "Swift Fee" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your Swift fee transaction has been successfully
                          processed. Thank you!
                        </span>
                      )}
                    {notification?.title === "Swift Fee" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your Swift fee transaction failed. Please try again or
                          contact support for assistance.
                        </span>
                      )}
                    {notification?.title === "Crypto Swift Fee" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your ethereum gas fee transaction is being processed.
                          Please wait while we complete the transaction.
                        </span>
                      )}
                    {notification?.title === "Crypto Swift Fee" &&
                      notification?.status === "Approved" && (
                        <span>
                          Your ethereum gas fee transaction has been
                          successfully processed. Thank you!
                        </span>
                      )}
                    {notification?.title === "Crypto Swift Fee" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your ethereum gas fee transaction failed. Please try
                          again or contact support for assistance.
                        </span>
                      )}
                    {notification?.title === "Account Upgrade" &&
                      notification?.status === "Pending" && (
                        <span>
                          Your account upgrade request is being processed. We'll
                          notify you once it's approved.
                        </span>
                      )}
                    {notification?.title === "Account Upgrade" &&
                      notification?.status === "Approved" && (
                        <span>
                          Congratulations! Your account upgrade has been
                          approved. Enjoy your new benefits.
                        </span>
                      )}
                    {notification?.title === "Account Upgrade" &&
                      notification?.status === "Failed" && (
                        <span>
                          Your account upgrade request was not approved. Please
                          contact support for more details.
                        </span>
                      )}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-4 text-sm">
            No notification available
          </div>
        )}
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Transaction Details"
      >
        {isNotificationLoading ? (
          <div className="flex gap-2 items-center justify-center">
            <PiSpinner className="animate-spin" />
            <span className="">Loading...</span>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center  text-xs ">
            <div className="w-full flex flex-col justify-center rounded-xl items-center  text-xs px-4">
              <p className=" font-medium font-inter">
                {notification?.title}{" "}
                {/* {notification?.type === "Transfer" ? "To" : "from"}{" "}
                {notification?.name} */}
              </p>
              <h2
                className={`mt-1 font-semibold text-base md:text-lg font-poppins ${
                  notification?.category === "Debit"
                    ? "text-red-600"
                    : "text-dark"
                }`}
              >
                {notification?.type === "Crypto Swift Fee" ? "ETH " : "$"}
                {notification?.category === "Debit"
                  ? "-" +
                    notification?.metadata?.amount
                      .toLocaleString()
                      .toLocaleString()
                  : notification?.metadata?.amount.toLocaleString()}
              </h2>
              <h4
                className={`mt-1 font-medium font-inter flex items-center gap-1 ${
                  notification?.status === "Approved"
                    ? "text-green-500"
                    : notification?.status === "Pending"
                    ? "text-yellow"
                    : "text-red-500"
                }`}
              >
                {notification?.status === "Approved" && (
                  <span className="">
                    <Check className="w-4 bg-green-800 h-4 rounded-full p-0.5 text-white " />
                  </span>
                )}
                {notification?.status}
              </h4>
            </div>
            <h2 className="font-merriweather font-semibold w-full mt-4">
              Transaction Details
            </h2>
            <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-2">
              <p className="text-textGray ">Type</p>
              <p className=" font-medium font-inter">{notification?.type}</p>
            </div>
            {notification?.metadata?.transferType && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Transaction Type</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.transferType}
                </p>
              </div>
            )}
            {notification?.name && (
              <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
                <p className="text-textGray">Account Name</p>
                <p className=" font-medium font-inter">{notification?.name}</p>
              </div>
            )}
            {notification?.metadata?.accountNumber && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Account Number</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.accountNumber}
                </p>
              </div>
            )}
            {notification?.metadata?.bankName && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Bank Name</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.bankName}
                </p>
              </div>
            )}
            {notification?.metadata?.branchNumber && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Branch Number</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.branchNumber}
                </p>
              </div>
            )}
            {notification?.metadata?.country && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Country</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.country}
                </p>
              </div>
            )}
            {notification?.metadata?.swiftCode && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Swift Code</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.swiftCode}
                </p>
              </div>
            )}
            {notification?.metadata?.sortCode && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">Sort Code</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.sortCode}
                </p>
              </div>
            )}
            {notification?.metadata?.IBANCode && (
              <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                <p className="text-textGray ">IBAN Code</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.IBANCode}
                </p>
              </div>
            )}
            {notification?.metadata?.secondTransactionId && (
              <div
                className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1 cursor-pointer"
                onClick={() =>
                  filter === "" &&
                  handleRowClick(notification?.metadata?.secondTransactionId)
                }
              >
                <p className="text-textGray ">Transfer fee</p>
                <p className=" font-medium font-inter flex items-center gap-1">
                  {notification?.metadata?.secondTransactionId}{" "}
                  {filter === "" ? <ExternalLink className="w-2.5" /> : ""}
                </p>
              </div>
            )}
            {notification?.metadata?.firstTransactionId && (
              <div
                className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1 cursor-pointer"
                onClick={() =>
                  filter === "" &&
                  handleRowClick(notification?.metadata?.firstTransactionId)
                }
              >
                <p className="text-textGray ">Primary Transaction</p>
                <p className=" font-medium font-inter flex items-center gap-1">
                  {notification?.metadata?.firstTransactionId}{" "}
                  {filter === "" ? <ExternalLink className="w-2.5" /> : ""}{" "}
                </p>
              </div>
            )}
            <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Description</p>
              <p className=" font-medium font-inter">
                {notification?.description || "null"}
              </p>
            </div>
            {notification?.metadata?.blockchainNetwork && (
              <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                <p className="text-textGray">Blockchain Network</p>
                <p className=" font-medium font-inter">
                  {notification?.metadata?.blockchainNetwork}
                </p>
              </div>
            )}
            {notification?.metadata?.walletAddress && (
              <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                <p className="text-textGray">Wallet Address</p>
                <p className=" font-medium font-inter flex items-center gap-1">
                  {notification?.metadata?.walletAddress?.substring(0, 15) +
                    "..."}
                  <button
                    onClick={() =>
                      handleCopy(notification?.metadata?.walletAddress)
                    }
                    type="button"
                    name="action"
                    className="flex items-center justify-center"
                  >
                    {copied ? (
                      <Check className="w-3.5 " />
                    ) : (
                      <Copy className="w-3.5 " />
                    )}
                  </button>
                </p>
              </div>
            )}
            {notification?.metadata?.transactionId && (
              <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                <p className="text-textGray">Tranasaction Hash</p>
                <p className=" font-medium font-inter flex items-center gap-1">
                  {notification?.metadata?.transactionId?.substring(0, 17) +
                    "..."}
                  <button
                    onClick={() =>
                      handleCopy(notification?.metadata?.transactionId, "hash")
                    }
                    type="button"
                    name="action"
                    className="flex items-center justify-center"
                  >
                    {copiedHash ? (
                      <Check className="w-3.5 " />
                    ) : (
                      <Copy className="w-3.5 " />
                    )}
                  </button>
                </p>
              </div>
            )}
            {notification?.chargePriorityFee && (
              <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                <p className="text-textGray">Charge Priority Fee</p>
                <p className=" font-medium font-inter flex items-center gap-1">
                  {notification?.chargePriorityFee}
                </p>
              </div>
            )}

            <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Transaction Id</p>
              <p className=" font-medium font-inter">{notification?._id}</p>
            </div>
            <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Transaction Date</p>
              <p className=" font-medium font-inter">
                {moment(notification?.createdAt).format("MMM DD, hh:mm:ss")}
              </p>
            </div>
            <div className="py-1.5 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Category</p>
              <p className=" font-medium font-inter">
                {notification?.category}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Notification;
