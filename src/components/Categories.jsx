import Dropdown from "./DropDown"
import { PieChart, Pie, Cell } from 'recharts';

const Categories = () => {
    const chartData = [
        { name: "A", value: 75, fill: "#ca365f" },
        { name: "B", value: 45, fill: "#47539f" },
        { name: "C", value: 50, fill: "#327dd1" },
        { name: "D", value: 45, fill: "#3c887c" },
        { name: "E", value: 35, fill: "#5eced8" },
        { name: "F", value: 45, fill: "#4496ac" },
        { name: "G", value: 45, fill: "#ee7c6d" },
        { name: "H", value: 70, fill: "#86448d" },
    ];

    const organisationData = [
        {
            fieldName: "Travel & Transportation",
            percent: "20%",
            value: "80,240",
            fill: "#ca365f"
        },
        {
            fieldName: "Employee Reimbursements",
            percent: "18%",
            value: "23,240",
            fill: "#47539f"
        },
        {
            fieldName: "Office & Addministration",
            percent: "11%",
            value: "13,240",
            fill: "#327dd1"
        },
        {
            fieldName: "Client Engagement & Entertainment",
            percent: "9%",
            value: "11,240",
            fill: "#3c887c"
        },
        {
            fieldName: "Training & Development",
            percent: "8%",
            value: "10,240",
            fill: "#5eced8"
        },
        {
            fieldName: "Professional Fee",
            percent: "10%",
            value: "20,240",
            fill: "#4496ac"
        },
        {
            fieldName: "IT & Software",
            percent: "10%",
            value: "40,240",
            fill: "#ee7c6d"
        },
        {
            fieldName: "Miscellaneous Expense",
            percent: "6%",
            value: "50,240",
            fill: "#86448d"
        },
    ]
    return (
        <main className="border border-gray-200 mt-3 py-2">
            <div className="flex justify-between items-center border-b border-gray-200 px-2">
                <h1 className="text-lg font-semibold text-slate-800">Categories</h1>
                <Dropdown />
            </div>

            <div className="flex items-center justify-between bg-white p-2 rounded-lg">
                <div>
                    <h2 className="text-xl font-bold">
                        10 <span className="font-semibold">Types Of Expense</span>
                    </h2>
                    <p className="text-gray-500 text-sm">Defined By Your organisation</p>
                </div>

                <div className="relative w-32  flex items-center justify-center">
                    <PieChart width={120} height={80}>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="100%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={50}
                            outerRadius={60}
                            dataKey="value"
                            stroke="none"
                            paddingAngle={2}
                            cornerRadius={4}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>

                    {/* Centered Percentage Symbol */}
                    <span className="absolute bottom-2 text-black font-bold text-2xl">%</span>
                </div>
            </div>

            {organisationData.map((org) => (
                <div key={org.fieldName} className="flex items-center justify-between border rounded-lg mt-2 p-2 mx-2 border-gray-200">
                    <div className="flex gap-2 items-center">
                        <h2 className="text-sm font-medium text-slate-700">{org.fieldName}</h2>
                        <p className="text-slate-500 text-sm font-semibold">({org.percent})</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-slate-800 text-sm">₹{org.value}</h2>
                    </div>
                </div>
            ))}


        </main>
    )
}

export default Categories