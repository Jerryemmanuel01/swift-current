import { MapPin, Clock3 } from "lucide-react";
import ContactForm from "./ContactForm";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className="">
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="lg:flex items-centerh gap-10">
          <ContactForm />
          <div className="lg:w-[40%] lg:mt-24 mt-10 md:mt-14">
            <div className="">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-primary">
                Contact Information
              </h2>
              <div className="w-8 h-1.5 bg-yellow rounded-lg mt-2" />

              <p className="text-light mt-3">
                Contact us with the following details.
              </p>
              <div className="mt-6">
                <div className="contact-info border border-[#D0D5DD] hover:bg-lighter/10 p-4 flex items-center gap-2 w-full rounded-md hover:scale-[1.03] duration-300">
                  <div className="info-icon duration-300 bg-yellow/90 rounded-sm text-primary w-12 h-12 flex justify-center items-center">
                    <MapPin />
                  </div>
                  <div className="">
                    <h2 className="font-bold text-sm text-primary">
                      Office Location
                    </h2>
                    <p className="text-sm text-light mt-1">
                      35, Portman Square, London W1H 6LR United Kingdom
                    </p>
                  </div>
                </div>
                <div className="contact-info border border-[#D0D5DD] hover:bg-lighter/10 p-4 flex items-center gap-2 w-full rounded-md hover:scale-[1.03] duration-300 mt-6">
                  <div className="info-icon bg-yellow rounded-sm text-primary w-12 h-12 flex justify-center items-center">
                    <Clock3 />
                  </div>
                  <div className="">
                    <h2 className="font-bold text-sm text-primary">
                      Work Hours
                    </h2>
                    <p className="text-sm text-light mt-1">
                      Everyday 09.00 - 17.00
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="border-t border-[#D0D5DD] mt-8 md:mt-14 lg:mt-20 py-4 md:py-6 lg:py-8 w-full flex justify-between items-center">
                <p className="text-sm font-bold lg:text-base">Social Media :</p>
                <div className="flex gap-2 md:gap-3 lg:gap-4">
                  <div className="w-8 h-8 bg-primary/30 flex items-center justify-center text-dark rounded hover:bg-primary/60 duration-300">
                    <FaFacebook className="" />
                  </div>
                  <div className="w-8 h-8 bg-primary/30 flex items-center justify-center text-dark rounded hover:bg-primary/60 duration-300">
                    <FaYoutube className="" />
                  </div>
                  <div className="w-8 h-8 bg-primary/30 flex items-center justify-center text-dark rounded hover:bg-primary/60 duration-300">
                    <FaXTwitter className="" />
                  </div>
                  <div className="w-8 h-8 bg-primary/30 flex items-center justify-center text-dark rounded hover:bg-primary/60 duration-300">
                    <FaInstagram className="" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
