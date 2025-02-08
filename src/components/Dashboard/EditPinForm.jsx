import { IoIosInformation } from "react-icons/io";
import useEditPinForm from "../../hooks/dashboardHooks/useEditPinForm";
import { PiSpinner } from "react-icons/pi";

const EditPinForm = () => {
  const { formik, isLoading } = useEditPinForm();
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="sm:flex gap-4 items-center w-full">
        <div className="sm:w-1/2">
          <label htmlFor="pin" className="font-medium tracking-wide text-xs">
            Transfer Pin
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="pin"
              id="pin"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pin}
            />
          </div>
          {formik.touched.pin && formik.errors.pin ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.pin}
            </div>
          ) : null}
        </div>
        <div className="sm:w-1/2 mt-4 sm:mt-0">
          <label
            htmlFor="currentPassword"
            className="font-medium tracking-wide text-xs"
          >
            Current Password <span className="text-primary font-bold">*</span>
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currentPassword}
            />
          </div>
          {formik.touched.currentPassword && formik.errors.currentPassword ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.currentPassword}
            </div>
          ) : null}
        </div>
      </div>
      <div className="sm:flex gap-4 items-center w-full mt-4">
        <div className="sm:w-1/2">
          <label
            htmlFor="newPassword"
            className="font-medium tracking-wide text-xs"
          >
            New Password
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className={`w-full  h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
            />
          </div>
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.newPassword}
            </div>
          ) : null}
        </div>
        <div className="sm:w-1/2 mt-4 sm:mt-0">
          <label
            htmlFor="confirmPassword"
            className="font-medium tracking-wide text-xs"
          >
            Confirm Password
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={`w-full h-10  text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            !formik.dirty || !formik.isValid || isLoading
              ? "bg-[#D0D5DD]"
              : "bg-primary"
          } w-full  text-white rounded-lg h-10 px-6 mt-8 text-xs lg:text-[12.5px] lg:font-semibold outline-none`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <PiSpinner className="text-base animate-spin" />
              Please wait...
            </span>
          ) : (
            "Update password"
          )}
        </button>
      </div>

      <div className="flex gap-2 items-center mt-3">
        <div className="">
          <IoIosInformation className="text-xs bg-dark text-white rounded-full" />
        </div>
        <p className="text-xs tracking-wide text-dark leading-5">
          Input your current password to set or update Trasfer pin, and to set a new password.
        </p>
      </div>
    </form>
  );
};

export default EditPinForm;
