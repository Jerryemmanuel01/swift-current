import LoanForm from "../../../components/Dashboard/LoanForm";

const Loan = () => {
  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        Loan
      </h2>

      <div className="mt-6 ">
        <LoanForm />
      </div>
    </section>
  );
};

export default Loan;
