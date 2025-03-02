import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { sliderOption } from "../../lib/utils";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000 })] // Auto-slide every 3 seconds
  );

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className=" flex">
          {sliderOption.map((val, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] bg-center bg-no-repeat bg-cover custom-bg"
              style={{ backgroundImage: `url(${val.bgImg})` }}
            >
              <div className="bg-black/50 w-full h-[93vh] md:h-">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
