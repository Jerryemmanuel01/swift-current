import { MoveRight } from "lucide-react";
import FaqImg from "../../assets/Images/service4.jpg";
import { Link } from "react-router-dom";

const FAQCTA = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="lg:flex lg:gap-8">
          <div className="lg:w-[60%]">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-[48px] lg:leading-[56px] text-primary">
              Looking for an easy and secured place to save you money?
            </h2>{" "}
            <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
            <p className="my-4 md:my-6 lg:my-8 text-[#4b4b4b] text-sm md:text-base leading-6 md:leading-7">
              At Swift Current Corporation, we believe that everyone deserves
              financial security and independence, that's why we're committed to
              providing you with the information and resources you need.
            </p>
            <Link to="/auth/sign-up" className="flex items-center w-fit gap-2 bg-primary text-white hover:text-yellow text-sm md:text-base py-2.5 px-6 rounded-lg font-semibold hover:scale-[1.03] duration-300">
              Apply Now <MoveRight />
            </Link>
          </div>
          <div className="lg:w-[40%] mt-8 lg:mt-0">
            <img
              src={FaqImg}
              alt="image"
              className="w-full h-full object-cover rounded-lg shadow-custom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQCTA;
