
import { IoIosArrowForward } from "react-icons/io";
import { PiSpinner } from "react-icons/pi";
import { Link } from "react-router-dom";

const DashboardCard = ({
  bg,
  title,
  Icon,
  disc,
  value,
  tooltip,
  to,
  isLoading,
}) => {
  return (
    <div className={`w-full min-h-40 p-6 rounded-lg ${bg} text-white`}>
      <div className="border border-borderColor w-8 h-8 rounded-md flex items-center justify-center">
        <Icon />
      </div>

      <h2 className="mt-3 font-inter text-lg font-medium" title={tooltip}>
        {title}
      </h2>
      <div className="mt-2 flex items-center justify-between gap-2">
        <h2 className="font-inter font-bold text-2xl tracking-wider">
          {isLoading ? <PiSpinner className="animate-spin" /> : value}
        </h2>
        <Link to={to} className="text-xs flex gap-2 items-center">
          {disc} <IoIosArrowForward className="mt-[1px]" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
