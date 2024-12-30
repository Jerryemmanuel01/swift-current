import { Link } from "react-router-dom";
import pagesHeroImg from "../../assets/Images/pagesHeroImg.jpg";
import { ChevronRight } from "lucide-react";
const PagesHero = ({ page }) => {
  return (
    <div
      className=" bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${pagesHeroImg})` }}
    >
      <div className="bg-black/50 w-full h-[250px]">
        <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center items-center px-6">
          <h2 className="text-white font-poppins xl:text-5xl lg:text-4xl md:text-3xl text-[28px] font-bold">
            {page}
          </h2>
          <div className="mt-2 flex gap-1 text-sm lg:text-base ">
            <Link
              to="/home"
              className="text-white hover:text-yellow duration-300"
            >
              Home
            </Link>
            <ChevronRight color="white" className="w-4 lg:w-5" />
            <p className="text-yellow">{page}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesHero;
