import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import useLoginForm from "../../hooks/formHooks/useLoginForm";
import { Link } from "react-router-dom";

const Loginform = () => {
  const { formik, isLoading, message, setTogglePassword, togglePassword } =
    useLoginForm();
  return (
    <form className="py-6 md:py-7 lg:py-8 p-6" onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="accountId"
          className="text-sm font-medium tracking-wide lg:text-base"
        >
          Account ID
        </label>
        <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
          <UserRound color="#98A2B3" className="w-[18px]" />
          <input
            type="text"
            name="accountId"
            id="accountId"
            placeholder="Enter your account Id"
            className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accountId}
          />
        </div>
        {formik.touched.accountId && formik.errors.accountId ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.accountId}
          </div>
        ) : null}
      </div>

      <div className="mt-6">
        <label
          htmlFor="password"
          className="text-sm font-medium tracking-wide lg:text-base"
        >
          Password
        </label>
        <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
          <LockKeyhole color="#98A2B3" className="w-[18px]" />
          <input
            type={togglePassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Choose a password"
            className={`w-full text-sm h-10 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            className="outline-none"
            onClick={() => setTogglePassword(!togglePassword)}
            type="button"
          >
            {togglePassword ? (
              <Eye color="#98A2B3" className="w-[18px]" />
            ) : (
              <EyeOff color="#98A2B3" className="w-[18px]" />
            )}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="mt-2 w-full text-right text-primary">
        <Link
          to="/auth/forget-password"
          className="text-xs lg:text-sm tracking-wide"
        >
          Forget Password?
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            !formik.dirty || !formik.isValid || isLoading
              ? "bg-[#D0D5DD]"
              : "bg-primary"
          } w-full lg:w-[385px]  text-white rounded-lg h-10 lg:h-14 px-6 mt-8 lg:mt- text-xs lg:text-base lg:font-semibold outline-none`}
        >
          {isLoading ? "Please wait..." : "Login"}
        </button>
      </div>
      {message && (
        <p className="text-sm text-[#B3261E] tracking-wide text-center mt-6">
          {message}
        </p>
      )}
    </form>
  );
};

export default Loginform;
