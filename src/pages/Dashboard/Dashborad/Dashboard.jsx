import { useSelector } from "react-redux";
import DashboardInfo from "../../../components/Dashboard/DashboardInfo";
import DashboardTransactions from "../../../components/Dashboard/DashboardTransactions";
import HeaderName from "../../../components/Dashboard/HeaderName";
import ResendEmail from "../../../components/Dashboard/ResendEmail";
import useDashboard from "../../../hooks/dashboardHooks/useDashboard";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { isGetTransactionsLoading, transactions } = useSelector((state) => state.user);
  const {} = useDashboard();

  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <HeaderName title={"Dashboard"} />
      {!user?.userInfo?.emailVerification && <ResendEmail user={user?.userInfo} />}
      <DashboardInfo user={user?.userInfo} />
      <DashboardTransactions transactions={transactions} user={user?.userInfo} isLoading={isGetTransactionsLoading}/>
    </section>
  );
};

export default Dashboard;
