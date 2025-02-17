import './App.css'
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useDashboardContext } from "./context/DashboardContext";

export default function App() {
  const {activeMenu} = useDashboardContext()
  return (
    <>
    <BrowserRouter>
      <div className="bg-white">
          {activeMenu ? (
            <div className="w-64 fixed bg-white shadow-xl border-r border-gray-200">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
      </div>
    </BrowserRouter>
    </>
  )
}