import Tabmenu from "../components/Tabmenu"
import Wallet from "../components/Wallet"
import WalletTransaction from "../components/WalletTransaction"

const Dashboard = () => {
  return (
    <div>
      <Tabmenu />
      <div className="">
        <Wallet />
        <WalletTransaction />
      </div>
    </div>
  )
}

export default Dashboard