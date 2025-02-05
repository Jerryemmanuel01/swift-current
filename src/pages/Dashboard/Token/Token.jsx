import TokenImg from "../../../assets/Images/swift-token.png";
import TokenForm from "../../../components/Dashboard/TokenForm";

const Token = () => {
  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        Token
      </h2>
      <div className="mt-4">
        <img src={TokenImg} alt="token" className="" loading="lazy" />
      </div>
      <div className="mt-4">
        <h3 className="font-merriweather font-bold text-center text-primary">
          Purchase Token
        </h3>
        <TokenForm />
      </div>
    </section>
  );
};

export default Token;
