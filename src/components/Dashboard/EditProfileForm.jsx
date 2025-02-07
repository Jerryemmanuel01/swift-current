import useEditProfileForm from "../../hooks/dashboardHooks/useEditProfileForm";

const EditProfileForm = () => {
  const { formik, isLoading, countryLists, currenciesTypies } =
    useEditProfileForm();
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="sm:flex gap-4 items-center w-full">
        <div className="sm:w-1/2">
          <label
            htmlFor="firstName"
            className="font-medium tracking-wide text-xs"
          >
            First Name <span className="text-primary font-bold">*</span>
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="firstName"
              id="firstName"
              disabled
              className={`w-full bg-borderColor/25 h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </div>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="sm:w-1/2 mt-4 sm:mt-0">
          <label
            htmlFor="lastName"
            className="font-medium tracking-wide text-xs"
          >
            Last Name <span className="text-primary font-bold">*</span>
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="lastName"
              id="lastName"
              disabled
              className={`w-full h-10 bg-borderColor/25 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
          </div>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="sm:flex gap-4 items-center w-full mt-4">
        <div className="sm:w-1/2">
          <label
            htmlFor="userName"
            className="font-medium tracking-wide text-xs"
          >
            Username <span className="text-primary font-bold">*</span>
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="userName"
              id="userName"
              className={`w-full  h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
          </div>
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.userName}
            </div>
          ) : null}
        </div>
        <div className="sm:w-1/2 mt-4 sm:mt-0">
          <label htmlFor="email" className="font-medium tracking-wide text-xs">
            Email <span className="text-primary font-bold">*</span>
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="email"
              id="email"
              className={`w-full h-10  text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
      <div className="sm:flex gap-4 items-center w-full mt-4">
        <div className="sm:w-1/2 mt-4 sm:mt-0">
          <label htmlFor="phone" className="font-medium tracking-wide text-xs">
            Phone Number
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="number"
              name="phone"
              id="phone"
              className={`w-full h-10  text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div className="sm:w-1/2">
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
              className={`w-full text-xs px-3 h-8 lg:h-10 font-medium outline-none tracking-wide appearance-none`}
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
      </div>
      <div className="sm:flex gap-4 items-center w-full mt-4">
        <div className="sm:w-1/2">
          <label
            htmlFor="occupation"
            className="font-medium tracking-wide text-xs"
          >
            Occupation
          </label>
          <div className="border-[#D0D5DD] border w-full flex items-center mt-0.5 rounded-md">
            <input
              type="text"
              name="occupation"
              id="occupation"
              className={`w-full  h-10 text-xs font-medium fund-amount outline-1 outline-primary/50 tracking-wide px-3 lg:px-4 appearance-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occupation}
            />
          </div>
          {formik.touched.occupation && formik.errors.occupation ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.occupation}
            </div>
          ) : null}
        </div>
        <div className="sm:w-1/2 mt-4 sm:mt-0">
          <label
            htmlFor="currency"
            className="text-xs font-medium tracking-wide"
          >
            Currency
          </label>
          <div className="border-[#D0D5DD] border w-full mt-1 flex items-center gap-2 rounded-md">
            <select
              name="currency"
              id="currency"
              className={`w-full text-xs px-3 h-8 text-gray lg:h-10 font-medium outline-none tracking-wide appearance-none`}
              aria-placeholder="Please select state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currency}
            >
              <option value="" disabled>
                Select Currency *
              </option>
              {currenciesTypies.map((val, i) => (
                <option value={val.value} key={i}>
                  {val.currency}
                </option>
              ))}
            </select>
          </div>
          {formik.touched.currency && formik.errors.currency ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.currency}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className={`${
             !formik.isValid || isLoading
              ? "bg-[#D0D5DD]"
              : "bg-primary"
          } w-full  text-white rounded-lg h-10 px-6 mt-8 text-xs lg:text-[12.5px] lg:font-semibold outline-none`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <PiSpinner className="text-base animate-spin" />
              Please wait...
            </span>
          ) : (
            "Update Profile"
          )}
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
