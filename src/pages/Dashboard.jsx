import BudgetAllocation from "../components/BudgetAllocation"
import Categories from "../components/Categories"
import ClientReport from "../components/ClientReport"
import ExpenseStats from "../components/ExpenseStats"
import Tabmenu from "../components/Tabmenu"
import Wallet from "../components/Wallet"

const Dashboard = () => {
  return (
    <div>
      <Tabmenu />
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="md:col-span-1">
          <Wallet />
        </div>
        <div className="md:col-span-3">
          <ExpenseStats />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <Categories />
            <ClientReport />
          </div>
          <BudgetAllocation />
        </div>
      </div>
    </div>
  )
}

export default Dashboard