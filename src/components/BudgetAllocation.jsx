

const BudgetAllocation = () => {
    const budgets = [
        { amount: "40,240", category: "Sales & Marketing" },
        { amount: "80,240", category: "Operations & Support" },
        { amount: "20,240", category: "HR & Administration" },
        { amount: "1,23,240", category: "Finance & Legal" },
        { amount: "20,240", category: "IT & Engineering" },
        { amount: "20,240", category: "Product Development" },
        { amount: "20,240", category: "Creative & Strategy" },
    ];
    return (
        <div className="border border-gray-200 mt-4 py-2">
            <h1 className="mb-2 px-3 text-slate-700 font-semibold text-lg">Departmental Budget Allocation</h1>
           <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 border-t border-gray-200 pt-3 px-3">
                {
                    budgets.map((budget) => (
                        <div key={budget.amount} className=" border-r border-gray-200 mb-2 me-3">
                            <h2 className="text-slate-800 font-semibold text-lg">₹{budget.amount}</h2>
                            <p className="text-xs text-slate-500 font-medium">{budget.category}</p>
                        </div>
                    ))
                }
           </div>
        </div>
    )
}

export default BudgetAllocation
