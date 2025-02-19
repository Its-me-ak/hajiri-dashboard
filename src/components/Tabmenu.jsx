import { NavLink } from "react-router-dom";

const TabMenu = () => {
    const activeLink =
        "text-[#6666f2] font-medium border-b border-[#6666f2] pb-2";
    const normalLink = "text-gray-500 font-medium  hover:text-[#6666f2] hover:border-b border-[#6666f2]";

    return (
        <div>
            <ul className="flex md:gap-6 gap-3 capitalize flex-wrap text-sm w-full border-b-0 md:border-b md:border-gray-200  pt-3">
                <NavLink
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={normalLink}
                >
                    Expense Request
                </NavLink>
                <NavLink
                    className={normalLink}
                >
                    Company Expense Policy
                </NavLink>
                <NavLink
                    className={normalLink}
                >
                    Company Wallet
                </NavLink>
            </ul>
        </div>
    );
};

export default TabMenu;
