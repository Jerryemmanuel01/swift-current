import { Check, Copy, ExternalLink } from "lucide-react";
import moment from "moment";


const TransactionReceiptDetails = ({transaction,copied, copiedHash, handleCopy, handleRowClick}) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl md:text-sm text-xs shadow-xl px-4 pb-4">
      <h2 className="font-merriweather font-semibold w-full">
        Transaction Details
      </h2>
      <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-4">
        <p className="text-textGray ">Action</p>
        <p className=" font-medium font-inter">{transaction?.type}</p>
      </div>
      {transaction?.metadata?.transferType && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Transaction Type</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.transferType}
          </p>
        </div>
      )}
      {transaction?.name && (
        <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
          <p className="text-textGray">Account Name</p>
          <p className=" font-medium font-inter">{transaction?.name}</p>
        </div>
      )}
      {transaction?.metadata?.accountNumber && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Account Number</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.accountNumber}
          </p>
        </div>
      )}
      {transaction?.metadata?.bankName && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Bank Name</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.bankName}
          </p>
        </div>
      )}
      {transaction?.metadata?.branchNumber && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Branch Number</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.branchNumber}
          </p>
        </div>
      )}
      {transaction?.metadata?.country && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Country</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.country}
          </p>
        </div>
      )}
      {transaction?.metadata?.swiftCode && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Swift Code</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.swiftCode}
          </p>
        </div>
      )}
      {transaction?.metadata?.sortCode && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">Sort Code</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.sortCode}
          </p>
        </div>
      )}
      {transaction?.metadata?.IBANCode && (
        <div className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1">
          <p className="text-textGray ">IBAN Code</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.IBANCode}
          </p>
        </div>
      )}
      {transaction?.metadata?.secondTransactionId && (
        <div
          className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1 cursor-pointer"
          onClick={() =>
            handleRowClick(transaction?.metadata?.secondTransactionId)
          }
        >
          <p className="text-textGray ">Transfer fee</p>
          <p className=" font-medium font-inter flex items-center gap-1">
            {transaction?.metadata?.secondTransactionId}{" "}
            <ExternalLink className="w-2.5" />
          </p>
        </div>
      )}
      {transaction?.metadata?.firstTransactionId && (
        <div
          className="border-b border-[#D0D5DD] py-2 w-full flex justify-between items-center mt-1 cursor-pointer"
          onClick={() =>
            handleRowClick(transaction?.metadata?.firstTransactionId)
          }
        >
          <p className="text-textGray ">Primary Transaction</p>
          <p className=" font-medium font-inter flex items-center gap-1">
            {transaction?.metadata?.firstTransactionId}{" "}
            <ExternalLink className="w-2.5" />
          </p>
        </div>
      )}
      {transaction?.metadata?.blockchainNetwork && (
        <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
          <p className="text-textGray">Blockchain Network</p>
          <p className=" font-medium font-inter">
            {transaction?.metadata?.blockchainNetwork}
          </p>
        </div>
      )}
      {transaction?.metadata?.walletAddress && (
        <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
          <p className="text-textGray">Wallet Address</p>
          <p className=" font-medium font-inter flex items-center gap-1">
            {transaction?.metadata?.walletAddress?.substring(0, 15) + "..."}
            <button
              name="action"
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
      )}
      {transaction?.metadata?.transactionId && (
        <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
          <p className="text-textGray">Tranasaction Hash</p>
          <p className=" font-medium font-inter flex items-center gap-1">
            {transaction?.metadata?.transactionId?.substring(0, 17) + "..."}
            <button
              name="action"
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
      )}
      {transaction?.chargePriorityFee && (
        <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
          <p className="text-textGray">Charge Priority Fee</p>
          <p className=" font-medium font-inter flex items-center gap-1">
            {transaction?.chargePriorityFee}
          </p>
        </div>
      )}
      <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
        <p className="text-textGray">Transaction Id</p>
        <p className="text-textGrafy font-medium font-inter">
          {transaction._id}
        </p>
      </div>
      <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
        <p className="text-textGray">Transaction Date</p>
        <p className="text-textGrafy font-medium font-inter">
          {moment(transaction.createdAt).format("MMM DD, YYYY hh:mm:ss A")}
        </p>
      </div>
      <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
        <p className="text-textGray">Category</p>
        <p className="text-textGrafy font-medium font-inter">
          {transaction.category}
        </p>
      </div>
      <div className="py-2 mt-1 w-full flex justify-between items-center">
        <p className="text-textGray">Description</p>
        <p className="text-textGrafy font-medium font-inter">
          {transaction.description || "null"}
        </p>
      </div>
    </div>
  );
}

export default TransactionReceiptDetails