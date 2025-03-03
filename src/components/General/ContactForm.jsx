import useContactForm from "../../hooks/formHooks/useContactForm";

const ContactForm = () => {
  const { formik, isLoading } = useContactForm();
  return (
    <div className="w-full   lg:w-[50%] rounded-xl p-6 flex flex-col items-center lg:items-start border border-[#D0D5DD]">
      <form className="w-full " onSubmit={formik.handleSubmit}>
        {/* Name field */}
        <div className="mt-6">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-wide lg:text-base text-light"
          >
            Full Name<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            className={`${
              formik.touched.name && formik.errors.name
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } py-2 border-b w-full text-sm h-8 lg:h-[58px] lg:text-base font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        {/* Email field */}
        <div className="mt-6">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-wide lg:text-base text-light"
          >
            Email Address<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="swiftcurrent@example.com"
            className={`${
              formik.touched.email && formik.errors.email
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } py-2 border-b w-full text-sm h-8 lg:h-[58px] lg:text-base font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] font-semibold lg:text-xs">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        {/* Title field */}
        <div className="mt-6">
          <label
            htmlFor="subject"
            className="text-sm font-medium tracking-wide lg:text-base text-light"
          >
            Message Title<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Title message here..."
            className={`${
              formik.touched.subject && formik.errors.subject
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } py-2 border-b w-full text-sm h-8 lg:h-[58px] lg:text-base font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-[10px] font-semibold lg:text-xs">
              {formik.errors.subject}
            </div>
          ) : null}
        </div>

        {/* Message field */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-wide lg:text-base text-light"
          >
            Write Message<span className="text-red-600">*</span>
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Enter a description..."
            className={`${
              formik.touched.message && formik.errors.message
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } resize-none py-2 border-b w-full text-sm h-[72px] md:h-[100px] lg:h-[128px] lg:text-base font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-[10px] font-semibold lg:text-xs">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-center mt-6">
          <button
            name="submit"
            disabled={isLoading}
            type="submit"
            className={`${
              isLoading || !formik.isValid || !formik.dirty
                ? "bg-light/50"
                : "bg-primary hover:bg-secondary hover:scale-[1.02]"
            }  w-[200px] md:w-1/2 lg:w-full text-white font-semibold text-sm md:text-[15px] lg:text-lg py-4 px-6 rounded-lg outline-none duration-300`}
          >
            {isLoading ? "Please wait..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
