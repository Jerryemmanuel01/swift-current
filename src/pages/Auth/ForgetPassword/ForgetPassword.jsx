import { ChevronLeft } from "lucide-react";
import HomeAboutBg from "../../../assets/Images/service5.jpg";
import { useNavigate } from "react-router-dom";
import ForgetPasswordForm from "../../../components/auth/ForgetPasswordForm";
import Copyright from "../../../components/auth/Copyright";

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
        <div className="w-full sm:w-[500px] mx-auto">
          <button
            onClick={() => navigate(-1)}
            className=" flex items-center gap-1 outline-none text-darker hover:text-primary duration-300"
          >
            <ChevronLeft className="w-5 md:w-6" />
            <span className="md:text-lg">Back</span>
          </button>
          <div className="w-full border border-[#D0D5DD] shadow-custom rounded-xl mt-5">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-t-xl"
              style={{ backgroundImage: `url(${HomeAboutBg})` }}
            >
              <div className="bg-primary/95 flex flex-col justify-center items-center text-white p-6 rounded-t-xl">
                <h2 className="font-poppins text-2xl font-bold mt-2">
                  Forgot your Password?
                </h2>
                <p className="text-sm tracking-wide mt-2">
                  Reset Your login credentials
                </p>
              </div>
            </div>
            <ForgetPasswordForm />
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
};

export default ForgetPassword;
