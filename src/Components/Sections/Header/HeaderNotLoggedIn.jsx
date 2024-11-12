import { IoLocationSharp, IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import Auth from "../../Modal/Auth/Auth";
import LocationSet from "../../Modal/Location/Map";
import { useSelector } from "react-redux";
import { useState } from "react";

const TextAnimateVariants = (i) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: i * 0.1 } },
});

const scaleAnimateVariant = {
  initial: { scale: 0.8 },
  animate: { scale: 1, transition: { duration: 0.3 } },
};

const HeaderNotLoggedIn = () => {
  const { place, pincode } = useSelector((state) => state.user);
  const [isMapModal, setMapModal] = useState(false);

  const openModal = () => setAuthModalOpen(true);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const closeModal = () => setAuthModalOpen(false);


  return (
    <>
      <Auth isOpen={isAuthModalOpen} onClose={closeModal} />
      <LocationSet
        isOpen={isMapModal}
        onClose={() => {
          setMapModal(false);
        }}
      />
      <div className="flex items-center gap-3 p-3">
        <div className="flex items-center gap-3">
          <div>
            <IoLocationSharp className="text-4xl text-blue-800" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              {place.split(" ").map((el, i) => (
                <motion.span
                  className="text-xl font-semibold"
                  initial="initial"
                  animate="animate"
                  variants={TextAnimateVariants(i)}
                  key={i}
                >
                  {el}
                </motion.span>
              ))}
              <IoChevronDown
                onClick={() => {
                  setMapModal(true);
                }}
                className="text-2xl hover:cursor-pointer"
              />
            </div>
            <div>
              {pincode.split(" ").map((el, i) => (
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={TextAnimateVariants(i)}
                  key={i}
                >
                  {el}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => {
              setAuthModalOpen(true);
            }}
          >
            Log In
          </button>
          <button
            className="bg-white text-blue-700 px-4 py-2 rounded-md ml-2 hover:bg-white-200"
            onClick={() => {
              setAuthModalOpen(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderNotLoggedIn;
