import HomeAboutBg from "../../assets/Images/service5.webp";
import PhoneContactBg from "../../assets/Images/phoneContact-bg.webp";
import PhoneBg from "../../assets/Images/phoneContact.png";
import { homeAbouts } from "../../lib/utils";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="">
      <div
        className="bg-center bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: `url(${HomeAboutBg})` }}
      >
        <div className="h-36 bg-primary/90 flex justify-center items-center text-white px-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-center">
            Find out more about <span className="text-yellow">what we do</span>
          </p>
        </div>
      </div>
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full lg:max-w-[960px] xl:max-w-[1200px] mx-auto lg:flex items-center gap-6">
        <div className="hidden lg:block lg:w-1/4 relative">
          <div className="max-w-[250px] relative">
            <div
              className="bg-center bg-no-repeat bg-cover w-[96%] h-[96%] absolute top-2.5 left-1.5 rounded-[25px] before:bg-primary/80 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:rounded-[25px] "
              style={{ backgroundImage: `url(${PhoneContactBg})` }}
            ></div>
            <img src={PhoneBg} alt="" className="max-w-full relative" />
            <div className="w-[165px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <h2 className="text-white font-poppins text-3xl font-bold">
                Still have <br />{" "}
                <span className="text-yellow">Confusion?</span>
              </h2>
              <Link to="/contact">
                <button name="action" className="w-full bg-yellow hover:bg-yellow/80 duration-300 text-primary mt-3.5 rounded-md py-2 font-bold animate-bounce">
                  Request a call back
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:w-3/4">
          {homeAbouts.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="flex items-center gap-3 lg:gap-6">
                <div className="border-2 border-yellow rounded-full w-14 h-14 lg:w-[72px] lg:h-[72px] flex justify-center items-center">
                  <Icon className="text-primary lg:w-8 lg:h-8" />
                </div>
                <div className="w-[80%]">
                  <h3 className="font-bold text-secondary font-poppins text-lg lg:text-2xl">
                    {val.title}
                  </h3>
                  <p className="text-light mt-1 text-sm lg:leading-7">
                    {val.decs}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
