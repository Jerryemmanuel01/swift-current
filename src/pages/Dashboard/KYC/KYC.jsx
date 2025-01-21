import KYCForm from "../../../components/Dashboard/KYCForm";

const KYC = () => {
  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl lg:text-2xl">
        KYC
      </h2>

      <div className="mt-6 py-6 px-4 border border-borderColor rounded-lg shadow">
        {/* completed KYC */}
        {/* <div cla ssName="flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold font-inter text-center text-[#303539]">
            Congratulations
          </h2>
          <p className="mt-5 text-center text-sm">
            Your KYC details have been approved.
          </p>
          <p className="text-sm text-center">Thank you for choosing us.</p>
        </div> */}
        {/* KYC Form */}
        <div className="">
          <div className="div rounded-md w-full bg-[#00458549] p-3 text-primary text-xs">
            Please submit the required KYC information to verify your identity.
            Otherwise you will not be allowed to make withdrawal request within
            the system.
          </div>
          <h2 className="my-4 text-2xl font-bold font-inter text-center text-[#303539]">
            KYC Verification
          </h2>
          <div className="md:text-[13px] text-xs leading-5 text-textGray">
            <p className="">
              <span className="text-red-600">* </span>
              Please use a valid government-issued photo ID.
            </p>
            <p className="">
              <span className="text-red-600">* </span>A residence permit is also
              an acceptable form of identification. <br/>Examples of documents we do
              not accept include:
            </p>
            <ul className="text-black mt-2">
              <li className="list-disc ml-4 mb-1.5">Birth certificate</li>
              <li className="list-disc ml-4 mb-1.5">Company ID</li>
              <li className="list-disc ml-4 mb-1.5">Credit card</li>
              <li className="list-disc ml-4 mb-1.5">International Driving Permit</li>
              <li className="list-disc ml-4 mb-1.5">Student ID</li>
              <li className="list-disc ml-4 mb-1.5">
                Visa (except for student/work visas issued by the U.S. and
                China)
              </li>
            </ul>
          </div>
          <KYCForm />
        </div>

        {/* <div cla ssName="flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold font-inter text-center text-[#303539]">
            Verificaiton Pending
          </h2>
          <p className="mt-5 text-center text-sm">
            Your KYC information is being verify.
          </p>
          <p className="text-sm text-center">Thank you for choosing us.</p>
        </div> */}
      </div>
    </section>
  );
};

export default KYC;
