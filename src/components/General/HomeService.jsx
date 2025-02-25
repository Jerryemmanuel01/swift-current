import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { homeServices } from "../../lib/utils";
const HomeService = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-6 w-full max-w-[1200px] mx-auto h-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
          Our Services
        </h2>
        <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-6 md:gap-y-8 lg:gap-y-12 1 py-8 md:py-10 lg:py-14">
        {homeServices.map((val, i) => (
          <div className="" key={i}>
            <div className="relative">
              <img src={val.img} alt="" className="w-full h-[230px] object-cover "/>
              <div
                to={val?.link }
                className={`w-full h-full flex items-center justify-center top-0 left-0  absolute bg-primary/20 transition-all duration-300 opacity-0 hover:opacity-100`}
              >
                {/* <div className="w-10 h-10 flex items-center justify-center bg-yellow rounded-md">
                  <IoMdArrowRoundForward className="text-primary font-black text-xl" />
                </div> */}
              </div>
            </div>
            <div className=" mt-4">
              <Link to={val?.link} className="text-[#3679b8] hover:text-primary text-base md:text-lg lg:text-xl transition-all font-semibold">
                {val.title}
              </Link>
              <div className="w-8 h-1 bg-yellow rounded-lg" />
            </div>
            <p className="text-light tracking-wide md:tracking-normal text-sm md:text-base mt-2">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeService;