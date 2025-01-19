import useKYCForm from "../../hooks/dashboardHooks/useKYCForm";

const KYCForm = () => {
  const { countryLists, formik, isLoading, IdMedium, message } = useKYCForm();
  return (
    <form onSubmit={formik.handleSubmit} className="w-full mt-3 lg:mt-4">
      <div className="">
        <label
          htmlFor="country"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Issuing Country
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="country"
            id="country"
            className={`w-full text-xs px-3 h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide appearance-none`}
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
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="account"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Identity Medium
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="medium"
            id="medium"
            className={`w-full text-xs px-3 h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide appearance-none`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.medium}
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
        {formik.touched.medium && formik.errors.medium ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.medium}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="number"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Identity Number
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Identity number"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
        </div>
        {formik.touched.number && formik.errors.number ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.number}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="photo"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Profile Photo *
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 rounded-md">
          <input
            type="file"
            name="photo"
            id="photo"
            placeholder="Select photo *"
            className={`w-full text-xs leading-6 lg:text-sm lg:leading-8 font-medium outline-none tracking-wide`}
            onChange={(e) => {
              formik.setFieldValue("photo", e.target.files[0]);
            }}
          />
        </div>
        {formik.touched.photo && formik.errors.photo ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.photo}
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
          {isLoading ? "Please wait..." : "Sign Up"}
        </button>
      </div>

      {message && (
        <p className="text-sm text-[#B3261E] tracking-wide text-center mt-6">
          {message.error || "error"}
        </p>
      )}
    </form>
  );
};

export default KYCForm;
