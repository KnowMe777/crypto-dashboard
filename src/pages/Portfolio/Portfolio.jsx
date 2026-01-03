import { useEffect, useState } from "react"
import { getPortfolio, removeFromPortfolio } from "../../utils/portfolioUtils"
import { useNavigate } from "react-router-dom"
import MobileCoinCard from "../../components/MobileCoinCard"

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setPortfolio(getPortfolio())
  }, [])

  const handleRemove = (id) => {
    removeFromPortfolio(id)
    setPortfolio(getPortfolio())
  }

  if (portfolio.length === 0) {
    return (
      <div className="p-6 flex items-center justify-center text-gray-500">
        No Coins in Portfolio
      </div>
    )
  }

  return (
    <div className="dark:bg-gray-800 dark:text-white w-full bg-gray-200 p-7">
      <div className="flex items-start mb-7">
        <h1 className="text-2xl font-bold">Your Portfolio</h1>
      </div>

      {/* --- Desktop View (Table) --- */}
      <div className="hidden md:block">
        <div className="bg-white grid grid-cols-6 px-6 py-5 text-sm text-gray-500 border rounded-xl">
          <span>Asset</span>
          <span>Price</span>
          <span>Change</span>
          <span>24h Range</span>
          <span>Volume</span>
          <span className="text-center">Action</span>
        </div>

        <div className="bg-white border rounded-2xl mt-2">
          {portfolio.map((coin) => {
            const isPositive = coin.price_change_percentage_24h >= 0

            return (
              <div
                key={coin.id}
                className="grid grid-cols-6 px-6 py-4 items-center text-sm border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/coin/${coin.id}`)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={coin.image}
                    className="w-7 h-7 transition transform duration-300 hover:scale-105"
                    alt={coin.name}
                  />
                  <div>
                    <p className="font-semibold transition transform duration-300 hover:scale-105">
                      {coin.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {coin.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>

                <p>${coin.current_price.toLocaleString() ?? "-"}</p>

                <p className={isPositive ? "text-green-600" : "text-red-500"}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </p>

                <p>
                  ${coin.low_24h ?? "—"} – ${coin.high_24h ?? "—"}
                </p>

                <p>{coin.total_volume.toLocaleString() ?? "—"}</p>

                <div className="text-right flex gap-1 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/coin/${coin.id}`)
                    }}
                    className="px-4 py-1.5 rounded-full bg-gray-100 text-xs transition transform hover:scale-105 hover:bg-gray-700 hover:text-white hover:shadow-lg"
                  >
                    View
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemove(coin.id)
                    }}
                    className="px-4 py-1.5 rounded-full bg-gray-100 text-xs text-red-600 hover:bg-red-600 transition transform hover:scale-105 hover:text-white hover:shadow-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* --- Mobile View (Cards) --- */}
      <div className="md:hidden flex flex-col gap-4">
        {portfolio.map((coin) => (
          <MobileCoinCard
            key={coin.id}
            coin={coin}
            onAction={handleRemove}
            actionLabel="Remove"
            actionStyle="bg-red-500 text-white hover:bg-red-600"
          />
        ))}
      </div>
    </div>
  )
}
