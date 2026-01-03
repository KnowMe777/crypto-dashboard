import { useNavigate } from "react-router-dom"
import { addToPortfolio } from "../utils/portfolioUtils"
import toast from "react-hot-toast"

export default function CoinRow({ coin }) {
  const navigate = useNavigate()
  const isPositive = coin.price_change_percentage_24h >= 0

  const handleAdd = (e) => {
    e.stopPropagation()
    const added = addToPortfolio(coin)
    if (added) {
      toast.success(`${coin.name} added to Portfolio`)
    } else {
      toast.error("Already in Portfolio")
    }
  }

  return (
    <div
      className="grid grid-cols-4 md:grid-cols-6 px-4 md:px-6 py-4 items-center text-sm border-b hover:bg-gray-50 cursor-pointer last:border-0"
      onClick={() => navigate(`/coin/${coin.id}`)}
    >
      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
        <img
          src={coin.image}
          className="w-6 h-6 md:w-7 md:h-7 shrink-0 transition transform duration-300 hover:scale-105"
          alt={coin.name}
        />
        <div className="min-w-0">
          <p className="font-semibold truncate transition transform duration-300 hover:scale-105">
            {coin.name}
          </p>
          <p className="text-gray-500 text-xs">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>

      <p>${coin.current_price.toLocaleString()}</p>

      <p
        className={`font-medium ${isPositive ? "text-green-600" : "text-red-500"}`}
      >
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </p>

      <p className="hidden md:block whitespace-nowrap">
        ${coin.low_24h} – ${coin.high_24h}
      </p>

      <p className="hidden md:block truncate">
        {coin.total_volume.toLocaleString()}
      </p>

      <div className="flex flex-col md:flex-row gap-1 justify-center md:justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/coin/${coin.id}`)
          }}
          className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gray-100 text-[10px] md:text-xs hover:bg-gray-700 hover:text-white transition"
        >
          View
        </button>

        <button
          onClick={handleAdd}
          className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gray-100 text-[10px] md:text-xs hover:bg-gray-700 hover:text-white transition"
        >
          Add
        </button>
      </div>
    </div>
  )
}
