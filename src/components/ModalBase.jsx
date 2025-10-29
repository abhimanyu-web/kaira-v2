import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../assets/icons/CloseIcon.jsx";

const ModalBase = ({ isOpen, onClose, children }) => {
  // Scroll lock when modal opens
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.setProperty(
        "overflow",
        "hidden",
        "important"
      );
      document.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
    }
    return () => {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50  w-[90%] max-w-6xl max-h-[80vh] bg-white  shadow-xl transform -translate-x-1/2 -translate-y-1/2 "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              <CloseIcon height={15} width={15} />
            </button>

            <div className="overflow-y-auto">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalBase;
