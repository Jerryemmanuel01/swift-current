import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import EditPinForm from "../../../components/Dashboard/EditPinForm";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const ManagePin = () => {
  const [togglePin, setTogglePin] = useState(true);
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const userInfo = user?.userInfo;

  return (
    <div className={`px-6 ${userInfo?.role !== "User" ? "-mt-6 py-6" : ""} `}>
      <button
        name="action"
        onClick={() => navigate(-1)}
        className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
      >
        <ChevronLeft className="w-[18px] md:w-5" />
        Back
      </button>
      <div
        className={`flex items-center justify-between text-darker px-6 py-3 mt-4 md:mt-6 border-x border-borderColor bg-borderColor/30 md:text-lg font-inter tracking-wide font-medium ${
          togglePin ? "rounded-t-md  border-t" : "rounded-md  border"
        }`}
      >
        <span className="">Manage pin & password</span>
        <button
          name="action"
          className="outline-none"
          onClick={() => setTogglePin((prev) => !prev)}
        >
          {togglePin ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <div
        className={`overflow-hidden duration-500 transition-all mt- px-6 md:py-6 border-x border-b border-borderColor shadow-custo rounded-b-lg ${
          togglePin ? "opacity-100 py-4" : "opacity-0 h-0"
        }`}
      >
        <EditPinForm />
      </div>
    </div>
  );
};

export default ManagePin;
