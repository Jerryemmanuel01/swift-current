import { ChevronLeft } from "lucide-react";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";
import TransferFeeForm from "../../../../components/Dashboard/Transfers/TransferFeeForm";
import Modal from "../../../../components/General/Modal";
import { useState } from "react";
import UpgradeFeeForm from "../../../../components/Dashboard/Transfers/UpgradeFeeForm";

const UpgradeFee = () => {
      const [showModal, setShowModal] = useState(false);
    
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const userInfo = user.userInfo;
  return (
    <section className="mt-8 px-6 w-full md:max-w-[670px] lg:max-w-[770px] xl:max-w-[900px] mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="outline-hidden flex items-center gap-1.5 text-sm"
      >
        <ChevronLeft className="w-[18px] " />
        Back
      </button>
      <div className="shadow-custom1 px-4 py-6 text-sm bg-borderColor/30 mt-4">
        <div className="flex items-center gap-2 text-base text-primary font-merriweather">
          <IoWarningOutline className="text-xl" />
          <h2 className="font-semibold">
            Unable to Complete Your Transfer <br />
          </h2>
        </div>
        <p className="text-red-600 text-[13px] mt-1 font-inter font-medium italic">
          Account Tier Upgrade Required
        </p>
        <div className="mt-3">
          <h2 className="font-inter font-medium">Dear {userInfo.firstName},</h2>
          <div className="leading-6 mt-2 tracking-wide">
            <p className="">
              We regret to inform you that we are unable to process your recent
              transaction due to the limitations of your current account tier.
              To access higher transaction limits and enhanced banking features,
              an upgrade to the next account tier is required.
            </p>
            <p>
              To qualify for this upgrade, a minimum deposit of $40,000 is
              needed.
            </p>
            <p className="">
              We would like to clarify that the deposit required for your
              account upgrade will remain in your balance, and you will have
              full control over your funds.
            </p>
            <p className="">
              This deposit serves as a standard verification measure to ensure
              compliance and confirm the legitimacy of the funds. Once the
              deposit is made, your account will be reviewed and upgraded
              accordingly. If you have any questions or need further assistance,
              please feel free to contact our support team.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+2349064471553?text=Greetings, I need assistance."
                className="text-blue-800 underline "
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-primary rounded-lg px-6 md:px-8 py-2 text-white font-semibold tracking-wide"
        >
          Upgrade
        </button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Account Upgrade Payment">
          <UpgradeFeeForm  />
        </Modal>
      </div>
    </section>
  );
};

export default UpgradeFee;
