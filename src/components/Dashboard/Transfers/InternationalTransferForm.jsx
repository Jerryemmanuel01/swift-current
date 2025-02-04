import { PiSpinner } from "react-icons/pi";
import useInternationalTransferForm from "../../../hooks/dashboardHooks/transferHooks/useInternationalTransferForm";

const InternationalTransferForm = () => {
  const { formik, isLoading, countryLists, chargePriorityOptions } =
    useInternationalTransferForm();
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
            placeholder="Bank Name"
            className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
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
            htmlFor="recipientAccountNumber"
            className="font-medium tracking-wide text-xs"
          >
            Recipient's Account Number
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="recipientAccountNumber"
              id="recipientAccountNumber"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.recipientAccountNumber}
            />
          </div>
          {formik.touched.recipientAccountNumber &&
          formik.errors.recipientAccountNumber ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.recipientAccountNumber}
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
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
        <label
          htmlFor="country"
          className="text-xs font-medium tracking-wide"
        >
          Country
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="country"
            id="country"
            className={`w-full text-xs px-3 h-10 font-medium outline-none tracking-wide appearance-none`}
            aria-placeholder="Please select state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          >
            <option value="" disabled>
              Select Country
            </option>
            {countryLists.map((val, i) => (
              <option value={val.toLocaleLowerCase()} key={i}>
                {val}
              </option>
            ))}
          </select>
        </div>
        {formik.touched.country && formik.errors.country ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.country}
          </div>
        ) : null}
      </div>
      <div className="flex gap-4 mt-4 items-center w-full">
        <div className="w-1/2">
          <label
            htmlFor="swiftCode"
            className="font-medium tracking-wide text-xs"
          >
            Swift Code
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="swiftCode"
              id="swiftCode"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.swiftCode}
            />
          </div>
          {formik.touched.swiftCode && formik.errors.swiftCode ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.swiftCode}
            </div>
          ) : null}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="ibanCode"
            className="font-medium tracking-wide text-xs"
          >
            IBAN Code
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="ibanCode"
              id="ibanCode"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ibanCode}
            />
          </div>
          {formik.touched.ibanCode && formik.errors.ibanCode ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.ibanCode}
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
        <label
          htmlFor="chargePriority"
          className="font-medium tracking-wide text-xs"
        >
          Charge Priority Fee
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="chargePriority"
            id="chargePriority"
            className={`w-full text-xs px-3 h-10 font-medium outline-none tracking-wide appearance-none`}
            aria-placeholder="Please select state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.chargePriority}
          >
            <option value="" disabled>
              Select Payment
            </option>
            {chargePriorityOptions.map((val, i) => (
              <option value={val.value} key={i}>
                {val.charge}
              </option>
            ))}
          </select>
        </div>
        {formik.touched.chargePriority && formik.errors.chargePriority ? (
          <div className="text-red-500 text-[10px] font-semibold">
            {formik.errors.chargePriority}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <label
          htmlFor="transactionPin"
          className="font-medium tracking-wide text-xs"
        >
          Transaction Pin
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="number"
            name="transactionPin"
            id="transactionPin"
            className={`w-full h-10 text-xs font-medium fund-transactionPin outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transactionPin}
          />
        </div>
        {formik.touched.transactionPin && formik.errors.transactionPin ? (
          <div className="text-red-500 text-[10px] font-semibold">
            {formik.errors.transactionPin}
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

export default InternationalTransferForm;
