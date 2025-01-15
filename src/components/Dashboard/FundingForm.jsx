import { Check, Copy, DollarSign, Hash } from "lucide-react";
import useFundingForm from "../../hooks/formHooks/useFundingForm";

const FundingForm = () => {
  const {
    formik,
    copied,
    handleCopy,
    findAddressByNetwork,
    findQRCodeByNetwork,
    walletAddresses,
    qrCode,
    setQrCode,
  } = useFundingForm();

  console.log(qrCode);

  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <div className="">
        <label htmlFor="amount" className="font-medium tracking-wide text-sm">
          Amount
        </label>
        <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
          <div className="bg-borderColor w-10 h-10 flex items-center justify-center">
            <DollarSign className="w-4 text-primary " />
          </div>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount"
            className={`w-full h-10 text-sm font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-2 lg:px-4 appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          />
        </div>
        {formik.touched.amount && formik.errors.amount ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.amount}
          </div>
        ) : null}
      </div>
      <div className="md:flex gap-4 mt-4 items-center w-full">
        <div className="md:w-1/2">
          <label
            htmlFor="network"
            className="font-medium tracking-wide text-sm"
          >
            Blockchain Network
          </label>
          <div className="border-[#D0D5DD] text-gray border w-full mt-0.5 flex items-center gap-2 rounded-md">
            <select
              name="network"
              id="network"
              className={`w-full px-3 h-10 text-sm font-medium outline-1 outline-primary/50 tracking-wide appearance-none`}
              aria-placeholder="Please select state"
              onChange={(e) => {
                formik.handleChange(e);
                const selectedNetwork = e.target.value;
                const address = findAddressByNetwork(selectedNetwork);
                findQRCodeByNetwork(selectedNetwork);
                formik.setFieldValue("address", address);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.network}
            >
              <option value="" disabled>
                Select Blockchain Network
              </option>
              {walletAddresses.map((val, i) => (
                <option value={val.network} key={i}>
                  {val.network}
                </option>
              ))}
            </select>
          </div>
          {formik.touched.network && formik.errors.network ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.network}
            </div>
          ) : null}
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <label
            htmlFor="address"
            className="font-medium tracking-wide text-sm"
          >
            Wallet Address
          </label>
          <div className="border-[#D0D5DD] border w-full mt-0.5 flex items-center gap- rounded-md">
            <input
              type="text"
              name="address"
              id="address"
              disabled
              className={`w-full h-10 text-sm font-medium outline-none px-2 lg:px-4 appearance-none`}
              value={formik.values.address}
            />
            <button
              onClick={handleCopy}
              type="button"
              className="w-10 h-10 flex items-center justify-center"
            >
              {copied ? (
                <Check className="w-4 text-primary " />
              ) : (
                <Copy className="w-4 text-primary " />
              )}
            </button>
          </div>
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.address}
            </div>
          ) : null}
        </div>
      </div>
      {qrCode && (
        <div className="mt-6 flex items-center justify-center">
          <div className="w-32 h-32 border border-borderColor rounded-md">
            <img src={qrCode} alt="" className="w-full" />
          </div>
        </div>
      )}
      <div className="w-full mt-6">
        <label
          htmlFor="transactionId"
          className="font-medium tracking-wide text-sm"
        >
          Transaction ID
        </label>
        <div className="border-[#D0D5DD] bg-borderColor/15 border w-full mt-0.5 flex items-center gap- rounded-md">
          <input
            type="text"
            name="transactionId"
            id="transactionId"
            placeholder="Paste your transaction hash"
            className={`w-full h-10 text-sm font-medium outline-none px-3 lg:px-4 appearance-none`}
            value={formik.values.transactionId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="w-10 h-10 flex items-center justify-center">
            <Hash className="w-4 text-red-600" />
          </div>
        </div>
        {formik.touched.transactionId && formik.errors.transactionId ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.transactionId}
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          //   disabled={isLoading}
          className={`${
            ""
              ? // !formik.dirty || !formik.isValid || isLoading
                "bg-[#D0D5DD]"
              : "bg-primary"
          } w-full  text-white rounded-lg h-10 lg:h-12 px-6 mt-8 text-sm lg:text-base font-inter font-medium outline-none`}
        >
          {/* {isLoading ? "Please wait..." : "Login"} */}Deposit
        </button>
      </div>
    </form>
  );
};

export default FundingForm;
