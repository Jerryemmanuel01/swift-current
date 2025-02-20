import useVerifyEmail from '../../../hooks/dashboardHooks/useVerifyEmail'
import DashboardFetchError from '../../../components/Dashboard/DashboardFetchError';
import Loader from '../../../components/General/Loader';

const Verify = () => {
  const { isError, isVerifyEmailLoading, setRetry } = useVerifyEmail();
  if (isVerifyEmailLoading) return <Loader title="Verifying Email" />;
  if (isError) return <DashboardFetchError setRetry={setRetry} title="Verification failed" />;

  return (
    <section className=''>Verify</section>
  )
}

export default Verify