import React from "react";
import useForgetPasswordForm from "../../hooks/formHooks/useForgetPasswordForm";
import { LockKeyhole, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const ForgetPasswordForm = () => {
  const { formik, isLoading, message } = useForgetPasswordForm();
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
          {isLoading ? "Please wait..." : "Reset"}
        </button>
      </div>
       
      <div className="text-xs lg:text-sm flex items-center mt-4 gap-1 w-full justify-center">
        <span className="">Already have an account?</span>
        <Link to="/auth/login" className="text-lighter">
          Login
        </Link>
      </div>
      <div className="flex gap-2 items-center justify-center mt-2">
        <LockKeyhole color="#98A2B3" className="w-[14px]" />
        <div className="text-xs lg:text-sm flex items-center gap-1 justify-center">
          <Link to="/auth/sign-up" className="text-lighter">
            Create new account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
