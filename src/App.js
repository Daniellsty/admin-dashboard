import './App.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import {FiSettings} from 'react-icons/fi';

import {Navbar,Footer,Sidebar,ThemeSettings} from './components'
import {Calendar,ColorPicker,Customers,Ecommerce,Editor,Employees,Kanban,Orders,Line,Area,Pie,Financial,ColorMapping,Bar , Pyramid,Stacked} from './pages'
import { useActiveMenu } from './contexts/ContextProvider';

function App() {

  
  const {activeMenu,setActiveMenu} = useActiveMenu()
  console.log(activeMenu);
  return (
    <div>
      <BrowserRouter>
       <div className='flex relative bg:main-bg dark:bg-main-dark-bg'>
       <div className='fixed right-4 bottom-4  ' style={{zIndex:'1000'}} >
       <TooltipComponent content="Settings" position='top' >
       <button style={{backgroundColor:'blue'}} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray bg-blue-800 rounded-full text-white' >
        <FiSettings onClick={()=> setActiveMenu(prev => !prev )  } />
       </button>
    </TooltipComponent>
       </div>
       {activeMenu ? 
       (
        <div className='sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg '>
          <Sidebar/>
        </div>
       ) :
       <div className=' w-0 dark:bg-secondary-dark-bg '>
            <Sidebar/>
       </div>
      }
      <div className={` dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${activeMenu ? 'md:ml-72 ' :'flex-2' }`}>
      <div className=' md:static navbar dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'>
      <Navbar/>
      </div>
      </div>

      </div>
      <Routes>
        <Route path='/' element={<Ecommerce/>} />
        <Route path='/ecommerce' element={<Ecommerce/>} />



        <Route path='/orders' element={<Orders/>} />
        <Route path='/employes' element={<Employees/>} />
        <Route path='/customers' element={<Customers/>} />

        <Route path='/kanban' element={<Kanban/>} />
        <Route path='/editor' element={<Editor/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/color-picker' element={<ColorPicker/>} />

        <Route path='/line' element={<Line/>} />
        <Route path='/area' element={<Area/>} />
        <Route path='/bar' element={<Bar/>} />
        <Route path='/pie' element={<Pie/>} />
        <Route path='/financial' element={<Financial/>} />
        <Route path='/Color-mapping' element={<ColorMapping/>} />
        <Route path='/pyramid' element={<Pyramid/>} />
        <Route path='/stacked' element={<Stacked/>} />

      </Routes>
   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
