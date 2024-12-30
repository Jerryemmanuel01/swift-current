import CreditCard from "../../../components/General/CreditCard";
import Loans from "../../../components/General/Loans";
import PagesHero from "../../../components/General/PagesHero";
import Savings from "../../../components/General/Savings";
import ServicesFeatures from "../../../components/General/ServicesFeatures";
import Sponsors from "../../../components/General/Sponsors";

const Services = () => {
  return (
    <>
      <PagesHero page="Services" />
      <ServicesFeatures />
      <Savings />
      <CreditCard  />
      <Loans />
      <Sponsors />
    </>
  );
};

export default Services;