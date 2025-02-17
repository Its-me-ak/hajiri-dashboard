import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useDashboardContext } from "../context/DashboardContext";
import { FaHome, FaUsers, FaUserPlus, FaCalendarCheck, FaBusinessTime, FaBitcoin, FaArtstation, FaFileInvoiceDollar, FaBuilding, FaRegClock, FaMoneyCheckAlt } from "react-icons/fa";
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
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }
  const activeLink = 'flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg bg-[#e9eafd] text-[#6666f2]  text-md m-2';
  const normalLink = 'flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-slate-600 hover:bg-[#e9eafd] hover:text-[#6666f2] m-2';
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={handleSidebarClose}
              className="items-center gap-1 ml-3 mt-4 flex text-xl font-bold tracking-tight text-slate-900"
            >
              <img src="assets/img/logo.jpg" alt="logo"
                className="h-10 w-10"
              />
              <span>Hajiri</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevMenu) => !prevMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
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
        </>
      )}
    </div>
  );
};

export default Sidebar;
