import { Link } from "react-router-dom";
import DashboardCard from "../../../components/admin/DashboardCard";
import HeaderName from "../../../components/Dashboard/HeaderName";
import { dashboardCardInfos } from "../../../lib/utils";
import { ChevronRight } from "lucide-react";

const AdminDashboard = () => {
  return (
    <section className="w-full px-6 bg-[#f1f5f6]  -mt-6 py-6">
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {dashboardCardInfos.map((cardInfo, i) => (
          <DashboardCard
            bg={cardInfo.bg}
            title={cardInfo.title}
            Icon={cardInfo.icon}
            disc={cardInfo.disc}
            value={cardInfo.value}
            tooltip={cardInfo.tooltip}
          />
        ))}
      </div>
      <div className="mt-6 p-6  bg-white rounded-lg">
        <HeaderName title="Activities" />
        <div className="grid md:grid-cols-2 xl:grid-cols- gap-4 gap-y-10 mt-5">
          <Link
            to="/dashboard/admin/get-users"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            View All Users <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard/admin/approve-transaction"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Approve Transactions <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard/admin/approve-kyc"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Approve KYC <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard/admin/credit-user"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Credit User <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard/admin/debit-user"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Debit User <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard/admin/admin-management"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Admin Management <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
