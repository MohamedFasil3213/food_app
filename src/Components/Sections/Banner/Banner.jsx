import React from 'react'
import {motion} from "framer-motion"
import useFarmerMotion from '../../../Hooks/useFarmerMotion'
function Banner({image}) {
    const {topSideVariants}=useFarmerMotion()
  return (
    <div className="py-3 md:py-5">
    <motion.img
      variants={topSideVariants}
      initial="initial"
      animate="animate"
      className="rounded-xl w-full lg:rounded-3xl"
      src={image}
      alt=""
    />
  </div>
  )
}

export default Banner
