const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="h-full w-full fixed flex items-center justify-center top-0 left-0 z-50">
      <div
        onClick={onClose}
        className="bg-black opacity-60 fixed top-0 w-full bottom-0 cursor-pointer"
      ></div>
      <div className="border border-borderColor rounded-lg bg-white p-6 shadow-lg relative w-[80%] md:max-w-[670px] lg:max-w-[770px] ">
        <button
          onClick={onClose}
          className="text-3xl absolute top-2 right-4 outline-none"
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
