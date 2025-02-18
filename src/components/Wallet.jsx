import WalletCard from "./WalletCard"
import WalletTransaction from "./WalletTransaction"


const Wallet = () => {
  return (
    <div className="border border-gray-200 p-2 m-2">
        <WalletCard/>
        <WalletTransaction/>
    </div>
  )
}

export default Wallet