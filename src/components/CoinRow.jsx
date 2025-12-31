import { useNavigate } from 'react-router-dom'

export default function CoinRow({ coin }) {
  const navigate = useNavigate()
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="grid grid-cols-6 px-6 py-4 items-center text-sm border-b hover:bg-gray-50" onClick={() => navigate(`/coin/${coin.id}`)}>
      <div className="flex items-center gap-3">
        <img src={coin.image} className="w-7 h-7" />
        <div>
          <p className="font-semibold">{coin.name}</p>
          <p className="text-gray-500 text-xs">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>

      <p>${coin.current_price.toLocaleString()}</p>

      <p
        className={`font-medium ${
          isPositive ? "text-green-600" : "text-red-500"
        }`}
      >
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </p>

      <p>
        ${coin.low_24h} – ${coin.high_24h}
      </p>

      <p>{coin.total_volume.toLocaleString()}</p>

      <div className="text-right">
        <button onClick={(e) => {
          e.stopPropagation()
          navigate(`/coin/${coin.id}`)
        }}
        className="px-4 py-1.5 rounded-full bg-gray-100 text-xs transition transform duration-200 hover:scale-105">
          View →
        </button>
      </div>
    </div>
  );
}
