import HomeAboutBg from "../../assets/Images/service5.webp";
import { FAQS } from "../../lib/utils";
import Accordion from "./Accordion";

const FAQSec = () => {
  return (
    <section className="">
      <div
        className="bg-center bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: `url(${HomeAboutBg})` }}
      >
        <div className="md:h-36 h-28 bg-primary/90 flex justify-center items-center text-white px-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-center">
            Get Your Questions <span className="text-yellow">Answered</span>
          </p>
        </div>
      </div>

      <div className="py-6 md:py-10 lg:py-16 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="border border-[#98a2b393] rounded-lg w-full md:w-[620px] lg:w-[792px] mt-6 px-6 lg:px-8 pt-2 pb-6">
            {FAQS.map((faq) => (
              <Accordion
                question={faq.question}
                answer={faq.answer}
                key={faq.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSec;
