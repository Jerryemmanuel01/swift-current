import useResendEmail from "../../hooks/dashboardHooks/useResendEmail";
import Loader from "../General/Loader";

const ResendEmail = ({ user }) => {
  const { resendEmailbtn, isLoading } = useResendEmail();
  if(isLoading) return <Loader title="Resending Verification email" />
  return (
    <div className="mt-4 bg-red-400/25 py-3 px-3 text-xs font-intger rounded-md ">
      <p className="text-red-500">
        Hi {user?.firstName}, Please check your email and click the verification
        link to complete your account setup. Your security matters to us,
        Thanks.
      </p>
      <button
        onClick={resendEmailbtn}
        className="underline text-blue-800 hover:text-blue-900 mt-0.5"
      >
        Resend Email
      </button>
    </div>
  );
};

export default ResendEmail;
