// src/Register.js
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useFarmerMotion from "../../../Hooks/useFarmerMotion";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";
import { useDispatch, useSelector } from "react-redux";
import { requestOtp } from "../../../Redux/Authentication/Action";
import Login from "./Login";

const Register = ({ onClose, setUserExist }) => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { slidetoRight } = useFarmerMotion();
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
    pincode: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // getOtp(userData);
    dispatch(requestOtp(userData, "isRegister"));
    console.log(userData);
  };

  const onChangeInput = (e) => {
    setUserData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  if (auth.otpSend) {
    return <Otp register userData={userData} onClose={onClose} />;
  }
  console.log(auth)


  return (
    <div
      variants={slidetoRight}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative ">
        <h2 className="text-2xl font-semibold text-indigo-950 border-b-2 border-blue-800 pb-3 w-full mb-4 text-center">
          Register
        </h2>
        <button
          className="ml-auto absolute top-0 right-0 text-xl p-1  rounded-md mb-8 bg-red-700 text-white  "
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-4 mt-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            required
            value={userData.name}
            onChange={onChangeInput}
            placeholder="Enter your name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            required
            maxLength={10}
            value={userData.contact}
            onChange={onChangeInput}
            name="contact"
            placeholder="Enter your mobile"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-700"
          >
            Pin Code
          </label>
          <input
            type="text"
            required
            value={userData.pincode}
            onChange={onChangeInput}
            placeholder="enter your pincode"
            name="pincode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div
            className=" py-2 text-blue-800 hover:text-green-700 flex items-center justify-start gap-2 cursor-pointer"
            onClick={() => {
              setUserExist(true);
            }}
          >
            <FiArrowLeft className=" text-2xl" />
            <p className="  border-b border-blue-700">Login now</p>
          </div>

          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
