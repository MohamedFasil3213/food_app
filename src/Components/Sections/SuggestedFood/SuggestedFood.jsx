import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import useFarmerMotion from '../../../Hooks/useFarmerMotion'

function SuggestedFood({list}) {

    const {gridAnimateVariants,itemAnimateVariants}=useFarmerMotion()

  return (
    <div className="py-3">
    <div className="flex justify-between items-center pb-2">
      <h1 className="text-lg font-semibold">Popular Food</h1>
      <span className="text-slate-700 text-xs">See All</span>
    </div>
    <motion.div
      variants={gridAnimateVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-5 py-2"
    >
      {list.map((item, i) => (
        <motion.div variants={itemAnimateVariants} key={i}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-95 transition-all">
            <Link to={"/popular-food/123"}>
              <img
                className="rounded-t-2xl object-cover aspect-square "
                src={item.image}
                alt=""
              />
              <div className="p-3">
                <h5 className="mb-2 text-sm font-semibold tracking-tight text-nowrap">
                  {item.name}
                </h5>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    ${item.price}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <FaStar className="text-yellow-300 text-lg" />
                    {item.rating}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
  )
}

export default SuggestedFood
