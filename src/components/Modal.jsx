const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
      <img src={imageUrl} alt="fullsize" className="max-h-full max-w-full" />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-lg bg-blue-400 hover:bg-blue-700 rounded-full px-4 py-2 shadow-lg focus:outline-none transition-colors duration-300"
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
