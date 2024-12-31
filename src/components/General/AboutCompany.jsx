import aboutImg from "../../assets/Images/about-s4.jpg";
const AboutCompany = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="py-10 md:py-16 lg:py-24 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="lg:flex gap-6 md:gap-10">
          <div className="lg:w-[60%]">
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
                About our company
              </h2>
              <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
            </div>
            <div className="">
              <p className="text-[#4b4b4b] text-sm leading-6 my-6">
                Our story begins in 1690 when John Freame and Thomas Gould
                started trading as goldsmith bankers on Lombard Street, London.
                In 1736 John’s son-in-law, James Gupta, joined the business
                giving it the name we know today. Since then, swift current corporation
                has been a leader in swift current financialtion; funding the world’s
                ﬁrst industrial steam railway, naming the UK’s first female
                branch manager and introducing the world’s first ATM machine.
                And those are just a few highlights from our first 60 years.
              </p>

              <p className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                Today, swift current corporation is a major global financial services
                provider engaged in retail banking, credit cards, corporate and
                investment banking and wealth management. swift current corporation moves,
                lends, invests and protects money for 48 million customers and
                clients worldwide.
              </p>

              <p className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                Along the way swift current corporation has always focused on serving the
                needs of its customers. In the US, swift current corporation Online
                Banking brings an accessible, intuitive and secure banking
                experience to customers. And we‘re growing every day.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] lg:mt-20 xl:mt-0">
            <img
              src={aboutImg}
              alt=""
              className="w-full h-full rounded-md object-cover shadow-custom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany