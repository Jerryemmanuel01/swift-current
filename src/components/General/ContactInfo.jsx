import ContactForm from "./ContactForm";

const ContactInfo = () => {
  return (
    <section className="">
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="flex items-center gap-6">
          <ContactForm />
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
