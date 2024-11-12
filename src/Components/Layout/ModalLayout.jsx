import React from "react";
import { motion } from "framer-motion";
import useFarmerMotion from "../../Hooks/useFarmerMotion";
function ModalLayout({children}) {

    const { ModaltopSideVariants } = useFarmerMotion();

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex max-sm:items-end xs:items-center justify-center z-50">
      <motion.div
        variants={ModaltopSideVariants}
        initial="initial"
        animate="animate"
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ModalLayout;
