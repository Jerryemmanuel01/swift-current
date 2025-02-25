import { PiSpinner } from "react-icons/pi";
import HeaderName from "../../../components/Dashboard/HeaderName";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  Copy,
  ExternalLink,
} from "lucide-react";
import useGetAllTransactions from "../../../hooks/adminHooks/useGetAllTransactions";
import moment from "moment";
import { TablePagination } from "@mui/material";
import Modal from "../../../components/General/Modal";

const GetTransactions = () => {
  const {
    products,
    allTransaction,
    handleRowClick,
    isError,
    isLoading,
    navigate,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    startIndex,
    setShowModal,
    showModal,
    userTransaction,
    copied,
    copiedHash,
    handleCopy,
    handleFilter,
    filter,
  } = useGetAllTransactions();

  console.log(userTransaction);
  
  
  return (
    <section className="w-full px-6 -mt-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => navigate(-1)}
            className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
          >
            <ChevronLeft className="w-5 md:w-6" />
          </button>
          <HeaderName title={"All Transactions"} />
        </div>

        <div className="mt-2 rounded-md bg-[#e4e4e4] relative">
          <select
            onChange={(e) => handleFilter(e)}
            name="fiter"
            id="filter"
            className="text-[10px] md:text-xs font-merriweather py-2 px-4 pr-8 rounded-md outline-none bg-inherit appearance-none"
          >
            <option value="">All</option>
            <option value="Deposit">Deposit</option>
            <option value="Transfer">Transfer</option>
            <option value="Swift Fee">Swift Fee</option>
            <option value="Account Upgrade">Upgrade</option>
            <option value="Crypto_Swift_Fee">Blockchain Fee</option>
            <option value="Token">Token</option>
            <option value="Loan">Loan</option>
          </select>
          <ChevronDown className="absolute top-1 right-2 w-4 pointer-events-none" />
        </div>
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Getting all transactions{" "}
            <PiSpinner className="animate-spin text-sm" />
          </h2>
        ) : isError ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Error getting users, please try again.
          </h2>
        ) : (
          <>
            <table className="w-full bg-[#f8f8f8] font-inter mt-4">
              <thead>
                <tr className="bg-primary/10 text-sm ">
                  <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Ref
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Name
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Status
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Category
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Transaction Date
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Amount
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Type
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {allTransaction.length
                  ? products?.map((val, i) => {
                      const dateTime = val.createdAt;
                      const date = moment(dateTime).format("YYYY-MM-DD");
                      const time = moment(dateTime).format("HH:mm:ss");

                      return (
                        <tr
                          className="even:bg-primary/5 text-xs cursor-pointer"
                          key={i}
                          onClick={() => handleRowClick(val._id, val)}
                        >
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            {startIndex + i + 1}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            {val._id.substring(0, 10) + "..."}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            {val.name || val.metadata.name}
                          </td>
                          <td
                            className={`px-4 py-3.5 whitespace-nowrap font-medium font-inter ${
                              val.status === "Approved"
                                ? "text-green-500"
                                : val.status === "Pending"
                                ? "text-yellow"
                                : "text-red-500"
                            }`}
                          >
                            {val.status}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            {val.category}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            <h2 className="">{date}</h2>
                            <span className="text-gray text-[9.5px]">
                              {time}
                            </span>
                          </td>
                          <td
                            className={`px-4 py-3.5 whitespace-nowrap ${
                              val.category === "Credit"
                                ? "text-primary"
                                : "text-red-600"
                            }`}
                          >
                            {val?.type === "Crypto Swift Fee" ? "ETH " : "$"}
                            {val.category === "Debit"
                              ? "-" + val.amount.toLocaleString()
                              : val.amount.toLocaleString()}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            {val.type}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            {val.description ? val.description : "null"}
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>

            {allTransaction.length !== 0 ? (
              <TablePagination
                component="div"
                count={allTransaction.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 20, 25, 50, 100]} // Options for rows per page
              />
            ) : (
              <p className="text-center py-4">No Transaction Available</p>
            )}
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title="Transaction Details"
            >
              {userTransaction && (
                <div className="flex flex-col justify-center items-center  text-xs ">
                  <div className="w-full flex flex-col justify-center rounded-xl items-center  text-xs px-4">
                    <p className=" font-medium font-inter">
                      {userTransaction?.type}{" "}
                      {userTransaction?.type === "Transfer" ? "To" : "from"}{" "}
                      {userTransaction?.name.toUpperCase()}
                    </p>
                    <h2 className={`mt-1 font-semibold text-base md:text-lg font-poppins ${userTransaction?.category === "Debit" ? "text-red-600":"text-dark"}`}>
                      {userTransaction?.type === "Crypto Swift Fee" ? "ETH " : "$"}
                      {userTransaction?.category === "Debit"
                        ? "-" + userTransaction?.amount.toLocaleString()
                        : userTransaction?.amount.toLocaleString()}
                    </h2>
                    <h4
                      className={`mt-1 font-medium font-inter flex items-center gap-1 ${
                        userTransaction?.status === "Approved"
                          ? "text-green-500"
                          : userTransaction?.status === "Pending"
                          ? "text-yellow"
                          : "text-red-500"
                      }`}
                    >
                      {userTransaction?.status === "Approved" && (
                        <span className="">
                          <Check className="w-4 bg-green-800 h-4 rounded-full p-0.5 text-white " />
                        </span>
                      )}
                      {userTransaction?.status}
                    </h4>
                  </div>
                  <h2 className="font-merriweather font-semibold w-full mt-4">
                    Transaction Details
                  </h2>
                  <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-2">
                    <p className="text-textGray ">Action</p>
                    <p className=" font-medium font-inter">
                      {userTransaction?.type}
                    </p>
                  </div>
                  {userTransaction?.metadata?.transferType && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Transaction Type</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.transferType}
                      </p>
                    </div>
                  )}
                  {userTransaction?.name && (
                    <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
                      <p className="text-textGray">Account Name</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.name}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.accountNumber && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Account Number</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.accountNumber}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.bankName && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Bank Name</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.bankName}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.branchNumber && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Branch Number</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.branchNumber}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.country && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Country</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.country}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.swiftCode && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Swift Code</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.swiftCode}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.sortCode && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">Sort Code</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.sortCode}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.IBANCode && (
                    <div className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1">
                      <p className="text-textGray ">IBAN Code</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.IBANCode}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.secondTransactionId && (
                    <div
                      className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1 cursor-pointer"
                      onClick={() =>
                        filter === "" &&
                        handleRowClick(
                          userTransaction?.metadata?.secondTransactionId
                        )
                      }
                    >
                      <p className="text-textGray ">Transfer fee</p>
                      <p className=" font-medium font-inter flex items-center gap-1">
                        {userTransaction?.metadata?.secondTransactionId}{" "}
                        {filter === "" ? (
                          <ExternalLink className="w-2.5" />
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.firstTransactionId && (
                    <div
                      className="border-b border-[#D0D5DD] py-1.5 w-full flex justify-between items-center mt-1 cursor-pointer"
                      onClick={() =>
                        filter === "" &&
                        handleRowClick(
                          userTransaction?.metadata?.firstTransactionId
                        )
                      }
                    >
                      <p className="text-textGray ">Primary Transaction</p>
                      <p className=" font-medium font-inter flex items-center gap-1">
                        {userTransaction?.metadata?.firstTransactionId}{" "}
                        {filter === "" ? (
                          <ExternalLink className="w-2.5" />
                        ) : (
                          ""
                        )}{" "}
                      </p>
                    </div>
                  )}
                  <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                    <p className="text-textGray">Description</p>
                    <p className=" font-medium font-inter">
                      {userTransaction?.description || "null"}
                    </p>
                  </div>
                  {userTransaction?.metadata?.blockchainNetwork && (
                    <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                      <p className="text-textGray">Blockchain Network</p>
                      <p className=" font-medium font-inter">
                        {userTransaction?.metadata?.blockchainNetwork}
                      </p>
                    </div>
                  )}
                  {userTransaction?.metadata?.walletAddress && (
                    <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                      <p className="text-textGray">Wallet Address</p>
                      <p className=" font-medium font-inter flex items-center gap-1">
                        {userTransaction?.metadata?.walletAddress?.substring(
                          0,
                          15
                        ) + "..."}
                        <button
                          onClick={() =>
                            handleCopy(userTransaction?.metadata?.walletAddress)
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
                  )}
                  {userTransaction?.metadata?.transactionId && (
                    <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                      <p className="text-textGray">Tranasaction Hash</p>
                      <p className=" font-medium font-inter flex items-center gap-1">
                        {userTransaction?.metadata?.transactionId?.substring(
                          0,
                          17
                        ) + "..."}
                        <button
                          onClick={() =>
                            handleCopy(
                              userTransaction?.metadata?.transactionId,
                              "hash"
                            )
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
                  )}
                  {userTransaction?.chargePriorityFee && (
                    <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                      <p className="text-textGray">Charge Priority Fee</p>
                      <p className=" font-medium font-inter flex items-center gap-1">
                        {userTransaction?.chargePriorityFee}
                      </p>
                    </div>
                  )}

                  <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                    <p className="text-textGray">Transaction Id</p>
                    <p className=" font-medium font-inter">
                      {userTransaction?._id}
                    </p>
                  </div>
                  <div className="border-b border-[#D0D5DD] py-1.5 mt-1 w-full flex justify-between items-center">
                    <p className="text-textGray">Transaction Date</p>
                    <p className=" font-medium font-inter">
                      {moment(userTransaction?.createdAt).format(
                        "MMM DD, YYYY hh:mm:ss A"
                      )}
                    </p>
                  </div>
                  <div className="py-1.5 mt-1 w-full flex justify-between items-center">
                    <p className="text-textGray">Category</p>
                    <p className=" font-medium font-inter">
                      {userTransaction?.category}
                    </p>
                  </div>
                </div>
              )}
            </Modal>
          </>
        )}
      </div>
    </section>
  );
};

export default GetTransactions;
