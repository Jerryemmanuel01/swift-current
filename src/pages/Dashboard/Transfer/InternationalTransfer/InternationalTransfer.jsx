import { useSelector } from "react-redux";
import InternationalTransferForm from "../../../../components/Dashboard/Transfers/InternationalTransferForm";

const InternationalTransfer = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <section className="px-6 mb-8 w-full md:max-w-[670px] mx-auto">
      <h2 className="font-poppins font-semibold text-dark text-xl">
        International Transfer
      </h2>
      <div className="w-fit bg-textGray/10 py-3 px-4 rounded-lg mt-4">
        <p className="text-xs font-medium font-inter text-secondary">
          Account Balance:{" "}
          <span className="text-primary font-semibold">
            {user.userInfo.accountBalance.toLocaleString()}
          </span>
        </p>
      </div>

      <div className="mt-6 p-6 border border-borderColor rounded-lg shadow">
        <InternationalTransferForm />
      </div>
    </section>
  );
}

export default InternationalTransfer