import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useDashboardContext } from "./context/DashboardContext";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

export default function App() {
  const { activeMenu } = useDashboardContext()
  return (
    <>
      <BrowserRouter>
        <div className='flex relative bg-white'>
          {activeMenu ? (
            <div className="w-64 fixed bg-white shadow-xl border-r border-gray-200 z-50">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div className={`min-h-screen w-full ${activeMenu ? 'lg:ml-64' : 'flex-2'}`}>
            <div className="fixed md:static z-40 bg-white w-full border">
              <Navbar />
            </div>
            <div className='mt-14 md:mt-2 lg:px-0 md:px-6 px-2'>
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