import Dropdown from "./DropDown"
import { FaChevronDown } from "react-icons/fa";

const ClientReport = () => {
    const companyData = [
        { name: "Wekrata", logo: "https://i.pravatar.cc/150?img=7", progress: 50, amount: "₹54,240" },
        { name: "Wekrata", logo: "https://i.pravatar.cc/150?img=8", progress: 60, amount: "₹84,240" },
        { name: "Wekrata", logo: "https://i.pravatar.cc/150?img=9", progress: 30, amount: "₹94,240" },
        { name: "Wekrata", logo: "https://i.pravatar.cc/150?img=10", progress: 90, amount: "₹2,14,240" },
    ];

    return (
        <main className="border border-gray-200 mt-4  py-2 px-3">
            <div className="flex justify-between items-center border-b border-gray-200 px-2 mb-3">
                <h1 className="text-lg font-semibold text-slate-800">
                    Client Report
                </h1>
                <Dropdown />
            </div>
            {
                companyData.map((company) => (
                    <div className="w-full border border-gray-200 p-2 rounded-md mb-3 bg-white" key={company.progress}>
                        <div className="flex items-center justify-between space-x-3">
                            <div className="flex gap-2">
                                <img src={company.logo} alt={company.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h2 className="font-bold text-gray-800">{company.name}</h2>
                                    <div className="lg:w-64 md:w-96 w-52 h-2 bg-gray-200 rounded-full mt-1 relative">
                                        <div
                                            className="h-2 bg-indigo-500 rounded-full absolute left-0"
                                            style={{ width: `${company.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold">{company.amount}</p>
                                <p className="text-sm font-medium text-slate-500">This week</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-2 border-t border-gray-200 pt-2">
                            < div className="text-sm font-medium text-slate-500" >
                                total money spend till now <span className="font-bold text-slate-800" >₹54,240</span>
                            </div >

                            <button className="text-slate-600 font-semibold text-sm flex items-center space-x-1">
                                <span>View Details</span>
                                <FaChevronDown />
                            </button>
                        </div>

                    </div>

                ))
            }



        </main>
    )
}

export default ClientReport
