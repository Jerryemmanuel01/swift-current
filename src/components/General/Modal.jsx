const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="h-full w-full fixed flex items-center justify-center top-0 left-0 z-50">
      <div
        onClick={onClose}
        className="bg-black opacity-60 fixed top-0 w-full bottom-0 cursor-pointer"
      ></div>
      <div className="border border-borderColor rounded-lg bg-white px-6 pt-4 pb-7 shadow-lg relative w-[90%] md:max-w-[670px] lg:max-w-[770px] ">
        <div className="flex items-center justify-between">
          <h2 className="text-base text-primary font-merriweather font-bold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-3xl  outline-none"
          >
            &times;
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
