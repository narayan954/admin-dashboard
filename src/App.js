import React,{useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar,Footer,Sidebar,ThemeSettings} from './components';
import { Ecommerce, Orders, Calendar, Employee, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {

  const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode}=useStateContext();

  return (
    <div className={currentMode==="Dark"? 'dark' : 'light'} >
        <BrowserRouter>
        <div className="flex relative dark:bg-slate-900">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent content="Settings" position="Top">
              <button onClick={()=> setThemeSettings(true)} type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full" style={{background:currentColor}}>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {/* below code is written in order to check if the state active menu is true or false, if true thern display side bar else dont display anything over it, this is a nice way to manage ui */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-gray-50 dark:bg-slate-800 ">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-slate-900">
              <Sidebar/>
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-slate-900  bg-gray-50 min-h-screen md:ml-72 w-full  '
                : 'bg-gray-50 dark:bg-slate-900  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-gray-50 dark:bg-slate-900 navbar w-full ">
              <Navbar/>
            </div>
          <div>
          {themeSettings && <ThemeSettings/>}
            

            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce/>} />
              <Route path='/ecommerce' element={<Ecommerce/>} />
              {/* Pages */}
              <Route path='/orders' element={<Orders/>} />
              <Route path='/employees' element={<Employee/>} />
              <Route path='/customers' element={<Customers/>} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban/>}/>
              <Route path="/editor" element={<Editor/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/colorpicker" element={<ColorPicker/>}/>
              {/* Charts */}
              <Route path="/line" element={<Line/>}/>
              <Route path="/area" element={<Area/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/financial" element={<Financial/>}/>
              <Route path="/color-mapping" element={<ColorMapping/>}/>
              <Route path="/pyramid" element={<Pyramid/>}/>
              <Route path="/stacked" element={<Stacked/>}/>
            </Routes>
          </div>
        </div>
        
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App