import Categories from "../components/Categories"
import ExpenseStats from "../components/ExpenseStats"
import Tabmenu from "../components/Tabmenu"
import Wallet from "../components/Wallet"

const Dashboard = () => {
  return (
    <div>
      <Tabmenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <Wallet/>
        </div>
        <div className="md:col-span-3">
          <ExpenseStats />
          <div className="grid md:grid-cols-2 grid-cols-1">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard