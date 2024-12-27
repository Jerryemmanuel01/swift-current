import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { ChevronRight, Mail } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "Help & Support", to: "/support" },
    { name: "Terms of Service", to: "/terms" },
    { name: "Privacy Policy", to: "/privacy" },
  ];
  return (
    <section className="bg-dark ">
      <div className="lg:max-w-[1200px] mx-auto py-12 md:pt-20 md:pb-32 text-light px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-between">
        <div className="">
          <h2 className="text-3xl font-bold">LOGO</h2>
          <p className="text-xs md:text-sm lg:text-base mt-4 md:mt-5 lg:mt-7 leading-5 md:leading-6 lg:leading-7">
            From our small London beginnings more than 100 years ago to today’s
            current operations Swift Current Corporation has always been driven
            by strong values and the ultimate goal of helping our clients and
            customers achieve their ambitions in the right way.
          </p>
        </div>
        <div className="mt-8 md:mt-0 lg:flex flex-col items-center">
          <div className="">
            <h2 className="text-bold  font-merriweather text-sm md:text-base lg:text-lg text-white ">
              Extra Links
            </h2>
            <div className="w-10 h-1 mt-1 rounded-lg bg-yellow" />
            <ul className="mt-7">
              {companyLinks.map((link, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm md:text-base mt-4"
                >
                  <ChevronRight className="w-5 text-yellow" />
                  <Link
                    to={link.link}
                    className={`font-medium duration-300 hover:text-yellow`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-0 lg:flex flex-col items-center">
          <div className="border-b border-primary pb-4">
            <h2 className="text-bold  font-merriweather text-sm md:text-base lg:text-lg text-white ">
              Global Head Office
            </h2>
            <div className="w-10 h-1 mt-1 rounded-lg bg-yellow" />
            <p className="mt-6 text-xs md:text-sm lg:text-base leading-5 md:leading-6 lg:leading-7">
              London is home to our headquarters and is a key hub for our
              business. We also conduct significant Private Banking and
              International Banking operations from our London base.
            </p>
            <div className="mt-2">
              <h3 className="font-semibold text-xs md:text-sm lg:text-base text-yellow">
                Swift Current Corporation
              </h3>
              <p className="text-xs md:text-sm lg:text-base leading-5 md:leading-6 lg:leading-7">
                35, Portman Square, London W1H 6LR United Kingdom
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 lg:flex flex-col items-center">
          <div className="">
            <h2 className="text-bold  font-merriweather text-sm md:text-base lg:text-lg text-white ">
              Contact Info
            </h2>
            <div className="w-10 h-1 mt-1 rounded-lg bg-yellow" />
            <div className="mt-6 text-xs md:text-sm lg:text-base leading-5 md:leading-6 lg:leading-7">
              <div className="border-b pb-3 border-primary flex items-center gap-2">
                <Mail className="w-5 " />
                <span className="tracking-wide">support@swiftcurrent.com</span>
              </div>
              <div className="py-3 flex items-center gap-2">
                <FaWhatsapp className="text-xl " />
                <span className="tracking-wide">+44 1234 1234</span>
              </div>
            </div>
            <div className="border-b border-primary py-3">
              <p className="text-yellow font-semibold text-sm md:text-base lg:text-lg">
                Opening Hours
              </p>
              <span className="text-xs md:text-sm lg:text-base">Monday : Thursday 9am - 5pm</span>
            </div>
            <div className="border-b border-primary py-3">
              <span className="text-xs md:text-sm lg:text-base">Friday : 9am - 2pm</span>
            </div>
            <p className="text-xs md:text-sm lg:text-base pt-3">Weekends : Closed</p>
          </div>
        </div>
      </div>
      <div className="bg-darker w-full py-4 flex flex-col items-center">
        <p className="text-light text-xs md:text-sm lg:text-base">
          &copy; All Rights Reservered by{" "}
          <span className="text-lighter">Swift Current Corporation</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
