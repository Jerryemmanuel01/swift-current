import { PiSpinner } from "react-icons/pi";
import useLoanForm from "../../hooks/dashboardHooks/useLoanForm";

const LoanForm = () => {
  const { formik, isLoading } = useLoanForm();
  return (
    <div>
      <div className="bg-lighter/30 py-3 px-4 rounded-md text-xs text-dark">
        For you loan to be activated your account tier must be upgraded to tier
        3
      </div>
      <form className="mt-6" onSubmit={formik.handleSubmit}>
        <div className="md:flex gap-4 mt-4 items-center w-full">
          <div className="md:w-1/2">
            <label
              htmlFor="monthlyIncome"
              className="font-medium tracking-wide text-xs"
            >
              Monthly Income ($)
            </label>
            <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
              <input
                type="number"
                name="monthlyIncome"
                id="monthlyIncome"
                className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.monthlyIncome}
              />
            </div>
            {formik.touched.monthlyIncome && formik.errors.monthlyIncome ? (
              <div className="text-red-500 text-[10px] font-semibold">
                {formik.errors.monthlyIncome}
              </div>
            ) : null}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <label
              htmlFor="sourceOfIncome"
              className="font-medium tracking-wide text-xs"
            >
              Source Of Income (Occupation)
            </label>
            <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
              <input
                type="text"
                name="sourceOfIncome"
                id="sourceOfIncome"
                className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sourceOfIncome}
              />
            </div>
            {formik.touched.sourceOfIncome && formik.errors.sourceOfIncome ? (
              <div className="text-red-500 text-[10px] font-semibold">
                {formik.errors.sourceOfIncome}
              </div>
            ) : null}
          </div>
        </div>
        <div className="md:flex gap-4 mt-4 items-center w-full">
          <div className="md:w-1/2">
            <label
              htmlFor="amount"
              className="font-medium tracking-wide text-xs"
            >
              Loan Amount
            </label>
            <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
              <input
                type="number"
                name="amount"
                id="amount"
                className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              />
            </div>
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-red-500 text-[10px] font-semibold">
                {formik.errors.amount}
              </div>
            ) : null}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <label
              htmlFor="description"
              className="font-medium tracking-wide text-xs"
            >
              Loan Description
            </label>
            <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
              <input
                type="text"
                name="description"
                id="description"
                className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
            </div>
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-[10px] font-semibold">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            name="submit"
            type="submit"
            disabled={isLoading}
            className={`${
              !formik.dirty || !formik.isValid || isLoading
                ? "bg-[#D0D5DD]"
                : "bg-primary"
            } w-full  text-white rounded-lg h-10 px-6 mt-8 text-xs lg:text-sm lg:font-semibold outline-none`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <PiSpinner className="text-base animate-spin" />
                Please wait...
              </span>
            ) : (
              "Request"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
