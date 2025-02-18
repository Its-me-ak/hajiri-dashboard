

const WalletTransaction = () => {
    const transactions = [
        {
            img: "https://i.pravatar.cc/150?img=1",
            name: "Eleanor Pena",
            department: "Sales Department",
            amount: "10,894",
            date: "Jan, 23"
        },
        {
            img: "https://i.pravatar.cc/150?img=2",
            name: "Eleanor Pena",
            department: "IT Department",
            amount: "9,894",
            date: "Jan, 23"
        },
        {
            img: "https://i.pravatar.cc/150?img=3",
            name: "Eleanor Pena",
            department: "Relation Manager",
            amount: "8,894",
            date: "Jan, 23"
        },
        {
            img: "https://i.pravatar.cc/150?img=4",
            name: "Eleanor Pena",
            department: "Sales Department",
            amount: "12,894",
            date: "Jan, 23"
        },
        {
            img: "https://i.pravatar.cc/150?img=5",
            name: "Eleanor Pena",
            department: "Software Develop",
            amount: "11,894",
            date: "Jan, 23"
        },
        {
            img: "https://i.pravatar.cc/150?img=6",
            name: "Eleanor Pena",
            department: "Software Develop",
            amount: "27,894",
            date: "Jan, 23"
        }
    ];
    return (
        <>
            <div className="mx-3 space-y-3 w-72 mt-5">
                <h2 className="text-sm font-semibold mb-4 text-slate-400">Employee Wallet Transactions</h2>
                {transactions.map((transaction, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white px-1 py-2 ">
                        <img src={transaction.img} alt={transaction.name} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold text-slate-700 text-sm">{transaction.name}</p>
                            <p className="text-slate-700 font-medium text-xs"><span className="text-slate-400 font-normal">Department: </span>{transaction.department}</p>
                        </div>
                        <div className="ml-auto text-right">
                            <p className="text-slate-700 font-semibold">${transaction.amount}</p>
                            <p className="text-gray-400 text-sm">{transaction.date}</p>
                        </div>
                    </div>
                ))}
                <button className="w-full border border-slate-200 text-sm font-medium text-slate-400 py-2">
                    See All Transaction
                </button>
            </div>
        </>
    )
}

export default WalletTransaction