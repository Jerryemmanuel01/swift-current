import DashboardCard from "../../../components/admin/DashboardCard";
import { dashboardCardInfos } from "../../../lib/utils";

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
    </section>
  );
};

export default AdminDashboard;
