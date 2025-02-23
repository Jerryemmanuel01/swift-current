import { ChevronLeft } from "lucide-react";
import HeaderName from "../../../components/Dashboard/HeaderName";
import FundsManagementForm from "../../../components/admin/FundsManagementForm";
import { useNavigate } from "react-router-dom";

const FundUser = () => 
  {
  const navigate = useNavigate()
  return (
    <section className="w-full px-6 -mt-6 py-6 md:max-w-[670px] lg:max-w-[900px] mx-auto">
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={() => navigate(-1)}
          className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
        >
          <ChevronLeft className="w-5 md:w-6" />
        </button>
        <HeaderName title={"Funds Management"} />
      </div>
      <FundsManagementForm />
    </section>
  );
}

export default FundUser