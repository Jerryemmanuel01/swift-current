import PagesHero from "../../../components/General/PagesHero";
import TermsList from "../../../components/General/TermsList";

const Terms = () => {
  return (
    <section>
      <PagesHero page="Terms" />
      <section className="bg-[#f5f5f5]">
        <div className="py-0 md:py-6 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
          <p className=" pt-4 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            swiftcurrent is an online website and platform that allows users to
            securely buy/sell digital assets. Our mission is to be the safest,
            easiest and most transparent digital asset platform in existence.
            These Terms of Service (the "Terms"), the Privacy and Transparency
            Statement and any and all other agreements between swiftcurrent and
            its users will use the following definitions:
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            - "Customer," "user," "you," and "your" refers to the person or
            entity accessing and/or using swiftcurrent
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            - "Company," "our," "swiftcurrent," "Website," "we," and "us"
            collectively refers to the online website and platform
            "swiftcurrent" and its owners, directors, officers, employees,
            operators, agents, insurers, suppliers, and attorneys.
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            - "Party" may refer to either you or us, and "Parties" refers to
            both you and us. For the avoidance of any doubt, the contracting
            parties in our Terms are you and swiftcurrent.
          </p>
          <p className=" py-2 text-xs md:text-sm tracking-wide leading-6 md:leading-7">
            - "Asset," "digital asset," "coin," "cryptocurrency," "funds,"
            "good," "ledger entry," and "token" refer to blockchain-based
            software ledger data entries.
          </p>
        </div>
        <TermsList />
      </section>
    </section>
  );
};

export default Terms;
