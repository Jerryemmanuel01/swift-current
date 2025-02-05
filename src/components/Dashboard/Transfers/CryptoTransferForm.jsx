import { PiSpinner } from "react-icons/pi";
import { IoIosSwap } from "react-icons/io";
import useCryptoTransferForm from "../../../hooks/dashboardHooks/transferHooks/useCryptoTransferForm";
import { Link } from "react-router-dom";

const CryptoTransferForm = () => {
  const { formik, isLoading, walletAddresses, swapBtn, swapValue } =
    useCryptoTransferForm();
  return (
    <form className="font-inter" onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="blockchainNetwork"
          className="font-medium tracking-wide text-xs"
        >
          Blockchain Network
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-0.5 flex items-center gap-2 rounded-md">
          <select
            name="blockchainNetwork"
            id="blockchainNetwork"
            className={`w-full px-3 h-10 text-xs font-medium outline-1 outline-primary/50 tracking-wide appearance-none`}
            aria-placeholder="Please select state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.blockchainNetwork}
          >
            <option value="" disabled>
              Select Blockchain Network
            </option>
            {walletAddresses.map((val, i) => (
              <option value={val.blockchainNetwork} key={i}>
                {val.blockchainNetwork}
              </option>
            ))}
          </select>
        </div>
        {formik.touched.blockchainNetwork && formik.errors.blockchainNetwork ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.blockchainNetwork}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <label
          htmlFor="walletAddress"
          className="font-medium tracking-wide text-xs"
        >
          Wallet Address
        </label>
        <div className="border-[#D0D5DD] border w-full mt-0.5 flex items-center gap- rounded-md">
          <input
            type="text"
            name="walletAddress"
            id="walletAddress"
            className={`w-full h-10 text-xs font-medium outline-none px-2 lg:px-4 appearance-none`}
            onBlur={formik.handleBlur}
            value={formik.values.walletAddress}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.walletAddress && formik.errors.walletAddress ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.walletAddress}
          </div>
        ) : null}
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
          <button
            onClick={swapBtn}
            type="button"
            className="flex items-center gap-2 px-4 h-10 outline-none bg-borderColor"
          >
            <IoIosSwap /> swap
          </button>
        </div>
        <p className="text-xs mt-1 text-primary font-medium">Amount in USDT: {swapValue}</p>
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

export default CryptoTransferForm;
