import React from "react";

const DashboardFetchError = ({
  setRetry,
  title = "Error fetching your details",
}) => {
  return (
    <div className="w-full h-screen text-center flex items-center justify-center flex-col gap-3 ">
      <p className="text-xl font-semibold font-merriweather">
        {title}
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
