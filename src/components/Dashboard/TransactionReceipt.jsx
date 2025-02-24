import { Check, ChevronLeft, Copy, ExternalLink } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/Images/blue-name-logo.png";
import { useState } from "react";
import toast from "react-hot-toast";
import TransactionReceiptDetails from "./TransactionReceiptDetails";

const TransactionReceipt = () => {
  const [copied, setCopied] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  const { transactions } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { id } = useParams();
  const transaction = transactions.find((obj) => obj._id === id);

  const handleRowClick = (id) => {
    navigate(`/dashboard/receipt/${id}`);
  };

  const handleCopy = (id, type) => {
    if (id) {
      navigator.clipboard
        .writeText(id)
        .then(() => {
          if (type === "hash") {
            setCopiedHash(true);
          } else {
            setCopied(true);
          }
          toast.success("Copied");
          setTimeout(() => {
            setCopied(false), setCopiedHash(false);
          }, 2000); // Reset after 2 seconds
        })
        .catch((error) => {
          toast.error("Failed to copy text: ", error);
        });
      return;
    }
    toast.error("Failed to copy text");
  };

  return (
    <section className="px-6 w-full ">
      <div className="sm:w-[450px] lg:w-[500px] mx-auto">
        <button
          onClick={() => navigate(-1)}
          className=" flex items-center gap-1 outline-none text-darker hover:text-primary duration-300"
        >
          <ChevronLeft className="w-4 md:w-5" />
          <span className="text-sm md:text-base">Transaction Details</span>
        </button>

        <div className="w-full border border-[#D0D5DD] shadow-md rounded-xl mt-5 bg-slate-100">
          <div className="w-full flex flex-col justify-center rounded-xl items-center md:text-sm text-xs px-4 py-6">
            <img src={Logo} alt="" className="w-10 h-5" />
            <p className="mt-1 md:mt-3 font-medium font-inter">
              {transaction.type} from {transaction.name.toUpperCase()}
            </p>
            <h2 className="mt-1 font-semibold text-base md:text-lg font-poppins text-dark">
              $
              {transaction.category === "Debit"
                ? "-" + transaction.amount.toLocaleString()
                : transaction.amount.toLocaleString()}
            </h2>
            <h4
              className={`mt-1 font-medium font-inter flex items-center gap-1 ${
                transaction.status === "Approved"
                  ? "text-green-500"
                  : transaction.status === "Pending"
                  ? "text-yellow"
                  : "text-red-500"
              }`}
            >
              {transaction.status === "Approved" && (
                <span className="">
                  <Check className="w-4 bg-green-800 h-4 rounded-full p-0.5 text-white " />
                </span>
              )}
              {transaction.status}
            </h4>
          </div>

          <TransactionReceiptDetails
            transaction={transaction}
            copied={copied}
            copiedHash={copiedHash}
            handleCopy={handleCopy}
            handleRowClick={handleRowClick}
          />
        </div>
      </div>
    </section>
  );
};

export default TransactionReceipt;
