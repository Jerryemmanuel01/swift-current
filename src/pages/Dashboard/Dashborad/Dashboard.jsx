import { useSelector } from "react-redux";
import DashboardInfo from "../../../components/Dashboard/DashboardInfo";
import DashboardTransactions from "../../../components/Dashboard/DashboardTransactions";
import HeaderName from "../../../components/Dashboard/HeaderName";
import ResendEmail from "../../../components/Dashboard/ResendEmail";
import Loader from "../../../components/General/Loader";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { isLoading } = useSelector((state) => state.user);
  if(isLoading) return <Loader />


  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <HeaderName title={"Dashboard"} />
      {!user.userInfo?.emailVerification && <ResendEmail user={user.userInfo} />}
      <DashboardInfo user={user.userInfo} />
      <DashboardTransactions user={user.userInfo} />
    </section>
  );
};

export default Dashboard;
