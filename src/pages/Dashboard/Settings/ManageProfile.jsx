import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import { useState } from "react";
import EditProfileForm from "../../../components/Dashboard/EditProfileForm";
import { useNavigate } from "react-router-dom";

const ManageProfile = () => {
  const [toggleProfile, setToggleProfile] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden mt-8 px-6">
      <button onClick={()=>navigate(-1)} className="outline-hidden flex items-center gap-1.5 text-sm md:text-base">
        <ChevronLeft className="w-[18px] md:w-5" />
        Back
      </button>
      <div
        className={`flex items-center justify-between text-darker mt-4 md:mt-6 px-6 py-3 border-x border-borderColor bg-borderColor/30 md:text-lg font-inter tracking-wide font-medium ${
          toggleProfile ? "rounded-t-md  border-t" : "rounded-md  border"
        }`}
      >
        <span className="">Manage Profile</span>
        <button
          className="outline-none"
          onClick={() => setToggleProfile((prev) => !prev)}
        >
          {toggleProfile ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <div
        className={`overflow-hidden duration-500 transition-all mt- px-6 border-x border-b border-borderColor shadow-custo rounded-b-lg ${
          toggleProfile ? "opacity-100 py-4 md:py-6" : "opacity-0 h-0"
        }`}
      >
        <EditProfileForm />
      </div>
    </div>
  );
};

export default ManageProfile;
