
import React, { useEffect } from 'react';

import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart,Chat,Notification,UserProfile} from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton=({title,customFnc,icon,color,dotColor})=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button onClick={customFnc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"></span>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize, setScreenSize,currentColor}=useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if(screenSize<=900)
      setActiveMenu(false);
    else
    setActiveMenu(true);
  }, [screenSize])
  
  


  

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFnc={()=>setActiveMenu(prevActiveMenu=>!prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu/>} />

      <div className="flex">

        <NavButton title="Cart" customFnc={()=>handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>} />

        <NavButton title="Chat" dotColor="#03C9D7" customFnc={()=>handleClick('chat')} color={currentColor} icon={<BsChatLeft/>} />

        <NavButton title="Notification"  dotColor="#e6b410" customFnc={()=>handleClick('notification')} color={currentColor} icon={<RiNotification3Line/>} />

        <TooltipComponent content="Profile" position="BottomCenter" >
          <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl" onClick={()=> handleClick("userProfile")} >
            <img src={avatar} className="rounded-full w-8 h-8" ></img>
            <p>
              <span className="text-gray-400 text-sm " >Hi, &nbsp;</span>
              <span className="text-gray-400 text-sm  ml-1 font-bold">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-sm" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar