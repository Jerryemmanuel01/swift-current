import { BsCashCoin } from "react-icons/bs";
import { serviceFeatures } from "../../lib/utils";

const ServicesFeatures = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {serviceFeatures.map((val, i) => {
            const Icon = val.icon
            return (
              <div key={i} className="p-6 service-div bg-white hover:bg-primary/5 duration-300 hover:scale-[1.02] rounded-md">
                <div className="bg-yellow service-icon w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-sm">
                  <Icon className="text-3xl lg:text-4xl text-primary" />
                </div>
                <h2 className="mt-3.5 text-lg md:text-2xl font-semibold text-primary">
                  {val.title}
                </h2>
                <p className="mt-3 text-sm md:text-base text-light">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
