import { PiSpinner } from "react-icons/pi";
import { ImSpinner } from "react-icons/im";
import useFundsManagementForm from "../../hooks/adminHooks/useFundsManagementForm";

const FundsManagementForm = () => {
  const { action, setAction, formik, isGetAccountNameLoading, isFundsLoading } =
    useFundsManagementForm();

  return (
    <div>
      <div
        className={`flex items-center justify-between my-4 text-sm font-inter font-medium rounded-md border ${
          action === "Credit" ? "border-primary" : "border-red-600"
        }`}
      >
        <div
          className={`w-full cursor-pointer text-center rounded-s-md duration-300 py-4 flex items-center justify-center gap-2 ${
            action === "Credit" ? "bg-primary text-white" : ""
          } `}
          onClick={() => setAction("Credit")}
        >
          Credit Account
        </div>
        <div
          className={`w-full cursor-pointer text-center py-4 rounded-e-md duration-300 ${
            action === "Debit" ? "bg-red-600 text-white" : ""
          } `}
          onClick={() => setAction("Debit")}
        >
          Debit Account
        </div>
      </div>

      <form className="font-inter mt-4" onSubmit={formik.handleSubmit}>
        <h2
          className={`font-merriweather font-bold md:text-lg mt-6 ${
            action === "Credit" ? "text-primary" : "text-red-600"
          }`}
        >
          {action === "Credit" ? "Credit" : "Debit"} User
        </h2>
        <div className="md:flex gap-4 mt-2 items-center w-full">
          <div className="md:w-1/2">
            <label
              htmlFor="accountNumber"
              className="font-medium tracking-wide text-xs"
            >
              Recipient's Account Number
            </label>
            <div className="border-[#D0D5DD] border bg-[#f8f8f8] w-full flex items-center mt-0.5 rounded-md px-3 lg:px-4">
              <input
                type="number"
                name="accountNumber"
                id="accountNumber"
                className={`w-full h-10 text-xs font-medium fund-amount outline-none tracking-wide appearance-none bg-inherit`}
                onChange={(e) =>
                  formik.setFieldValue("accountNumber", e.target.value)
                }
                onBlur={formik.handleBlur}
                value={formik.values.accountNumber}
              />
              {isGetAccountNameLoading ? (
                <ImSpinner className="animate-spin" />
              ) : (
                ""
              )}
            </div>
            {formik.touched.accountNumber && formik.errors.accountNumber ? (
              <div className="text-red-500 text-[10px] font-semibold">
                {formik.errors.accountNumber}
              </div>
            ) : null}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <label
              htmlFor="recipientName"
              className="font-medium tracking-wide text-xs"
            >
              Recipient's Name
            </label>
            <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
              <input
                type="text"
                name="recipientName"
                id="recipientName"
                readOnly
                className={`w-full h-10 bg-textGray/5 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={formik.values.recipientName}
              />
            </div>
            {formik.touched.recipientName && formik.errors.recipientName ? (
              <div className="text-red-500 text-[10px] font-semibold">
                {formik.errors.recipientName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="amount" className="font-medium tracking-wide text-xs">
            Amount
          </label>
          <div className="border-[#D0D5DD] bg-[#f8f8f8] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="amount"
              id="amount"
              className={`w-full h-10 text-xs font-medium fund-amount bg-inherit rounded-md outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
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
        <div className="mt-4">
          <label
            htmlFor="description"
            className="font-medium tracking-wide text-xs"
          >
            Description
          </label>
          <div className="border-[#D0D5DD] bg-[#f8f8f8] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="description"
              id="description"
              className={`w-full h-10 text-xs font-medium bg-inherit rounded-md fund-description outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
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
        <div className="mt-4">
          <label htmlFor="pin" className="font-medium tracking-wide text-xs">
            Transfer Pin
          </label>
          <div className="border-[#D0D5DD] bg-[#f8f8f8] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="pin"
              id="pin"
              className={`w-full h-10 text-xs rounded-md bg-inherit font-medium fund-pin outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
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
        <div className="flex items-center justify-center">
          <button
            name="submit"
            type="submit"
            disabled={isFundsLoading}
            className={`${
              !formik.dirty || !formik.isValid || isFundsLoading
                ? "bg-[#D0D5DD]"
                : action === "Credit"
                ? "bg-primary"
                : "bg-red-600"
            } w-full  text-white rounded-lg h-10 px-6 mt-8 text-xs lg:text-sm lg:font-semibold outline-none`}
          >
            {isFundsLoading ? (
              <span className="flex items-center justify-center gap-2">
                <PiSpinner className="text-base animate-spin" />
                Please wait...
              </span>
            ) : action === "Credit" ? (
              "Credit"
            ) : (
              "Debit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FundsManagementForm;
