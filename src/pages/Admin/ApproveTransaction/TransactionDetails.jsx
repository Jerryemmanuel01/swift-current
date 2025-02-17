import { ChevronLeft, Copy } from "lucide-react";
import useTransactionDetails from "../../../hooks/adminHooks/useTransactionDetails";
import HeaderName from "../../../components/Dashboard/HeaderName";
import moment from "moment";
import Modal from "../../../components/General/Modal";
import { PiSpinner } from "react-icons/pi";

const TransactionDetails = () => {
  const {
    pendingTransaction,
    isLoading,
    isError,
    navigate,
    showModal,
    setShowModal,
    handleRowClick,
    selectedTransaction,
    handleCopy,
    copied,
    copiedHash,
    handleAction,
    setPinForm,
    pinForm,
    handleSubmit,
    pin,
    setPin,
    handleChange,
    transaction,
  } = useTransactionDetails();
  return (
    <section className="px-6 w-full bg-[#f1f5f6] -mt-6 py-6">
      <div className="sm:w-[450px] lg:w-[500px] mx-auto">
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => navigate(-1)}
            className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
          >
            <ChevronLeft className="w-5 md:w-6" />
          </button>
          <HeaderName title={"Transaction Details"} />
        </div>

        <div className="flex flex-col justify-center items-center rounded-xl md:text-sm text-xs shadow-xl px-4 py-4 mt-2">
          <div className="w-full flex flex-col justify-center mt-4 rounded-xl items-center md:text-sm text-xs px-4">
            {/* <img src={Logo} alt="" className="w-10 h-5" /> */}
            <p className="mt-1 md:mt-3 font-medium font-inter">
              {transaction?.type} from {transaction?.name.toUpperCase()}
            </p>
            <h2 className="mt-1 font-semibold text-base md:text-lg font-poppins text-dark">
              {transaction?.category === "Debit"
                ? "-" + transaction?.amount.toLocaleString()
                : transaction?.amount.toLocaleString()}
            </h2>
            <h4
              className={`mt-1 font-medium font-inter flex items-center gap-1 ${
                transaction?.status === "Approved"
                  ? "text-green-500"
                  : transaction?.status === "Pending"
                  ? "text-yellow"
                  : "text-red-500"
              }`}
            >
              {transaction?.status === "Approved" && (
                <span className="">
                  <Check className="w-4 bg-green-800 h-4 rounded-full p-0.5 text-white " />
                </span>
              )}
              {transaction?.status}
            </h4>
          </div>
          <h2 className="font-merriweather font-semibold w-full mt-6">
            Transaction Details
          </h2>
          <div className="border-b border-[#D0D5DD] py-3 w-full flex justify-between items-center mt-4">
            <p className="text-textGray ">Transaction Type</p>
            <p className="text-textGrafy font-medium font-inter">
              {transaction?.type}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Account Name</p>
            <p className="text-textGrafy font-medium font-inter">
              {transaction?.name}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Description</p>
            <p className="text-textGrafy font-medium font-inter">
              {transaction?.description || "null"}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Blockchain Network</p>
            <p className="text-textGrafy font-medium font-inter">
              {transaction?.metadata?.blockchainNetwork}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Wallet Address</p>
            <p className="text-textGrafy font-medium font-inter flex items-center gap-1">
              {transaction?.metadata?.walletAddress.substring(0, 15) + "..."}
              <button
                onClick={() => handleCopy(transaction?.metadata?.walletAddress)}
                type="button"
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
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Tranasaction Hash</p>
            <p className="text-textGrafy font-medium font-inter flex items-center gap-1">
              {transaction?.metadata?.transactionId.substring(0, 17) + "..."}
              <button
                onClick={() =>
                  handleCopy(transaction?.metadata?.transactionId, "hash")
                }
                type="button"
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
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Charges</p>
            <p className="text-textGrafy font-medium font-inter">
              ${transaction?.charges}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Transaction Id</p>
            <p className="text-textGrafy font-medium font-inter">
              {transaction?._id}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Transaction Date</p>
            <p className="text-textGrafy font-medium font-inter">
              {moment(transaction?.createdAt).format("MMM DD, YYYY hh:mm:ss A")}
            </p>
          </div>
          <div className="py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Category</p>
            <p className="text-textGrafy font-medium font-inter">
              {transaction?.category}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 text-sm">
          <button
            className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-300"
            onClick={() => handleAction("Failed")}
          >
            Decline
          </button>
          <button
            className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 duration-300"
            onClick={() => handleAction("Approved")}
          >
            Approve
          </button>
        </div>

        <Modal
          isOpen={pinForm}
          onClose={() => {
            setPinForm(false), setPin("");
          }}
          title="Transaction Pin"
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="sm:w-full">
              <label
                htmlFor="pin"
                className="font-medium tracking-wide text-sm"
              >
                Transfer Pin
              </label>
              <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
                <input
                  type="text"
                  name="pin"
                  id="pin"
                  className={`w-full h-10 text-sm font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
                  onChange={handleChange}
                  value={pin}
                />
              </div>
              <button
                className={`py-2 px-4 mt-3 ${
                  isLoading ? "bg-[#D0D5DD]" : "bg-primary"
                } text-white rounded-lg hover:bg-secondary duration-300 text-sm`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <PiSpinner className="text-base animate-spin" />
                    Please wait...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </section>
  );
};

export default TransactionDetails;
