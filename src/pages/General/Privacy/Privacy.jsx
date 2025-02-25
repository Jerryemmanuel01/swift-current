import PagesHero from "../../../components/General/PagesHero";
import PrivacyList from "../../../components/General/PrivacyList";

const Privacy = () => {
  return (
    <section>
      <PagesHero page="Privacy Policy" />
      <section className="bg-[#f5f5f5]">
        <div className="py-0 md:py-6 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
          <p className=" pt-4 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            This Privacy Policy of swiftcurrent Inc. ("swiftcurrent," "us,"
            "we," and "our") describes the information we collect about you when
            you access our website, enter into agreements with us, use our
            services and products, send us communications, or otherwise engage
            with us, and what we do with such information. Any references to
            swiftcurrent in this Privacy Policy also refers to its wholly owned
            subsidiaries. This Privacy Policy covers all of our services and
            products and all methods by which you may access our website.
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            By opening an account with us and utilizing our services, products,
            and website, you agree to the terms of our Privacy Policy. If you do
            not agree to the terms of our Privacy Policy, you cannot use our
            services or products and should not access our website.
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            We understand that privacy is an important issue to you and we
            respect the privacy of all of our customers and aim to protect the
            security and confidentiality of non-public personal information
            about you that we acquire.
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            Under the law you have the right to limit some, but not all, sharing
            of your personal information. The law also requires us to disclose
            to you how we collect, share and protect your personal information.
          </p>
        </div>
        <PrivacyList />
      </section>
    </section>
  );
};

export default Privacy;
