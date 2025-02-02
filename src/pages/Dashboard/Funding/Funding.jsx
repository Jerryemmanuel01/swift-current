import { useSelector } from "react-redux";
import FundingForm from "../../../components/Dashboard/FundingForm";
import Loader from "../../../components/General/Loader"

const Funding = () => {
  const { isLoading } = useSelector((state) => state.funding);
  if(isLoading) return <Loader />
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
};

export default Funding;
