import React from "react";

const DashboardFetchError = ({ setRetry }) => {
  return (
    <div className="w-full h-screen text-center flex items-center justify-center flex-col gap-3 ">
      <p className="text-xl font-semibold font-merriweather">
        Error fetching your details
      </p>
      <button
        onClick={() => setRetry((prevState) => !prevState)}
        className="bg-primary py-2 px-4 rounded-md text-sm text-white"
      >
        Retry
      </button>
    </div>
  );
};

export default DashboardFetchError;
