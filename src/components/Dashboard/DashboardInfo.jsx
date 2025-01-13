import { Wallet, CreditCard, Banknote, Plus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
      <div className="shadow-custom p-6 rounded-lg bg-gradient-to-br from-primary/80 to-secondary text-white flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <div className="text-xs lg:text-sm">
            Account Number:
            <span className="font-inter font-medium"> 1231231234</span>
          </div>
          <Link
            to="/dashboard/funding"
            className="outline-none bg-[#0e0e56] p-1 rounded-md hover:scale-[1.05] duration-300"
          >
            <Plus className="lg:w-5 lg:h-5 w-4 h-4" strokeWidth={2.4} />
          </Link>
        </div>
        <div className=" flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Wallet className="w-5" />
            <h2 className="font-poppins text">Balance</h2>
          </div>
          <h2 className="font-poppins tracking-wider">$200,000</h2>
        </div>
        <div className=" flex items-center justify-between gap-4">
          <h2 className="text-[10px] hover:scale-[1.03] duration-300">
            Account status:
            <span className="font-poppins font-medium"> Active</span>
          </h2>
          <Link
            to="/dashboard/transactions"
            className="font-poppins tracking-wider hover:scale-[1.03] duration-300 text-[10px] flex items-center "
          >
            Transaction Histroy <ChevronRight className="w-3.5" />
          </Link>
        </div>
      </div>

      {/* Second grid */}
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="p-6 shadow-custom">Income</div>
          <div className="p-6 shadow-custom">Expenses</div>
        </div>
        <div className="shadow-custom p-6">Account Type</div>
      </div>
    </div>
  );
};

export default DashboardInfo;
