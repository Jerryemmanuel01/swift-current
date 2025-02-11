import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { ImSpinner5 } from "react-icons/im";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Modal from "../../../../components/General/Modal";
import TransferFeeForm from "../../../../components/Dashboard/Transfers/TransferFeeForm";
import { swiftRate } from "../../../../lib/utils";
import { useSelector } from "react-redux";

const TransferFee = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("id")

  const rate = swiftRate(amount);

//   const { user } = useSelector((state) => state.userInfo);
//   const transactions = user.transactions;

//   const transaction = transactions.find((obj) => obj.id === id);

  return (
    <section className="mt-8 px-6 w-full md:max-w-[670px] lg:max-w-[770px] xl:max-w-[900px] mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="outline-hidden flex items-center gap-1.5 text-sm"
      >
        <ChevronLeft className="w-[18px] " />
        Back
      </button>

      <div className="shadow-custom1 p-4 text-sm bg-borderColor/30 mt-4">
        <h2 className="font-poppins font-semibold text-dark text-base lg:text-lg">
          Swift Fee Payment
        </h2>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Bank Rate</h3>
          <h4 className="w-full">1.0%</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Transfer Amount</h3>
          <h4 className="w-full">{amount.toLocaleString()}</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Wire Fee</h3>
          <h4 className="w-full">0%</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Swift Fee Rate</h3>
          <h4 className="w-full">3.5%</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Swift Fee</h3>
          <h4 className="w-full">${rate.toLocaleString()} (3.5%)</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Date</h3>
          <h4 className="w-full">Feb 13th, 13:05</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Transaction Status</h3>
          <h4 className="w-full flex items-center gap-2">
            Pending... <ImSpinner5 className="animate-spin" />
          </h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2">
          <h3 className="w-full">Procced to Payment</h3>
          <h4 className="w-full flex items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary rounded-2xl px-6 py-1.5 text-white font-bold"
            >
              Proceed
            </button>
          </h4>
        </div>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <TransferFeeForm rate={rate} />
        </Modal>
      </div>
    </section>
  );
};

export default TransferFee;
