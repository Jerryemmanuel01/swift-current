import Slider from "react-slick";
import SponsorImg1 from "../../assets/Images/sponsorImg1.png";
import SponsorImg2 from "../../assets/Images/sponsorImg2.png";
import SponsorImg3 from "../../assets/Images/sponsorImg3.png";
import SponsorImg4 from "../../assets/Images/sponsorImg4.png";
import SponsorImg5 from "../../assets/Images/sponsorImg5.png";
import SponsorImg6 from "../../assets/Images/sponsorImg6.png";

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      <div className="p-10 px-6 w-full lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="sponsors-slider">
          <Slider {...settings}>
            <div className="">
              <img src={SponsorImg1} alt="" className="w-[100px] md:w-[150px]" />
            </div>
            <div className="">
              <img src={SponsorImg2} alt="" className="w-[100px] md:w-[150px]" />
            </div>
            <div className="">
              <img src={SponsorImg3} alt="" className="w-[100px] md:w-[150px]" />
            </div>
            <div className="">
              <img src={SponsorImg4} alt="" className="w-[100px] md:w-[150px]" />
            </div>
            <div className="">
              <img src={SponsorImg5} alt="" className="w-[100px] md:w-[150px]" />
            </div>
            <div className="">
              <img src={SponsorImg3} alt="" className="w-[100px] md:w-[150px]" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
