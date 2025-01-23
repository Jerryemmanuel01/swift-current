import {
  Wallet,
  CreditCard,
  Banknote,
  Plus,
  ChevronRight,
  Tickets,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardInfo = ({ user }) => {
  return (
    <>
      {user && (
        <section className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 mt-4">
          <div className="shadow-custom p-6 rounded-lg bg-gradient-to-br from-primary/80 to-secondary text-white flex flex-col gap-6 justify-between">
            <div className="flex justify-between items-center w-full">
              <div className="text-xs lg:text-sm">
                Account Number:
                <span className="font-inter font-medium">
                  {" "}
                  {user?.accountNumber}
                </span>
              </div>
              <Link
                to="/dashboard/funding"
                className="outline-none bg-[#2a1b6e87] p-1 rounded-md hover:scale-[1.05] duration-300"
              >
                <Plus className="lg:w-5 lg:h-5 w-4 h-4" strokeWidth={2.4} />
              </Link>
            </div>
            <div className=" flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Wallet className="w-5" />
                <h2 className="font-poppins text">Balance</h2>
              </div>
              <h2 className="font-poppins tracking-wider">
                ${user?.accountBalance}
              </h2>
            </div>
            <div className="text-[10px] lg:text-xs flex items-center justify-between gap-4">
              <h2 className=" hover:scale-[1.03] duration-300">
                Account status:
                <span className="font-poppins font-medium">
                  {" "}
                  {user?.status}
                </span>
              </h2>
              <Link
                to="/dashboard/transaction-history"
                className="font-poppins tracking-wider hover:scale-[1.03] duration-300  flex items-center "
              >
                Transaction Histroy <ChevronRight className="w-3.5" />
              </Link>
            </div>
          </div>

          {/* Second grid */}
          <div className="grid gap-4 text-gray">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="px-6 py-5 sm:py-1 md:py-5 lg:py-2 flex flex-col justify-center shadow border border-borderColor bg-[#f8f8f8] rounded-lg hover:scale-[1.03] duration-300">
                <div className="flex items-center gap-2 ">
                  <div className="">
                    <Banknote className=" w-4 lg:w-5" />
                  </div>
                  <h3 className="text-sm font-inter font-medium ">Income</h3>
                </div>
                <h2 className="font-poppins text-sm tracking-wider font-medium mt-2 text-darker">
                  ${user?.income}
                </h2>
              </div>
              <div className="px-6 py-5 sm:py-1 md:py-5 lg:py-2 flex flex-col justify-center shadow border border-borderColor bg-[#f8f8f8] rounded-lg hover:scale-[1.03] duration-300">
                <div className="flex items-center gap-2 ">
                  <div className="">
                    <CreditCard className=" w-4 lg:w-5" />
                  </div>
                  <h3 className="text-sm font-inter font-medium ">Expenses</h3>
                </div>
                <h2 className="font-poppins text-sm tracking-wider font-medium mt-2 text-darker">
                  ${user?.expenses}
                </h2>
              </div>
            </div>
            <div className="px-6 py-5 sm:py-1 md:py-5 lg:py-2 flex flex-col justify-center shadow border border-borderColor bg-[#f8f8f8] rounded-lg hover:scale-[1.03] duration-300">
              <h2 className="text-xs font-poppins font-medium">
                Account Type:
                <span className="font-inter font-semibold"> Savings</span>
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mt-2 ">
                  <div className="">
                    <Tickets className=" w-3.5 lg:w-4" />
                  </div>
                  <h3 className="text-sm font-inter font-medium ">Loan</h3>
                </div>
                <h2 className="font-poppins text-sm tracking-wider font-medium text-darker">
                  ${user?.loan}
                </h2>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DashboardInfo;
