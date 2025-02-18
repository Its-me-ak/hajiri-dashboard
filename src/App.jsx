import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useDashboardContext } from "./context/DashboardContext";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

export default function App() {
  const {activeMenu} = useDashboardContext()
  return (
    <>
    <BrowserRouter>
        <div className='flex relative bg-white'>
          {activeMenu ? (
            <div className="w-64 fixed bg-white shadow-xl border-r border-gray-200 z-20">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div className={`min-h-screen w-full ${activeMenu ? 'md:ml-64' : 'flex-2'}`}>
            <div className="fixed md:static bg-white w-full">
              <Navbar />
            </div>
           <div className='mt-14 md:mt-2'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
           </div>
          </div>
      </div>
    </BrowserRouter>
    </>
  )
}