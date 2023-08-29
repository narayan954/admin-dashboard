import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const {handleClick,currentColor}=useStateContext();

  return (
    <div className="bg-transparent/60  w-screen fixed nav-item top-0 right-0" >
      <div className="float-right h-screen dark:text-gray-200 bg-gray-100 dark:bg-zinc-800 w-96 " >
        <div className="flex justify-between items-center p-4 ml-4" >
          <p className="font-semibold text-xl" >Shopping Cart</p>
            <button type="button" onClick={()=>handleClick('cart')} style={{color:'rgb(153,171,180',borderRadius:'50%'}} className="text-xl p-2 m-2 hover:drop-shadow-xl hover:bg-zinc-200 " > <MdOutlineCancel /> </button>
        </div>
        <div>
          {cartData.map((item,index)=>(
            <div key={index} >
              <div className="flex items-center pb-6 my-6 mx-6 border-b-2 dark:border-gray-600 " >
                <div>
                  <img className="rounded-lg w-24 h-18" src={item.image} alt="image" />
                </div>
                <div className="flex flex-col ml-4 " >
                  <p className="font-bold capitalize " >{item.name}</p>
                  <p className="font-semibold text-sm text-gray-600 dark:text-gray-400" >{item.category}</p>
                  <div className="flex">
                    <p className="mt-5 font-semibold" >{item.price}</p>
                    <div className="flex items-center border-2 border-r-0 border-color dark:border-gray-600  rounded ml-4 mt-2 ">
                      <p className="p-2 border-r-2 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-r-2 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-r-2 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-3 mx-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
          
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart