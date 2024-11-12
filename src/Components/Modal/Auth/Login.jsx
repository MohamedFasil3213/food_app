// src/LoginModal.js
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import useFarmerMotion from "../../../Hooks/useFarmerMotion";
import { FiArrowRight } from "react-icons/fi";
import Otp from "./Otp";
import { useDispatch, useSelector } from "react-redux";
import { requestOtp } from "../../../Redux/Authentication/Action";
const Login = ({ onClose, setUserExist }) => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    contact: "",
  });
  if (auth.otpSend) {
    return <Otp login userData={contact} onClose={onClose} />;
  }

  const onChangeInput = (e) => {
    setContact((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (contact) {
      dispatch(requestOtp(contact,"islogin"));
    }
  };
  return (
    <div
    >
      <div className="relative">
        <h2 className="text-2xl font-semibold text-indigo-950 border-b-2 border-blue-800 pb-3 w-full mb-4 text-center">
          Login
        </h2>
        <button
          className="ml-auto absolute top-0 right-0 text-xl p-1  rounded-md mb-8 bg-red-700 text-white  "
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
      </div>{" "}
      <form onSubmit={handleLogin}>
        <div className="mb-4 py-5">
          <label
            htmlFor="mobile"
            className="block mb-2 font-medium text-grey-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="contact"
            onChange={onChangeInput}
            id="mobile"
            placeholder="Enter registered mobile number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex items-center justify-between">
          <div
            className=" py-2 text-blue-800 hover:text-green-700 flex justify-start items-center gap-2 cursor-pointer"
            onClick={() => {
              setUserExist(false);
            }}
          >
            <p className=" p-0 border-b border-blue-700">Register now</p>
            <FiArrowRight className=" text-2xl" />{" "}
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
