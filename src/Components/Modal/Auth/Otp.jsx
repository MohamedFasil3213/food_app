// src/LoginModal.js
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import useFarmerMotion from "../../../Hooks/useFarmerMotion";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setOtpSend,setRegisterData,registerUser,loginUser } from "../../../Redux/Authentication/Action";
const Otp = ({ onClose, login, register,userData }) => {
  const dispatch = useDispatch();
  const { slidetoLeft } = useFarmerMotion();
  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = e.target.parentElement.parentElement.firstChild.lastChild.value
    // dispatch(verifyOtp(otp));
    if (register) {
      dispatch(registerUser(userData,otp))
      dispatch(setRegisterData(userData));
      console.log("from register");
    }
    if (login) {
      dispatch(loginUser(userData,otp))
      console.log("from login");
    }
  };
  return (
    <motion.div variants={slidetoLeft} initial="initial" animate="animate">
      <div className="relative">
        <button
          className="ml-auto absolute top-0 left-0 text-xl p-1 rounded-md mb-8 text-white bg-green-800"
          onClick={() => {
            dispatch(setOtpSend(false));
          }}
        >
          <FiArrowLeft className="" />
        </button>
        <h2 className="text-2xl font-semibold text-indigo-950 border-b-2 border-green-800 pb-3 w-full mb-4 text-center">
          Phone Verification
        </h2>
        <button
          className="ml-auto absolute top-0 right-0 text-xl p-1  rounded-md mb-8 bg-red-700 text-white  "
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
      </div>{" "}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 py-5">
          <label htmlFor="mobile" className="block font-medium text-grey-700">
            OTP
          </label>
          <input
            type="number"
            id="otp"
            placeholder="Enter otp send to your mobile"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={handleSubmit}
          >
            Verify
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Otp;
