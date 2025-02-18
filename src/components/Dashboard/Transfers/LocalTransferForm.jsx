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
            htmlFor="accountNumber"
            className="font-medium tracking-wide text-xs"
          >
            Recipient's Account Number
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="accountNumber"
              id="accountNumber"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accountNumber}
            />
          </div>
          {formik.touched.accountNumber &&
          formik.errors.accountNumber ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.accountNumber}
            </div>
          ) : null}
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <label
            htmlFor="name"
            className="font-medium tracking-wide text-xs"
          >
            Recipient's Name
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="name"
              id="name"
              className={`w-full h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.name}
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
              type="text"
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
              type="text"
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
          htmlFor="chargePriorityFee"
          className="font-medium tracking-wide text-xs"
        >
          Charge Priority Fee
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="chargePriorityFee"
            id="chargePriorityFee"
            className={`w-full text-xs px-3 h-10 font-medium outline-none tracking-wide appearance-none`}
            aria-placeholder="Please select state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.chargePriorityFee}
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
        {formik.touched.chargePriorityFee && formik.errors.chargePriorityFee ? (
          <div className="text-red-500 text-[10px] font-semibold">
            {formik.errors.chargePriorityFee}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <label htmlFor="otp" className="font-medium tracking-wide text-xs">
          Token ID{" "}
          <Link to="/dashboard/token" className="text-red-600">
            (Click to activate your token)
          </Link>
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="number"
            name="otp"
            id="otp"
            className={`w-full h-10 text-xs font-medium fund-otp outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.otp}
          />
        </div>
        {formik.touched.otp && formik.errors.otp ? (
          <div className="text-red-500 text-[10px] font-semibold">
            {formik.errors.otp}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <label
          htmlFor="pin"
          className="font-medium tracking-wide text-xs"
        >
          Transfer Pin
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <input
            type="number"
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

export default LocalTransferForm;
