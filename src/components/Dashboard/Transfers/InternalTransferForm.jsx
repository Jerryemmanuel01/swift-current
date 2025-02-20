import { PiSpinner } from "react-icons/pi";
import useInternalTransfer from "../../../hooks/dashboardHooks/transferHooks/useInternalTransfer";
import { ImSpinner } from "react-icons/im";

const InternalTransferForm = () => {
  const { formik, isLoading, isGetAccountNameLoading } = useInternalTransfer();
  return (
    <form className="font-inter" onSubmit={formik.handleSubmit}>
      <div className="">
        <label htmlFor="bankName" className="font-medium tracking-wide text-xs">
          Bank Name
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="text"
            name="bankName"
            id="bankName"
            disabled
            placeholder="Bank Name"
            className={`w-full h-10 bg-textGray/5 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bankName}
          />
        </div>
        {formik.touched.bankName && formik.errors.bankName ? (
          <div className="text-red-500 text-[10px] font-semibold">
            {formik.errors.bankName}
          </div>
        ) : null}
      </div>
      <div className="md:flex gap-4 mt-4 items-center w-full">
        <div className="md:w-1/2">
          <label
            htmlFor="accountNumber"
            className="font-medium tracking-wide text-xs"
          >
            Recipient's Account Number
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md px-3 lg:px-4">
            <input
              type="number"
              name="accountNumber"
              id="accountNumber"
              className={`w-full h-10 text-xs font-medium fund-amount outline-none tracking-wide appearance-none`}
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
      <div className="mt-4">
        <label
          htmlFor="description"
          className="font-medium tracking-wide text-xs"
        >
          Description
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="text"
            name="description"
            id="description"
            className={`w-full h-10 text-xs font-medium fund-description outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
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
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="text"
            name="pin"
            id="pin"
            className={`w-full h-10 text-xs font-medium fund-pin outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
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
            "Send"
          )}
        </button>
      </div>
    </form>
  );
};

export default InternalTransferForm;
