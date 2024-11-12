import React from 'react'
import { BiSort } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'

function SearchBox() {
  return (
    <div className="grid gap-2 items-center grid-cols-[1fr,max-content] py-1">
    <div className="flex items-center gap-2 bg-white py-1 px-3 border rounded-3xl">
      <FiSearch className="text-xl md:text-2xl" />
      <input
        className="placeholder:text-slate-700 outline-none p-1 md:p-2 text-sm w-full"
        type="text"
        placeholder="Search for food"
      />
    </div>
    <div className="bg-blue-800 rounded-full w-8 h-8 p-1.5 md:w-10 md:h-10  grid justify-center items-center transition-all hover:bg-green-600">
      <BiSort className="text-xl md:text-2xl text-white transition-all hover:scale-90" />
    </div>
  </div>
  )
}

export default SearchBox
