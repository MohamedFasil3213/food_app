import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router-dom'

function RestaurentList({list}) {
  return (
    <div className="py-3 pb-14">
    <h1 className="font-semibold text-lg flex items-center gap-1">
      <FaLocationDot className="text-blue-800" />
      All Restaurants Nearby
    </h1>
    <p className="text-xs text-slate-500">
      Discover unique tastes near you
    </p>
    <ul className="py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
      {list?.map((item, i) => (
        <li key={i}>
          <Link
            to={"/restaurant/123"}
            className="grid gap-1 grid-cols-4 items-center bg-white rounded-2xl shadow-md hover:scale-95 transition-all"
          >
            <img
              className="col-span-1 aspect-square object-cover rounded-2xl p-2"
              src={item.image}
              alt=""
            />
            <div className="p-2 col-span-3">
              <h1 className="text-sm font-semibold">{item.name}</h1>
              <p className="text-xs font-medium text-slate-500 flex items-center gap-1 justify-between">
                <span className="flex items-center gap-0.5">
                  <MdOutlineStar className="text-xs" /> {item.rating}{" "}
                </span>
                <span>35-40 mins</span>
              </p>
              <p className="text-xs font-light text-slate-400">
                {item.place}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <div className="pt-3">
      <button className="bg-blue-800 text-white font-medium p-3 w-full rounded-lg transition-all hover:bg-blue-600">
        See all restaurants
      </button>
    </div>
  </div>
  )
}

export default RestaurentList
