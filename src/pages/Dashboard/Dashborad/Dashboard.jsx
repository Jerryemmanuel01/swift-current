import { useSelector } from "react-redux";
import DashboardInfo from "../../../components/Dashboard/DashboardInfo";
import DashboardTransactions from "../../../components/Dashboard/DashboardTransactions";
import HeaderName from "../../../components/Dashboard/HeaderName";
import ResendEmail from "../../../components/Dashboard/ResendEmail";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <HeaderName title={"Dashboard"} />
      {!user?.emailVerification && <ResendEmail user={user} />}
      <DashboardInfo user={user} />
      <DashboardTransactions user={user} />
    </section>
  );
};

export default Dashboard;
