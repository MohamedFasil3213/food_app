import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoChevronDown, IoLocationSharp } from "react-icons/io5";
import useFarmerMotion from "../../../Hooks/useFarmerMotion";
import Auth from "../../Modal/Auth/Auth";
import { useNavigate } from "react-router-dom";
import LocationSet from "../../Modal/Location/Map";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate()
  const {place,pincode}=useSelector(state=>state.user)
  const auth=useSelector(state=>state.auth)
  const [name,setName] = useState('')
  const {
    TextAnimateVariants,
    scaleAnimateVariant,
  } = useFarmerMotion();

  const [isMapModal, setMapModal] = useState(false);

  useEffect(() => {
    if (auth.isAuth && auth.userInfo) {
      setName(auth.userInfo.name)
      }
  },[auth])

  return (
    <>
      {" "}
      <LocationSet
        isOpen={isMapModal}
        onClose={() => {
          setMapModal(false);
        }}
      />
      <div className="flex items-center gap-3 p-3">
        {/* <img
     className="w-8"
     src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
     alt=""
   /> */}
        <div className="flex items-center gap-3">
          <div>
            <IoLocationSharp className="text-4xl text-green-800" />
          </div>
          <div>
            <div className="flex items-center gap-1 ">
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
          <div className="grid">
            <div className="text-xs ml-auto text-slate-500 flex gap-2">
              {`Hi,${name}`.split(" ").map((el, i) => (
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={TextAnimateVariants(i)}
                  key={i}
                >
                  {el}
                </motion.span>
              ))}
              <motion.img
                variants={scaleAnimateVariant}
                initial="initial"
                animate="animate"
                className="w-4"
                src="https://em-content.zobj.net/source/whatsapp/396/waving-hand_1f44b.png"
                alt=""
              />
            </div>

            {/* <div className="text-sm">What do you want to eat?</div> */}
          </div>
          <img
            className="w-8 ml-4"
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            alt=""
            onClick={() => {
              navigate('/settings')
            }}
          />

          {/* <IoNotificationsOutline className="text-2xl ml-auto hover:scale-95" /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
