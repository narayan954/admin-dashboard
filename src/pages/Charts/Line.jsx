import React from 'react'
import {Header,LineChart} from '../../components'


const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-gray-100 dark:bg-slate-800 rounded-3xl " >
      <Header category="Charts" title="Inflation Rate" />
      <div className="w-full" >
        <LineChart/>
      </div>
    </div>
  )
}

export default Line