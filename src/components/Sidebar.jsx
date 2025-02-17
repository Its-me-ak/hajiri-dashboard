import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useDashboardContext } from "../context/DashboardContext";
import { FaHome, FaUsers, FaUserPlus, FaCalendarCheck, FaBusinessTime, FaBitcoin, FaArtstation, FaFileInvoiceDollar, FaBuilding, FaRegClock, FaMoneyCheckAlt, FaAngleRight, FaCrown } from "react-icons/fa";
import { IoMdAlarm, } from "react-icons/io";
import { GrCube } from "react-icons/gr";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiScissors } from "react-icons/hi2"

const Sidebar = () => {
  const links = [
    {
      links: [
        {
          name: 'Dashboard',
          icon: <FaHome />,
        },
      ],
    },

    {
      title: 'people',
      links: [
        {
          name: 'Employee',
          icon: <FaUserPlus />,
        },
        {
          name: 'Team',
          icon: <FaUsers />,
        },
      ],
    },
    {
      title: 'management',
      links: [
        {
          name: 'Attendance',
          icon: <FaCalendarCheck />,
        },
        {
          name: 'Leaves',
          icon: <IoMdAlarm />,
        },
        {
          name: 'Expense',
          icon: <FaBusinessTime />,
        },
        {
          name: 'Assets',
          icon: <GrCube />,
        },
        {
          name: 'Reports',
          icon: <FaArtstation />,
        },
        {
          name: 'Super Coins',
          icon: <FaBitcoin />,
        },
      ],
    },
    {
      title: 'payrolls',
      links: [
        {
          name: 'dashboards',
          icon: <MdOutlineDashboardCustomize />,
        },
        {
          name: 'EPF, ESI & TDS',
          icon: <HiScissors />,
        },

        {
          name: 'Generate Salary Slip',
          icon: <FaFileInvoiceDollar />,
        },

      ],
    },
    {
      title: 'company',
      links: [
        {
          name: 'Company Setting',
          icon: <FaBuilding />,
        },
        {
          name: 'Attendance Setting',
          icon: <FaRegClock />,
        },

        {
          name: 'Leave Setting',
          icon: <FaBusinessTime />,
        },
        {
          name: 'Salary Setting',
          icon: <FaMoneyCheckAlt />,
        },

      ],
    },
  ];
  const { activeMenu, setActiveMenu, screenSize } = useDashboardContext();

  const handleSidebarClose = () => {
    if (activeMenu && screenSize) {
      setActiveMenu(false);
    }
  }
  const activeLink = 'flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg bg-[#e9eafd] text-[#6666f2]  text-md m-2';
  const normalLink = 'flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-slate-600 hover:bg-[#e9eafd] hover:text-[#6666f2] m-2';
  return (
    <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto relative">
      {activeMenu && (
        <>
          <div className="flex justify-between ml-3 items-center">
            <Link
              to={"/"}
              onClick={handleSidebarClose}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
            >
              <img src="assets/img/logo.jpg" alt="logo"
                className="h-10 w-10"
              />
              <span className="text-2xl">Hajiri</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevMenu) => !prevMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-5">
            {links.map((link) => (
              <div key={link.title || Math.random()}>
                <p className="text-gray-600 m-3 mt-4 font-bold text-[12px] uppercase">{link.title}</p>
                {link.links.map((item) => (
                  <NavLink to={`/${item.name}`}
                    key={item.name}
                    onClick={handleSidebarClose}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                  >
                    {item.icon}
                    <span className="capitalize font-semibold">
                      {item.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full bg-[#f1f1fb] flex justify-between items-center flex-wrap sticky bottom-0 left-0 right-0">
            <div className="p-2">
              <span className="text-md text-slate-900 font-bold flex items-center gap-2">Premium
                <FaCrown className="text-md text-yellow-600" />
                </span> 
              <span className="text-xs text-slate-400">Valid upto 12 months</span>
            </div>
            <p className="px-3 text-slate-800 font-semibold">Modify</p>
            <div className="bg-white w-full p-2 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <avatar className="h-10 w-10 bg-[#a4a1ed] rounded-full flex justify-center items-center">
                  H
                </avatar>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">Hajiri</h3>
                  <p className="text-xs text-slate-500">hajiri0852@gmai.com</p>
                </div>
              </div>
              <button>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
