import Slider from "react-slick";
import HeroBg1 from "../../assets/Images/hero-bg1.jpg";
import HeroBg2 from "../../assets/Images/hero-bg2.jpg";
import HeroBg3 from "../../assets/Images/hero-bg3.jpg";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
    fade: true,
    waitForAnimate: false,
    pauseOnHover: false,
    cssEase: "linear",
  };

  const sliderOption = [
    {
      title: "You can open your bank account with us now",
      bnt1Text: "About us",
      bnt1Link: "/about",
      bnt2Text: "Our Services",
      bnt2Link: "/services",
      bgImg: HeroBg1,
    },
    {
      title: "Get a banking loan from us without stress",
      bnt1Text: "About us",
      bnt1Link: "/about",
      bnt2Text: "Open Account",
      bnt2Link: "/auth/sign-up",
      bgImg: HeroBg2,
    },
    {
      title: "We are the end to your financial problems",
      bnt1Text: "About us",
      bnt1Link: "/about",
      bnt2Text: "Login",
      bnt2Link: "/auth/login",
      bgImg: HeroBg3,
    },
  ];
  return (
    <div className="slider-container overflow-x-hidden">
      <Slider {...settings}>
        {sliderOption.map((val, i) => (
          <div className="">
            <div
              className=" bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${val.bgImg})` }}
            >
              <div className="bg-black/50 w-full h-screen">
                <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center px-6">
                  <div className="md:pl-10 xl:pl-0">
                    <h2 className="text-white font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:w-[740px] md:leading-[54px] lg:leading-[68px]">
                      {val.title}
                    </h2>
                    <div className="mt-4 lg:mt-8 w-full flex items-center gap-4">
                      <Link
                        to={val.bnt1Link}
                        className="bg-primary text-white font-bold text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-2 lg:py-3 tracking-wide rounded-md outline-none flex items-center gap-2"
                      >
                        <span>{val.bnt1Text}</span>
                        <Play
                          fill="yellow"
                          color="none"
                          className="w-2.5 md:w-3 lg:w-4 mt-0.5"
                        />
                      </Link>
                      <Link
                        to={val.bnt2Link}
                        className="bg-yellow text-primary font-bold text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-1.5 lg:py-2.5 rounded-md tracking-wide outline-none flex items-center gap-2"
                      >
                        <span>{val.bnt2Text}</span>
                        <Play
                          fill="primary"
                          color="none"
                          className="w-2.5 md:w-3 lg:w-4 mt-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
