import CoinRow from "./CoinRow"
import MobileCoinCard from "./MobileCoinCard"
import { addToPortfolio } from "../utils/portfolioUtils"
import toast from "react-hot-toast"

export default function MarketTable({ coins }) {
  if (!coins || coins.length === 0)
    return <p className="p-7 text-center">No coins found.</p>

  const handleAdd = (coinId) => {
    const coinToAdd = coins.find((c) => c.id === coinId)
    if (coinToAdd) {
      const added = addToPortfolio(coinToAdd)
      if (added) {
        toast.success(`${coinToAdd.name} added to Portfolio`)
      } else {
        toast.error("Already in Portfolio")
      }
    }
  }

  return (
    <div className="mt-2">
      <div className="hidden md:block bg-white border rounded-2xl">
        <div className="grid grid-cols-6 px-6 py-3 text-sm text-gray-500 border-b">
          <span>Asset</span>
          <span>Price</span>
          <span>Change</span>
          <span>24h Range</span>
          <span>Volume</span>
          <span className="text-center">Action</span>
        </div>

        {coins.map((coin) => (
          <CoinRow key={coin.id} coin={coin} />
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-4">
        {coins.map((coin) => (
          <MobileCoinCard
            key={coin.id}
            coin={coin}
            onAction={() => handleAdd(coin.id)}
            actionLabel="Add"
            actionStyle="bg-white text-black hover:bg-gray-200"
          />
        ))}
      </div>
    </div>
  )
}
