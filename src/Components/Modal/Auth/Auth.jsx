import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./Login";
import Register from "./Register";
import ModalLayout from "../../Layout/ModalLayout";

const Auth = ({ isOpen, onClose }) => {
  const [existingUser, setExistingUser] = useState(true);

  const setUserExist = (data) => {
    setExistingUser(data);
  };

  if (!isOpen) return null;

  return (
    <ModalLayout>
      <AnimatePresence mode="wait">
        {existingUser ? (
          <motion.div
            key="login"
            initial={existingUser?{ x: 70, opacity: 0 }:{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={existingUser?{ x: 70, opacity: 0 }:{ x: -70, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Login setUserExist={setUserExist} onClose={onClose} />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={existingUser?{ x: 70, opacity: 0 }:{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={existingUser?{ x: 70, opacity: 0 }:{ x: -70, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Register setUserExist={setUserExist} onClose={onClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </ModalLayout>
  );
};

export default Auth;
