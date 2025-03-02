import { Link } from "react-router-dom";
import HomeAboutBg from "../../../assets/Images/service5.webp";
import Copyright from "../../../components/auth/Copyright";
const SignupSuccess = () => {
  return (
    <section className="w-full">
      <div className="w-full min-h-screen px-6 py-10 lg:py-14 flex flex-col items-center justify-center">
        <div className="w-full sm:w-[500px] mx-auto">
          <div className="w-full border border-[#D0D5DD] shadow-custom rounded-xl mt-5">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-t-xl"
              style={{ backgroundImage: `url(${HomeAboutBg})` }}
            >
              <div className="bg-primary/95 flex flex-col justify-center items-center text-white p-6 rounded-t-xl">
                <h2 className="font-poppins text-2xl font-bold mt-2">
                  Sign Up
                </h2>
                <p className="text-sm tracking-wide mt-2">
                  Create your bank account
                </p>
              </div>
            </div>
            <div className="py-6 px-8">
              <div className="bg-[#f4f4f4] border border-[#D0D5DD] rounded-lg p-6">
                <h2 className="font-bold text-2xl text-gray text-center">
                  Welcome To Our Program: <br />
                  Unlocking a World of Banking Opportunities
                </h2>
                <div className="mt-3 text-sm text-gray text-center tracking-wide leading-6">
                  <p className="">
                    We sincerely appreciate your decision To join our program.
                    Congratulations! You have officially become a valued member
                    Of our program. As a member, you now have access To a wide
                    range Of banking services And benefits. We invite you To log
                    In To your account And explore the various services
                    available exclusively To our members. Whether it's managing
                    your finances, conducting transactions, or taking advantage
                    of our specialized offerings, we're here to provide you with
                    exceptional banking experiences.
                  </p>
                  <p className="mt-3">
                    Thank you once again for choosing to be a part of our
                    program. We look forward to serving you and meeting all your
                    financial needs.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs font-poppins text-center">
                <span className="font-semibold">Important: </span>
                <span className="text-gray">
                  Do not provide your login details to anyone!
                </span>
              </p>

              <div className="text-center my-3">
                <Link
                  to="/auth/login"
                  className="text-primary text-sm text-center font-merriweather font-semibold w-full"
                >
                  Click here to login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
};

export default SignupSuccess;
