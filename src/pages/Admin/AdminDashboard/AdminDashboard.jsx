import { Link } from "react-router-dom";
import DashboardCard from "../../../components/admin/DashboardCard";
import HeaderName from "../../../components/Dashboard/HeaderName";
import { FaUserAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";

import { ChevronRight } from "lucide-react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import useAdminDashboard from "../../../hooks/adminHooks/useAdminDashboard";

const AdminDashboard = () => {
  const { pendingTransaction, users, pendingKyc, allTransaction, isLoading } =
    useAdminDashboard();

  const dashboardCardInfos = [
    {
      bg: "bg-gradient-to-br from-primary/80 to-secondary",
      title: "Total Users",
      icon: FaUserAlt,
      disc: "Users",
      value: users?.length?.toLocaleString(),
      tooltip: "Total User",
      to: "/admin/get-users",
    },
    {
      bg: "bg-gradient-to-br from-[#dd4343]/70 to-[#dd4343]",
      title: "Total Transactions",
      icon: GrTransaction,
      disc: "Transactions",
      value: allTransaction?.length?.toLocaleString(),
      tooltip: "Total Transactions",
      to: "",
    },
    {
      bg: "bg-gradient-to-br from-[#2e90eb]/70 to-[#2e90eb]",
      title: "Pending KYC",
      icon: VscWorkspaceTrusted,
      disc: "KYC",
      value: pendingKyc?.length?.toLocaleString(),
      tooltip: "Pending KYC",
      to: "/admin/approve-kyc",
    },
    {
      bg: "bg-gradient-to-br from-[#6762da]/70 to-[#6762da]",
      title: "Pending Transactions",
      icon: MdPendingActions,
      disc: "Pending",
      value: pendingTransaction?.length?.toLocaleString(),
      tooltip: "Total User",
      to: "/admin/approve-transaction",
    },
  ];
  return (
    <section className="w-full px-6 bg-[#f1f5f6]  -mt-6 py-6">
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {dashboardCardInfos.map((cardInfo, i) => (
          <DashboardCard
            key={i}
            bg={cardInfo.bg}
            title={cardInfo.title}
            Icon={cardInfo.icon}
            disc={cardInfo.disc}
            value={cardInfo.value}
            tooltip={cardInfo.tooltip}
            to={cardInfo.to}
            isLoading={isLoading}
          />
        ))}
      </div>
      <div className="mt-6 p-6  bg-white rounded-lg">
        <HeaderName title="Activities" />
        <div className="grid md:grid-cols-2 xl:grid-cols- gap-4 gap-y-10 mt-5">
          <Link
            to="/admin/get-users"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            View All Users <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/admin/approve-transaction"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Approve Transactions <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/admin/approve-kyc"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Approve KYC <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/admin/credit-user"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Credit User <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/admin/debit-user"
            className="bg-[#f1f5f6] rounded-lg h-16 md:h-14 flex items-center justify-between px-4 font-inter text-base md:text-sm text-gray hover:text-primary hover:scale-[1.02] duration-200"
          >
            Debit User <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/admin/admin-management"
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
