import React from "react";
import useResetPasswordForm from "../../hooks/formHooks/useResetPasswordForm";

const ResetPasswordForm = () => {
  const { formik, isLoading, message } = useResetPasswordForm();
  return (
    <form className="py-6 md:py-7 lg:py-8 p-6" onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="password"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Password
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="confirmPassword"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Confirm Password
        </label>
        <div className="border-[#D0D5DD] border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm text-[#495057] font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.confirmPassword}
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
          } w-full  text-white rounded-lg h-10 px-6 mt-8 text-xs lg:text-sm lg:font-semibold outline-none`}
        >
          {isLoading ? "Please wait..." : "Update Password"}
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

export default ResetPasswordForm;
