import WalletCard from "./WalletCard"
import WalletTransaction from "./WalletTransaction"


const Wallet = () => {
  return (
    <div className="border border-gray-200 p-2 mt-4 me-4">
        <WalletCard/>
        <WalletTransaction/>
    </div>
  )
}

export default Wallet