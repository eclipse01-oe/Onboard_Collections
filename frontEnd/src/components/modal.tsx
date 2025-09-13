import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import React from "react";

type ModalProps = {
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
  modalProps?: HTMLMotionProps<'div'>
};

export default function Modal({
  isOpen,
  onClose,
  children,
  modalProps,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
          <motion.div
            {...modalProps}
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {children}
          </motion.div>
      )}
    </AnimatePresence>
  );
}
