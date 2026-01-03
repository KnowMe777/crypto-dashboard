import { useNavigate } from "react-router-dom"

export default function MobileCoinCard({ coin, onAction, actionLabel }) {
  const navigate = useNavigate()
  const isPositive = coin.price_change_percentage_24h >= 0

  const formatCurrency = (val) => (val ? val.toLocaleString() : "—")

  return (
    <div
      className="w-full bg-white border rounded-3xl p-5 shadow-2xl mb-4"
      onClick={() => navigate(`/coin/${coin.id}`)}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img
            src={coin.image}
            alt={coin.symbol}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-700 text-lg font-bold leading-tight">
            {coin.name}
          </h3>
          <span className="text-gray-500 text-sm font-medium uppercase">
            {coin.symbol}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-10">
        <div className="flex justify-between items-end">
          <span className="text-gray-700 text-xs font-medium">Price</span>
          <span className="text-gray-700 text-xs font-medium">Change</span>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-black text-md font-bold tracking-tight">
            ${formatCurrency(coin.current_price)}
          </span>
          <span
            className={`text-sm font-bold ${isPositive ? "text-emerald-400" : "text-red-500"}`}
          >
            {isPositive ? "+" : ""}
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </div>

        <div className="flex justify-between items-end mt-2">
          <span className="text-gray-700 text-xs font-medium">24h Range</span>
          <span className="text-gray-700 text-xs font-medium text-right">
            Volume
          </span>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-black text-sm font-medium">
            ${formatCurrency(coin.low_24h)} – ${formatCurrency(coin.high_24h)}
          </span>
          <span className="text-black text-sm font-medium">
            {formatCurrency(coin.total_volume)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/coin/${coin.id}`)
          }}
          className="py-3 px-6 rounded-full text-black font-medium bg-gray-200"
        >
          View
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onAction(coin.id)
          }}
          className="py-3 px-6 rounded-full font-medium text-black bg-gray-200"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  )
}
