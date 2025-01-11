import { FaWhatsapp } from "react-icons/fa6";

const WhatsappContact = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/+2349064471553?text=Greetings, I need assistance."
      className="md:w-12 md:h-12 w-10 h-10 rounded-full fixed z-10 bottom-6 left-6 bg-[#4cc641] flex items-center justify-center text-white md:text-3xl text-2xl"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappContact;
