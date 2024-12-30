import servicesImg2 from "../../assets/Images/servicesImg3.jpg";

const Loans = () => {
  return (
    <section>
      <div className="my-10 xl:my-12 px-6 w-full md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
            Loans
          </h2>
          <div className="w-8 h-1.5 bg-yellow rounded-lg mt-1" />
        </div>
        <div className="lg:flex gap-6 md:gap-10 mt-8">
          <div className="lg:w-[60%]">
            <div className="">
              <p className="text-[#4b4b4b] text-sm leading-6 mb-6">
                Interest rate for loan range from 10.99% to 24% and can vary by
                loan amount, loan tenure, credit score, your company as well as
                your past relationship with the bank. Some of the factors that
                affect the interest rate you get on your loan are as follows:
              </p>
              <ul className="text-[#4b4b4b] text-sm leading-6 my-6 ">
                <h2 className="font-bold">Selecting a credit card</h2>
                Choosing a credit card can be overwhelming. We’ve compiled some
                important considerations to help you pick the best credit card
                for you.
                <li className="list-disc ml-4 mt-4">
                  <span className="font-bold">Loan amount</span> – Higher the
                  loan amount, lower will be the rate of interest for the loan
                  as banks offer a lower interest rate on high-value quick
                  loans.
                </li>
                <li className="list-disc ml-4">
                  <span className="font-bold">Loan Tenure</span> – Interest rate
                  is higher for long tenure loans and lower for shorter tenure
                  loans.
                </li>
                <li className="list-disc ml-4">
                  <span className="font-bold">Credit Score</span> – Your credit
                  rating plays an important role in determining the interest
                  rate on the instant loan you get from the bank. Higher the
                  CIBIL score, lower will be the rate of interest. The banks
                  will not typically lend below a credit score of 750.
                </li>
                <li className="list-disc ml-4">
                  <span className="font-bold">Company You Work for</span> – Each
                  bank has a list of company categorisation with differential
                  interest rate offering to each company category. Larger and
                  reputed companies are categorised in the highest company
                  category. Higher the company category lower will be the
                  interest rate.
                </li>
                <li className="list-disc ml-4">
                  <span className="font-bold">Relationship with the Bank </span>
                  – Existing customers of the bank are usually offered a special
                  discounted rate. Do complete research on the interest rate
                  before you apply for the loan
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-[40%]  xl:-mt-20 lg:mt-0">
            <img
              src={servicesImg2}
              alt=""
              className="w-full h-full object-cover shadow-custom rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loans;
