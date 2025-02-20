import { Check, ChevronLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/Images/blue-name-logo.png";
import moment from "moment";

const TransactionReceipt = () => {
  const { transactions } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { id } = useParams();
  const transaction = Object.values(transactions).find((obj) => obj._id === id);

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
          <div className="flex flex-col justify-center items-center rounded-xl md:text-sm text-xs shadow-xl px-4 pb-4">
            <h2 className="font-merriweather font-semibold w-full">
              Transaction Details
            </h2>
            <div className="border-b border-[#D0D5DD] py-3 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray ">Transaction Type</p>
              <p className="text-textGrafy font-medium font-inter">
                {transaction.type}
              </p>
            </div>
            <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Bank Name</p>
              <p className="text-textGrafy font-medium font-inter">
                Swift Current Bank
              </p>
            </div>
            <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Account Name</p>
              <p className="text-textGrafy font-medium font-inter">
                {transaction.name}
              </p>
            </div>
            <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Charges</p>
              <p className="text-textGrafy font-medium font-inter">
                ${transaction.charges || 0}
              </p>
            </div>
            <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Transaction Id</p>
              <p className="text-textGrafy font-medium font-inter">
                {transaction._id}
              </p>
            </div>
            <div className="border-b border-[#D0D5DD] py-2 mt-1 w-full flex justify-between items-center">
              <p className="text-textGray">Transaction Date</p>
              <p className="text-textGrafy font-medium font-inter">
                {moment(transaction.createdAt).format(
                  "MMM DD, YYYY hh:mm:ss A"
                )}
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
        </div>
      </div>
    </section>
  );
};

export default TransactionReceipt;
