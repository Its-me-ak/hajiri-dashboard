import { RiInboxArchiveFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { useDashboardContext } from "../context/DashboardContext";
import { useEffect } from "react";
const Navbar = () => {
    const { screenSize, setScreenSize, setActiveMenu } = useDashboardContext();
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize, setActiveMenu]);
    return (
        <nav className="flex justify-between md:px-2 px-5 py-1 items-center shadow-md">
            <div className="flex gap-5">
                <button title="menu"
                    onClick={() => setActiveMenu((prevMenu) => !prevMenu)}
                >
                    <AiOutlineMenu fill="#6666f2" />
                </button>
                <div className="md:block hidden">
                    <h2 className="text-lg text-slate-800 font-bold capitalize">expense management</h2>
                    <p className="text-slate-500 capitalize text-sm font-semibold">manage employee expense reimbursements</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <button className="flex gap-1 items-center text-sm font-semibold">
                    <RiInboxArchiveFill className="text-lg" />
                    My Inbox
                </button>
                <avatar className="h-10 w-10 bg-[#eb996e] rounded-full flex justify-center items-center text-white">
                    A
                </avatar>
            </div>
        </nav>
    )
}

export default Navbar