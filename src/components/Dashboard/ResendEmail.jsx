import { ImSpinner } from "react-icons/im";
import useResendEmail from "../../hooks/dashboardHooks/useResendEmail";
import Loader from "../General/Loader";

const ResendEmail = ({ user }) => {
  const { resendEmailbtn, isResendEmailLoading } = useResendEmail();
  return (
    <>
      {isResendEmailLoading ? (
        <p className="mt-4 flex items-center gap-2 text-sm">
          Resending Email... <ImSpinner className="animate-spin" />
        </p>
      ) : (
        <div className="mt-4 bg-red-400/25 py-3 px-3 text-xs font-intger rounded-md ">
          <p className="text-red-500">
            Hi {user?.firstName}, Please check your email or your spam folder
            and click the verification link to complete your account setup. Your
            security matters to us, Thanks.
          </p>
          <button
            onClick={resendEmailbtn}
            className="underline text-blue-800 hover:text-blue-900 mt-0.5"
          >
            Resend Email
          </button>
        </div>
      )}
    </>
  );
};

export default ResendEmail;
