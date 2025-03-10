import Hero from "../../../components/General/Hero"
import HomeAbout from "../../../components/General/HomeAbout"
import HomePerformance from "../../../components/General/HomePerformance"
import HomeService from "../../../components/General/HomeService"
import HomeTestimony from "../../../components/General/HomeTestimony"
import Sponsors from "../../../components/General/Sponsors"

const Home = () => {
  return (
    <>
      <Hero />
      <HomeService />
      <HomeAbout />
      <HomeTestimony />
      <HomePerformance />
      <Sponsors />
    </>
  )
}

export default Home