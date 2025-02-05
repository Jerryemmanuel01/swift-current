import { Link } from "react-router-dom";
import useLocalTransferForm from "../../../hooks/dashboardHooks/transferHooks/useLocalTransferForm";

const LocalTransferForm = () => {
  const { chargePriorityOptions, formik, isLoading } =
    useLocalTransferForm();
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
      <div className="flex gap-4 mt-4 items-center w-full">
        <div className="w-1/2">
          <label
            htmlFor="sortCode"
            className="font-medium tracking-wide text-xs"
          >
            Sort Code
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="sortCode"
              id="sortCode"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sortCode}
            />
          </div>
          {formik.touched.sortCode && formik.errors.sortCode ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.sortCode}
            </div>
          ) : null}
        </div>
        <div className="w-1/2">
          <label
            htmlFor="branchNumber"
            className="font-medium tracking-wide text-xs"
          >
            Branch Number
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="branchNumber"
              id="branchNumber"
              placeholder="(Optional)"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.branchNumber}
            />
          </div>
          {formik.touched.branchNumber && formik.errors.branchNumber ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.branchNumber}
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
        <label htmlFor="tokenId" className="font-medium tracking-wide text-xs">
          Token ID{" "}
          <Link to="/dashboard/token" className="text-red-600">
            (Click to activate your token)
          </Link>
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="number"
            name="tokenId"
            id="tokenId"
            className={`w-full h-10 text-xs font-medium fund-tokenId outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tokenId}
          />
        </div>
        {formik.touched.tokenId && formik.errors.tokenId ? (
          <div className="text-red-500 text-[10px] font-semibold">
            {formik.errors.tokenId}
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

export default LocalTransferForm;
