import useContactForm from "../../hooks/formHooks/useContactForm";

const ContactForm = () => {
  const { formik, isLoading } = useContactForm();
  return (
    <div className="bg-white w-full md:w-[600px] lg:w-[650px] rounded-xl p-6 flex flex-col items-center lg:items-start">
      <form className="w-full " onSubmit={formik.handleSubmit}>
        {/* Name field */}
        <div className="mt-6">
          <label
            htmlFor="fullname"
            className="text-sm font-medium tracking-wide lg:text-base"
          >
            Full Name<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter full name"
            className={`${
              formik.touched.fullname && formik.errors.fullname
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } py-2 border-b w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.fullname}
            </div>
          ) : null}
        </div>

        {/* Email field */}
        <div className="mt-6">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-wide md:text-base"
          >
            Email Address<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="handyman@example.com"
            className={`${
              formik.touched.email && formik.errors.email
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } py-2 border-b w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
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
            htmlFor="title"
            className="text-sm font-medium tracking-wide md:text-base"
          >
            Message Title<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title message here..."
            className={`${
              formik.touched.title && formik.errors.title
                ? "border-[#EB4335]"
                : "border-[#D0D5DD]"
            } py-2 border-b w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-[10px] font-semibold lg:text-xs">
              {formik.errors.title}
            </div>
          ) : null}
        </div>

        {/* Message field */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-wide md:text-base"
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
            } resize-none py-2 border-b w-full text-xs h-[72px] md:h-[100px] lg:h-[128px] lg:text-base font-medium outline-none tracking-wide`}
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
            disabled={isLoading}
            type="submit"
            className={`${
              isLoading || !formik.dirty ? "bg-[#0dd5d5]" : "bg-[#008080]"
            }  w-[130px] md:w-1/2 lg:w-full text-white font-semibold text-xs md:text-[15px] lg:text-lg py-4 px-6 rounded-lg outline-none`}
          >
            {isLoading ? "Please wait..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
