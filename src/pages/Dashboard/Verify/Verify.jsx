import useVerifyEmail from "../../../hooks/dashboardHooks/useVerifyEmail";
import DashboardFetchError from "../../../components/Dashboard/DashboardFetchError";
import Loader from "../../../components/General/Loader";
import Header from "../../../layouts/AuthLayout/Header";
import useLogout from "../../../hooks/dashboardHooks/useLogout";

const Verify = () => {
  const { isError, isVerifyEmailLoading, setRetry } = useVerifyEmail();
  if (isVerifyEmailLoading) return <Loader title="Verifying Email" />;
  const { logoutBtn } = useLogout();
  if (isError)
    return (
      <DashboardFetchError setRetry={setRetry} title="Verification failed" logoutBtn={logoutBtn}/>
    );

  return (
    <section className="">
      <Header />
    </section>
  );
};

export default Verify;
