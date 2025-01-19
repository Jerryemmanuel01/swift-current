import { useSelector } from "react-redux";
import DashboardFetchError from "../../../components/Dashboard/DashboardFetchError";
import DashboardInfo from "../../../components/Dashboard/DashboardInfo";
import DashboardTransactions from "../../../components/Dashboard/DashboardTransactions";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        Dashboard
      </h2>
      <DashboardInfo user={user} />
      <DashboardTransactions user={user} />
    </section>
  );
};

export default Dashboard;
