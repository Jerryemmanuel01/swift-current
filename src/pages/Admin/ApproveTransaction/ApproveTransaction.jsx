import { Check, ChevronLeft, Copy } from "lucide-react";
import useApproveTransaction from "../../../hooks/adminHooks/useApproveTransaction";
import HeaderName from "../../../components/Dashboard/HeaderName";
import Modal from "../../../components/General/Modal";
import { ImSpinner5 } from "react-icons/im";
import moment from "moment";
import { PiSpinner } from "react-icons/pi";

const ApproveTransaction = () => {
  const {
    isError,
    isLoading,
    pendingTransaction,
    navigate,
    setShowModal,
    showModal,
    handleRowClick,
    selectedTransaction,
    handleCopy,
    copied,
    handleAction,
    pinForm,
    setPinForm,
    handleSubmit,
    handleChange,
    setPin,
    pin,
  } = useApproveTransaction();
  return (
    <section className="w-full px-6 bg-[#f1f5f6] -mt-6 py-6">
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={() => navigate(-1)}
          className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
        >
          <ChevronLeft className="w-5 md:w-6" />
        </button>
        <HeaderName title={"Pending Transactions"} />
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Getting pending transactions{" "}
            <ImSpinner5 className="animate-spin text-sm" />
          </h2>
        ) : isError ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Error getting pending transactions, please try again.
          </h2>
        ) : (
          <table className="w-full bg-[#f8f8f8] font-inter mt-4">
            <thead>
              <tr className="bg-primary/10 text-sm ">
                <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">ID</th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">Name</th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Amount
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">Type</th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Category
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Status
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Charges
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Description
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody>
              {pendingTransaction?.map((val, i) => {
                const dateTime = val.createdAt;
                const date = moment(dateTime).format("YYYY-MM-DD");
                const time = moment(dateTime).format("HH:mm:ss");
                return (
                  <tr
                    key={i}
                    className="even:bg-primary/5 text-xs cursor-pointer"
                    onClick={() => handleRowClick(val.id)}
                  >
                    <td className="px-4 py-3.5 whitespace-nowrap">{i + 1}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.id.substring(0, 10) + "..."}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.name}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.type}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.category}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap tracking-wide">
                      {val.status}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.charges}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {val.description}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <h2 className="">{date}</h2>
                      <span className="text-gray text-[9.5px]">{time}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Approve Transaction"
      >
        <div className="w-full flex flex-col justify-center rounded-xl items-center md:text-sm text-xs px-4">
          {/* <img src={Logo} alt="" className="w-10 h-5" /> */}
          <p className="mt-1 md:mt-3 font-medium font-inter">
            {selectedTransaction?.type} from{" "}
            {selectedTransaction?.name.toUpperCase()}
          </p>
          <h2 className="mt-1 font-semibold text-base md:text-lg font-poppins text-dark">
            {selectedTransaction?.category === "Debit"
              ? "-" + selectedTransaction?.amount.toLocaleString()
              : selectedTransaction?.amount.toLocaleString()}
          </h2>
          <h4
            className={`mt-1 font-medium font-inter flex items-center gap-1 ${
              selectedTransaction?.status === "Approved"
                ? "text-green-500"
                : selectedTransaction?.status === "Pending"
                ? "text-yellow"
                : "text-red-500"
            }`}
          >
            {selectedTransaction?.status === "Approved" && (
              <span className="">
                <Check className="w-4 bg-green-800 h-4 rounded-full p-0.5 text-white " />
              </span>
            )}
            {selectedTransaction?.status}
          </h4>
        </div>

        <div className="flex flex-col justify-center items-center rounded-xl md:text-sm text-xs shadow-xl px-4 pb-4">
          <h2 className="font-merriweather font-semibold w-full">
            Transaction Details
          </h2>
          <div className="border-b border-[#D0D5DD] py-3 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray ">Transaction Type</p>
            <p className="text-textGrafy font-medium font-inter">
              {selectedTransaction?.type}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Account Name</p>
            <p className="text-textGrafy font-medium font-inter">
              {selectedTransaction?.name}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Description</p>
            <p className="text-textGrafy font-medium font-inter">
              {selectedTransaction?.description || "null"}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Blockchain Network</p>
            <p className="text-textGrafy font-medium font-inter">
              {selectedTransaction?.metadata?.blockchainNetwork}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Wallet Address</p>
            <p className="text-textGrafy font-medium font-inter flex items-center gap-1">
              {selectedTransaction?.metadata?.walletAddress.substring(0, 15) +
                "..."}
              <button
                onClick={() =>
                  handleCopy(selectedTransaction?.metadata?.walletAddress)
                }
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
              {selectedTransaction?.metadata?.transactionId.substring(0, 17) +
                "..."}
              <button
                onClick={() =>
                  handleCopy(selectedTransaction?.metadata?.transactionId)
                }
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
            <p className="text-textGray">Charges</p>
            <p className="text-textGrafy font-medium font-inter">
              ${selectedTransaction?.charges}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Transaction Id</p>
            <p className="text-textGrafy font-medium font-inter">
              {selectedTransaction?.id}
            </p>
          </div>
          <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Transaction Date</p>
            <p className="text-textGrafy font-medium font-inter">
              {moment(selectedTransaction?.createdAt).format(
                "MMM DD, YYYY hh:mm:ss A"
              )}
            </p>
          </div>
          <div className="py-2 mt-1 w-full flex justify-between items-center">
            <p className="text-textGray">Category</p>
            <p className="text-textGrafy font-medium font-inter">
              {selectedTransaction?.category}
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
      </Modal>
    </section>
  );
};

export default ApproveTransaction;
