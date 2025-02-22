import { Eye, EyeOff, LockKeyhole, UserRound } from "lucide-react";
import useLoginForm from "../../hooks/formHooks/useLoginForm";
import { Link } from "react-router-dom";
import { PiSpinner } from "react-icons/pi";

const Loginform = () => {
  const { formik, isLoading, message, setTogglePassword, togglePassword } =
    useLoginForm();
  return (
    <form className="py-6 md:py-7 lg:py-8 p-6" onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="email"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Email
        </label>
        <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
          <UserRound color="#98A2B3" className="w-[18px]" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your account email"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="mt-6">
        <label
          htmlFor="password"
          className="text-xs font-medium tracking-wide lg:text-sm"
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
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
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
              <Eye color="#98A2B3" className="w-[16px]" />
            ) : (
              <EyeOff color="#98A2B3" className="w-[16px]" />
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
          } w-full text-white rounded-lg h-10 lg:h-14 px-6 mt-8 lg:mt- text-xs lg:text-base lg:font-semibold outline-none`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <PiSpinner className="text-base animate-spin" />
              Please wait...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </div>
      {/* {message && (
        <p className="text-sm text-[#B3261E] tracking-wide text-center mt-6">
          {message}
        </p>
      )} */}

      <div className="text-xs lg:text-sm flex items-center mt-3 gap-1 w-full justify-center">
        <span className="">Don't have an account?</span>
        <Link to="/auth/sign-up" className="text-lighter">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Loginform;
