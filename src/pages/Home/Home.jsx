import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import MarketHeader from "../../components/MarketHeader";
import MarketTable from "../../components/MarketTable";

export default function Home() {
  const { allCoin = [], loading } = useContext(CoinContext)
  const [search, setSearch] = useState("")
  const [filteredCoins, setFilteredCoins] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const coinsPerPage = 20

  useEffect(() => {
    const filtered = allCoin.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredCoins(filtered)
    setCurrentPage(1)
  }, [allCoin, search])

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin)
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage)

  if (loading) return <p className="p-7">Loading coins...</p>

  return (
    <div className="w-full bg-gray-200 p-7">
      <MarketHeader search={search} setSearch={setSearch} />
      <MarketTable coins={currentCoins} />

      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
