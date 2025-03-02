import servicesImg3 from "../../assets/Images/servicesImg2.webp";

const CreditCard = () => {
  return (
    <section>
      <div className="mt-10 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
            Credit Cards
          </h2>
          <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
        </div>
        <div className="lg:flex gap-6 md:gap-10 flex-row-reverse mt-8">
          <div className="lg:w-[60%] xl:-mt-10g">
            <div className="">
              <p className="text-[#4b4b4b] text-sm leading-6 mb-6">
                Customized offers fast and easy Tell us who you are and what you
                like, to see what offers are available to you. It will only take
                a minute and won’t impact your credit score. Already a customer?
                Be sure to sign in when you check for offers to see what’s
                already waiting for you.
              </p>
              <div className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                <h2 className="font-bold">Selecting a credit card</h2>
                Choosing a credit card can be overwhelming. We’ve compiled some
                important considerations to help you pick the best credit card
                for you.
              </div>
              <div className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                <h2 className="font-bold">Managing your credit card</h2>
                Get the most out of your credit card. Find out how you can take
                advantage of all the opportunities that may be available to you
                as a cardholder.
              </div>
              <div className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                <h2 className="font-bold">Paying down your debt</h2>
                By following a few simple steps, you can help ensure you’re
                headed in the right direction when it comes to managing your
                credit card debt.
              </div>
              <div className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                <h2 className="font-bold">Improving your credit</h2>
                Better credit habits can lead to a better credit score. If
                you’re looking to improve your credit, check out some of our
                helpful tips.
              </div>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <img
              src={servicesImg3}
              alt=""
              className="w-full h-full object-cover shadow-custom rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCard;
