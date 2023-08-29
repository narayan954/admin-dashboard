import React from 'react'

const Header = ({category,title}) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 dark:text-slate-400" >
        {category}
      </p>
      <p className="font-extrabold tracking-tight text-slate-900 dark:text-gray-100 text-3xl " >
        {title}
      </p>
    </div>
  )
}

export default Header