import React from 'react'

function CatogeryList({list}) {
  return (
    <div className="py-3">
    <h1 className="text-lg font-semibold">What&apos;s on your mind?</h1>
    <ul className="flex gap-3 overflow-scroll pt-2 transition-all">
      {list.map((item, i) => (
        <li className="block hover:scale-95 transition-all" key={i}>
          <img
            className="min-w-20 mix-blend-multiply rounded-lg"
            src={item.image}
            alt=""
          />
        </li>
      ))}
    </ul>
  </div>
  )
}

export default CatogeryList
