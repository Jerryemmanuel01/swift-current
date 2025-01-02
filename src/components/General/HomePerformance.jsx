import { useState, useRef } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const HomePerformance = () => {
  const [counterOn, setCounterOn] = useState(false);
  const sectionRef = useRef(null);

  return (
    <section className=" ">
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="lg:w-[85%] ">
          <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl lg:leading-[48pxk] font-poppins font-bold">
            We deliver high performance with the clients’ projected satisfaction
          </h2>
          <div className="w-8 h-1.5 bg-yellow rounded-lg mt-3" />
        </div>

        <div className="my-6 lg:flex">
          <div className="lg:w-[60%]">
            <p className="text-sm leading-6 text-[#696969] lg:w-[70%] ">
              The Swift Current Corporation London Ltd story is an interesting
              one. In its early years, the company thrived as a merchant of
              produce from across the country, such as cotton, tea and jute.
              Adapting with the times, it also expanded into lending and
              finance.
            </p>
            <div className="mt-6">
              <div className="flex flex-col">
                <h3 className="text-primary xl:text-lg font-bold -mb-3">
                  Finance
                </h3>
                <div className="w-full flex items-center">
                  <div className="w-[65%] h-1.5 bg-primary" />
                  <span className="rounded-full w-12 h-12 xl:w-14 xl:h-14 xl:text-lg bg-yellow flex items-center justify-center font-bold text-primary">
                    85%
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-primary xl:text-lg font-bold -mb-3">
                  Business
                </h3>
                <div className="w-full flex items-center">
                  <div className="w-[82%] h-1.5 bg-primary" />
                  <span className="rounded-full w-12 h-12 xl:w-14 xl:h-14 xl:text-lg bg-yellow flex items-center justify-center font-bold text-primary">
                    98%
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-primary xl:text-lg font-bold -mb-3">
                  Investment
                </h3>
                <div className="w-full flex items-center">
                  <div className="w-[72%] h-1.5 bg-primary" />
                  <span className="rounded-full w-12 h-12 xl:w-14 xl:h-14 xl:text-lg bg-yellow flex items-center justify-center font-bold text-primary">
                    92%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
            triggerRef
            className="lg:w-[40%] flex flex-col md:justify-around justify-between gap-10 md:gap-20 lg:gap-0 lg:mt-0 md:mt-10 mt-8"
          >
            <div className="flex items-center lg:justify-between justify-around">
              <div className="flex flex-col gap-2 items-center">
                <div className=" font-poppins font-bold flex items-center gap-1">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-primary">
                    {counterOn && (
                      <CountUp start={2} end={15} duration={5} delay={0} />
                    )}
                    K
                  </span>
                  <span className="text-yellow text-2xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-light">Happy Clients</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className=" font-poppins font-bold flex items-center gap-1">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-primary">
                    {counterOn && (
                      <CountUp start={2} end={20} duration={5} delay={0} />
                    )}
                  </span>
                  <span className="text-yellow text-2xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-light">
                  Years of Experiences
                </p>
              </div>
            </div>

            <div className="flex items-center lg:justify-between justify-around">
              <div className="flex flex-col gap-2 items-center">
                <div className=" font-poppins font-bold flex items-center gap-1">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-primary">
                    {counterOn && (
                      <CountUp start={2} end={98} duration={5} delay={0} />
                    )}
                  </span>
                  <span className="text-yellow text-2xl">%</span>
                </div>
                <p className="text-sm lg:text-base text-light">
                  Satisfied Clients
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className=" font-poppins font-bold flex items-center gap-1">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-primary">
                    {counterOn && (
                      <CountUp start={2} end={1500} duration={3} delay={0} />
                    )}
                  </span>
                  <span className="text-yellow text-2xl">+</span>
                </div>
                <p className="text-sm lg:text-base text-light">
                  Businesses Affiliated
                </p>
              </div>
            </div>
          </ScrollTrigger>

          {/* <div className="hidden lg:block ">
            <img src={AboutChart} alt="" className="object-cover w-full shadow-lg" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomePerformance;
