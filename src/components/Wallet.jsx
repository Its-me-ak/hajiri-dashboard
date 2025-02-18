
const Wallet = () => {
    return (
        <>
            <div className="w-72 h-auto bg-[#f5f3f8] mx-3 mt-2 pt-3 rounded-lg capitalize">
                <span className="px-3 py-3 text-sm text-slate-700 font-semibold">company wallet</span>
                <div className="px-3 pb-4 mt-4">
                    <h4 className="text-sm text-slate-600 font-medium" >your balance</h4>
                    <h2 className="text-2xl text-slate-800 font-bold">₹16,05,894</h2>
                </div>
                <div className="p-2 bg-[#dee0ff] rounded-b-lg flex justify-between items-center">
                    <h4 className="text-xs text-slate-600 font-medium">spending limit</h4>
                    <h2 className="text-sm font-semibold text-slate-700">₹10,05,894</h2>
                </div>
            </div>
        </>
    )
}

export default Wallet