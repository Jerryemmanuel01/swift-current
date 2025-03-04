import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/features/auth/authSlice";

const DashboardFetchError = ({
  setRetry,
  title = "Error fetching your details",
}) => {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-screen text-center flex items-center justify-center flex-col gap-3 ">
      <p className="text-xl font-semibold font-merriweather">
        {title}
      </p>
      <button
        name="toggle"
        onClick={() => setRetry((prevState) => !prevState)}
        className="bg-primary py-2 px-4 rounded-md text-sm text-white"
      >
        Retry
      </button>
      <button name="button" className="mt-2 font-merriweather border-b font-semibold text-secondary" onClick={()=>{ dispatch(logout())}}>
        Back Home
      </button>
    </div>
  );
};

export default DashboardFetchError;
