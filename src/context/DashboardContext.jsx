import { createContext, useContext, useState } from "react"

const DashboardContext = createContext();


export const DashboardProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <DashboardContext.Provider value={{
            activeMenu,
            setActiveMenu,
            screenSize,
            setScreenSize,
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext)