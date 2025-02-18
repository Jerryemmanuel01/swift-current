import { useOutletContext } from "react-router-dom";
import TokenImg from "../../../assets/Images/swift-token.png";
import TokenForm from "../../../components/Dashboard/TokenForm";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Token = () => {
  const [copied, setCopied] = useState(false);

  const { user } = useOutletContext();
  const userInfo = user.userInfo;
  const token = userInfo.otp;
  const isTokenValid = (str) => str.trim() !== "" && !isNaN(str);

  const handleCopy = (id) => {
    if (id) {
      navigator.clipboard
        .writeText(id)
        .then(() => {
          setCopied(true);
          toast.success("Copied");
          setTimeout(() => {
            setCopied(false);
          }, 2000); // Reset after 2 seconds
        })
        .catch((error) => {
          toast.error("Failed to copy text: ", error);
        });
      return;
    }
    toast.error("Failed to copy text");
  };

  return (
    <section className="px-6 mb-8 w-full md:max-w-[600px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        Token
      </h2>
      {token === "Inactive token" ? (
        <div className="">
          <div className="mt-4">
            <img src={TokenImg} alt="token" className="" loading="lazy" />
          </div>
          <div className="mt-4">
            <h3 className="font-merriweather font-bold text-center text-primary">
              Purchase Token
            </h3>
            <TokenForm />
          </div>
        </div>
      ) : token === "Pending" ? (
        <div className="mt-6 p-6 border border-gray/20 bg-lighter/10 shadow-custom1 rounded-lg text-sm md:text-base md:leading-7 leading-6 text-textGray">
          <h2 className="font-merriweather font-semibold text-lg text-darker">
            Processing Token...
          </h2>
          <p className="mt-2">
            We kindly request your patience as we process your token request.
            Our team is diligently working to review and verify the information
            provided. We understand the importance of this request and assure
            you that we are working as swiftly as possible to finalize the
            process. Once the necessary checks and promptly provide you with
            confirmation regarding your token application. We appreciate your
            understanding and cooperation throughout this process.
          </p>
        </div>
      ) : isTokenValid(token) ? (
        <div className="mt-3">
          <p className="font-semibold font-inter text-gray">
            Dear {userInfo.firstName},
          </p>
          <p className="text-textGray text-sm leading-6 tracking-wide mt-2">
            We are pleased to inform you that your payment for the token
            purchase has been successfully processed and confirmed. The
            transaction has been completed, and the tokens have been sent to
            your email. You can also copy the token digit below.
          </p>
          <div className="flex items-center gap-2 text-darker mt-3 text-sm">
            <h2>Token: {token}</h2>
            <button
              onClick={() => handleCopy(token)}
              type="button"
              className="flex items-center justify-center"
            >
              {copied ? (
                <Check className="w-3.5 " />
              ) : (
                <Copy className="w-3.5 " />
              )}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Token;
