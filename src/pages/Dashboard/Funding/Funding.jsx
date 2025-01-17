import FundingForm from "../../../components/Dashboard/FundingForm";

const Funding = () => {
  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        Deposit Funds
      </h2>

      <div className="mt-6 p-6 border border-borderColor rounded-lg shadow">
        <FundingForm />
      </div>
    </section>
  );
}

export default Funding