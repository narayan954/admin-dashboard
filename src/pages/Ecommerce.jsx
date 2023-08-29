import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { Sparkline } from '@syncfusion/ej2-react-charts'

const Ecommerce = () => {

  const {currentColor}=useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center" >
        <div className="bg-gray-100 dark:bg-slate-800 text-gray-200 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400" >Earnings</p>
              <p className="text-2xl text-gray-800 dark:text-gray-100" >₹1,23,456</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md" ></Button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center" >
          {earningData.map((item) => (
            <div key={item.title} className="bg-gray-100 dark:bg-gray-800 sm:m-2 p-4 pt-9 pr-20 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl" >{item.icon}</button>
              <p className="mt-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-100" >
                  {item.amount}
                </span>
                <span className={`text-sm ${item.pcColor} ml-2`} >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1" >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* --------revenue */}
      <div className="flex gap-10 lg:flex-wrap justify-center" >
        <div className="bg-gray-100 dark:text-gray-200 dark:bg-slate-800 rounded-2xl m-3 p-4 md:w-10/12 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-2 border-color-gray-200 m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold" >₹55,230</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 text-white text-xs ml-3" >22%</span>
                </p>
                <p className="text-gray-500 mt-1" >
                  Budget
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold" >₹3,230</span>
                </p>
                <p className="text-gray-500 mt-1" >
                  Expense
                </p>
              </div>
              <div className="mt-5">
                  <SparkLine currentColor={currentColor} id="line-sparkline" type="Line" height="80px" width='250px' data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce