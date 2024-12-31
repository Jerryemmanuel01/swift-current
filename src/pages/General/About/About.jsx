import AboutCompany from "../../../components/General/AboutCompany";
import HomePerformance from "../../../components/General/HomePerformance";
import PagesHero from "../../../components/General/PagesHero";
import Sponsors from "../../../components/General/Sponsors";

const About = () => {
  return (
    <>
      <PagesHero page="About" />
      <AboutCompany />
      <HomePerformance />
      <Sponsors />
    </>
  );
}

export default About