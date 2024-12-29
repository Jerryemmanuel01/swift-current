import { Star } from "lucide-react";
import Slider from "react-slick";
import { homeTestimonies } from "../../lib/utils";

const HomeTestimony = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#f5f5f5] ">
      <div className="p-10 md:py-16 lg:py-24 px-6 w-full lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-primary text-3xl md:text-3xl lg:text-4xl font-poppins font-bold text-center">
            What Our Clients Say About Us
          </h2>
          <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
          <p className="mt-6 md:mt-7 lg:mt-8 max-w-[356px] md:max-w-[440px] lg:max-w-[524px] text-center text-sm lg:text-base text-[#696969]">
            Our expertise in financial services has bettered the lives of our
            clients greatly, their testimony has encouraged us greatly.
          </p>
        </div>
        <div className="testimoy-slider">
          <Slider {...settings} className="mt-8 overflow-hidden">
            {homeTestimonies.map((val, i) => (
              <div
                key={i}
                className="p-7 border max-h-[400px] bg-white border-[#E7E7E7] rounded-md shadow-md"
              >
                <p className="text-[#696969] text-sm w-[85%]">{val.desc}</p>
                <div className="flex gap-1 items-center mt-3">
                  <Star color="none" fill="#fcc20f" className="w-4 h-4" />
                  <Star color="none" fill="#fcc20f" className="w-4 h-4" />
                  <Star color="none" fill="#fcc20f" className="w-4 h-4" />
                  <Star color="none" fill="#fcc20f" className="w-4 h-4" />
                  <Star color="none" fill="#fcc20f" className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full border border-primary">
                    <img
                      src={val.img}
                      alt=""
                      className="object-cover w-full rounded-full "
                    />
                  </div>
                  <div className="">
                    <h2 className="font-medium text-sm">{val.name}</h2>
                    <p className="text-[#696969] text-sm mt-0.5">{val.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimony;
