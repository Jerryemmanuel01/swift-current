import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl tracking-wider font-merriweather font-black text-primary">
        Ooops!
      </h1>
      <h1 className="text-3xl tracking-wider font-poppins font-bold text-dark mt-2">
        404 Error
      </h1>
      <p className="text-gray-600">Page not found</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 rounded bg-primary/90 px-4 py-2 text-white"
      >
        Go Back 
      </button>
    </div>
  );
};

export default ErrorPage;
