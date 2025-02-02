import { PiSpinner } from "react-icons/pi";
import useKYCForm from "../../hooks/dashboardHooks/useKYCForm";

const KYCForm = () => {
  const { countryLists, formik, isLoading, IdMedium, message } = useKYCForm();
  return (
    <form onSubmit={formik.handleSubmit} className="w-full mt-3 lg:mt-4">
      <div className="">
        <label
          htmlFor="issuingCountry"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Issuing Country
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="issuingCountry"
            id="issuingCountry"
            className={`w-full text-xs px-3 h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide appearance-none`}
            aria-placeholder="Please select state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.issuingCountry}
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
        {formik.touched.issuingCountry && formik.errors.issuingCountry ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.issuingCountry}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="identityMedium"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Identity Medium
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="identityMedium"
            id="identityMedium"
            className={`w-full text-xs px-3 h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identityMedium}
          >
            <option value="" disabled>
              Select Identity Medium
            </option>
            {IdMedium.map((val, i) => (
              <option value={val.value} key={i}>
                {val.medium}
              </option>
            ))}
          </select>
        </div>
        {formik.touched.identityMedium && formik.errors.identityMedium ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.identityMedium}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="identityNumber"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Identity Number
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="identityNumber"
            name="identityNumber"
            id="identityNumber"
            placeholder="Identity number"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identityNumber}
          />
        </div>
        {formik.touched.identityNumber && formik.errors.identityNumber ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.identityNumber}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="identityCardPhoto"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Identity Photo *
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 rounded-md">
          <input
            type="file"
            name="identityCardPhoto"
            id="identityCardPhoto"
            accept="image/*"
            placeholder="Select photo *"
            className={`w-full text-xs leading-6 lg:text-sm lg:leading-8 font-medium outline-none tracking-wide`}
            onChange={(e) => {
              formik.setFieldValue("identityCardPhoto", e.target.files[0]);
            }}
          />
        </div>
        {formik.touched.identityCardPhoto && formik.errors.identityCardPhoto ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.identityCardPhoto}
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
              <PiSpinner className="text-base animate-spin"/>
              Please wait...
            </span>
          ) : (
            "Verify"
          )}
        </button>
      </div>
    </form>
  );
};

export default KYCForm;
