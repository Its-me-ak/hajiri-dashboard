import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const ExpenseStats = () => {
    const expenseData = [
        {
            title: "Settled Expense",
            amount: "₹1,24,420",
            trend: "Up from past week",
            color: "text-green-500",
            icon: <FaArrowTrendUp />,
            percent: "1.3% "
        },
        {
            title: "Un-Settled Expense",
            amount: "₹80,240",
            trend: "Down from past week",
            color: "text-red-500",
            icon: <FaArrowTrendDown />,
            percent: "4.3% "
        },
        {
            title: "In Process",
            amount: "₹34,240",
            request: "24 Request in this week",
        },
        {
            title: "Rejected Expense",
            amount: "₹1,240",
            request: "12 Request in this week",
        },
        {
            title: "Client Expense",
            amount: "₹14,240",
            trend: "Up from past week",
            color: "text-green-500",
            icon: <FaArrowTrendUp />,
            percent: "1.3% "
        }
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
            {expenseData.map((expense, index) => (
                <div key={index} className="bg-white p-2 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 text-gray-500">
                        <div className="p-2 bg-slate-200 rounded-md"><FaFileInvoiceDollar fill="#a4a4c7" /></div>
                        <p className="text-sm">{expense.title}</p>
                    </div>
                    <h2 className="text-2xl font-bold mt-2 text-slate-700">{expense.amount}</h2>
                    {expense.trend && (
                        <p className="text-xs mt-1 flex items-center">
                            <span className={`flex items-center gap-1 ${expense.color}`}>{expense.icon} {expense.percent} </span><span className="ms-1">{expense.trend}</span>
                        </p>
                    )}
                    {expense.request && (
                        <p className="text-xs mt-1 font-medium text-gray-500">{expense.request}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExpenseStats;
