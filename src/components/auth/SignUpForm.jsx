import { Link } from "react-router-dom";
import useSignUpForm from "../../hooks/formHooks/useSignUpForm";
import { PiSpinner } from "react-icons/pi";

const SignUpForm = () => {
  const {
    countryLists,
    formik,
    isLoading,
    message,
    accountTypies,
    currenciesTypies,
  } = useSignUpForm();
  return (
    <form className="py-6 md:py-7 lg:py-8 p-6 " onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="firstName"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          First Name
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 lg:px-4 flex items-center gap-2 rounded-md mt-1">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="lastName"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Last Name
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="userName"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Username
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter Username *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
        </div>
        {formik.touched.userName && formik.errors.userName ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.userName}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="email"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Email
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="phone"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Phone Number
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.phone}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="country"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Country
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
          htmlFor="accountType"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Account Type
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="accountType"
            id="accountType"
            className={`w-full text-xs px-3 h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide appearance-none`}
            aria-placeholder="Please select state"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accountType}
          >
            <option value="" disabled>
              Select Account Type
            </option>
            {accountTypies.map((val, i) => (
              <option value={val.value} key={i}>
                {val.account}
              </option>
            ))}
          </select>
        </div>
        {formik.touched.accountType && formik.errors.accountType ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.accountType}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="password"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Password
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="confirmPassword"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Confirm Password
        </label>
        <div className="border-[#D0D5DD] border w-full px-3 mt-1 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password *"
            className={`w-full text-xs h-8 lg:h-10 lg:text-sm text-[#495057] font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="currency"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Currency
        </label>
        <div className="border-[#D0D5DD] border w-full mt-1 flex items-center gap-2 rounded-md">
          <select
            name="currency"
            id="currency"
            className={`w-full text-xs px-3 h-8 text-gray lg:h-10 lg:text-sm font-medium outline-none tracking-wide appearance-none`}
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
      <div className="mt-2 lg:mt-3">
        <label
          htmlFor="profileImage"
          className="text-xs font-medium tracking-wide lg:text-sm"
        >
          Profile Photo *
        </label>
        <div className="border-[#D0D5DD] text-gray border w-full mt-1 rounded-md">
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            placeholder="Select photo *"
            accept="image/*"
            className={`w-full text-xs leading-6 lg:text-sm lg:leading-8 font-medium outline-none tracking-wide`}
            onChange={(e) => {
              formik.setFieldValue("profileImage", e.target.files[0]);
            }}
          />
        </div>
        {formik.touched.profileImage && formik.errors.profileImage ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.profileImage}
          </div>
        ) : null}
      </div>
      <div className="mt-2 lg:mt-3 flex gap-2 items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="lg:h-[18px] lg:w-[18px]"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label
          htmlFor="terms"
          className="text-xs lg:text-sm leading-5 tracking-wide w-[302px] lg:w-[560px] lg:leading-6"
        >
          I agree to the Swift Current's
          <Link to="/terms" className="text-primary">
            {" "}
            terms & conditions
          </Link>
        </label>
      </div>
      <div className="flex items-center justify-center">
        <button
          name="submit"
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
            "Sign Up"
          )}
        </button>
      </div>

      {/* {message && (
        <p className="text-sm text-[#B3261E] tracking-wide text-center mt-6">
          {message}
        </p>
      )} */}

      <div className="text-sm flex items-center mt-3 gap-1 w-full justify-center">
        <span className="">Already have an account?</span>
        <Link to="/auth/login" className="text-lighter">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
