import { ChevronLeft } from 'lucide-react';
import React, { useState } from 'react'
import { ImSpinner5 } from 'react-icons/im';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { swiftRate } from '../../../../lib/utils';
import Modal from '../../../../components/General/Modal';
import TransferFeeForm from '../../../../components/Dashboard/Transfers/TransferFeeForm';
import BlockchainFeeForm from "../../../../components/Dashboard/Transfers/BlockchainFeeForm";

const BlockchainFee = () => {
      const navigate = useNavigate();
      const [showModal, setShowModal] = useState(false);
      const [searchParams] = useSearchParams();
      const amount = searchParams.get("id");

      const rate = swiftRate(amount);
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
        <h2 className="font-merriweather font-semibold text-dark text-base lg:text-lg">
          Blockchain Gas Fee Payment
        </h2>
        <p className="mt-2 tracking-wide leading-6">
          To complete your crypto withdrawal, a gas fee of 2 ETH is required to
          process the transaction on the blockchain network. This fee is
          necessary to cover network transaction costs and ensure timely
          processing. feel free to reach out to our support team.{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+2349064471553?text=Greetings, I need assistance."
            className="text-blue-800 underline "
          >
            Contact Support
          </a>
        </p>
        <div className="flex justify-between gap-2 items-center py-2 my-2 mt-4 border-b border-borderColor">
          <h3 className="w-full">Gas Fee</h3>
          <h4 className="w-full">2 ETH</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Transfer Amount</h3>
          <h4 className="w-full">{Number(amount).toLocaleString()}</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Blockchain Network</h3>
          <h4 className="w-full">USDT (ERC20)</h4>
        </div>
        <div className="flex justify-between gap-2 items-center py-2 my-2 border-b border-borderColor">
          <h3 className="w-full">Recipient Wallet</h3>
          <h4 className="w-full">0xhfsjsua82h3hj4hhaxxix9xu</h4>
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
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Blockchain Gas Fee Payment"
        >
          <BlockchainFeeForm fee={"2 ETH"} />
        </Modal>
      </div>
    </section>
  );
}

export default BlockchainFee