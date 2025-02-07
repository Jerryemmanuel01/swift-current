import TokenImg from "../../../assets/Images/swift-token.png";
import TokenForm from "../../../components/Dashboard/TokenForm";

const Token = () => {
  return (
    <section className="px-6 mb-8 w-full md:max-w-[600px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        Token
      </h2>

      {/* <div className="mt-6 p-6 border border-gray/20 bg-lighter/10 shadow-custom1 rounded-lg text-sm md:text-base md:leading-7 leading-6 text-textGray">
        <h2 className="font-merriweather font-semibold text-lg text-darker">
          Processing Token...
        </h2>
        <p className="mt-2">
          We kindly request your patience as we process your token request. Our
          team is diligently working to review and verify the information
          provided. We understand the importance of this request and assure you
          that we are working as swiftly as possible to finalize the process.
          Once the necessary checks and promptly provide you with confirmation
          regarding your token application. We appreciate your understanding and
          cooperation throughout this process.
        </p>
      </div> */}
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
    </section>
  );
};

export default Token;
