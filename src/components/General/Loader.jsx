import { ImSpinner10 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <ImSpinner10 className="animate-spin text-4xl text-primary" />
      <p className="lg:text-xl text-primary">Loading...</p>
    </div>
  );
};

export default Loader;
