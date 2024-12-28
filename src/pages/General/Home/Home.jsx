import Hero from "../../../components/General/Hero"
import HomeAbout from "../../../components/General/HomeAbout"
import HomePerformance from "../../../components/General/HomePerformance"
import HomeService from "../../../components/General/HomeService"

const Home = () => {
  return (
    <div className="">
      <Hero />
      <HomeService />
      <HomeAbout />
      <HomePerformance />
    </div>
  )
}

export default Home