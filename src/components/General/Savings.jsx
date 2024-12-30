import SavingsImg from "../../assets/Images/services-s2-grid-bg.jpg";
const Savings = () => {
  return (
    <section>
      <div className="pt-10 md:pt-16 lg:pt-24 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="lg:flex gap-6 md:gap-10">
          <div className="lg:w-[60%]">
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
                Our Savings
              </h2>
              <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
            </div>
            <div className="">
              <p className="text-[#4b4b4b] text-sm leading-6 my-6">
                It’s generally wise to have a savings account, and they’re
                mostly free—especially at online banks, community banks, and
                credit unions. Keeping cash elsewhere that you don’t plan to
                spend in the immediate future is unsafe, and using a savings
                account has a psychological benefit: It’s tempting to spend
                money in hand. A savings account, however, can be a means of
                setting aside funds to reach longer-term goals.
              </p>

              <p className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                Competitive Interest Rates The rates you'll benefit from as a
                Swift Current Corporation Personal Savings account holder beat
                the national bank average*. Interest is earned daily and posted
                to your account monthly, which means that every day your savings
                are with Amex, you're winning the saving game.
              </p>

              <p className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                Convenience Every step of saving is now simple. You can easily
                link your Swift Current Corporation Personal Savings account to
                up to 3 bank accounts, set up recurring deposits, and access
                your funds 24/7 online or by phone. All you need are your
                current routing and account numbers.
              </p>

              <p className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                Powerful Earning Take advantage of a high APY and zero fees.
                Swift Current Corporation Personal Savings Accounts don't have
                monthly balance requirements or maintenance fees. That means you
                can maximize your interest earnings and save with confidence.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] lg:mt-20 xl:mt-0">
            <img src={SavingsImg} alt="" className="w-full h-full rounded-md object-cover shadow-custom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
