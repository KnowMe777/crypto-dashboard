import { useContext, useEffect, useState } from "react"
import { CoinContext } from "../../context/CoinContext"
import MarketHeader from "../../components/MarketHeader"
import MarketTable from "../../components/MarketTable"
import Contact from "../../components/Contacts"

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

  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin)
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage)

  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth"
    })
  }, [currentPage])

  if (loading) return <p className="p-7">Loading coins...</p>

  return (
    <div className="w-full bg-gray-200 p-7">
      <MarketHeader search={search} setSearch={setSearch} />
      <MarketTable coins={currentCoins} />

      {totalPages > 1 && (
        <div className="mt-6 w-full flex justify-center">
          <div
            className="
        w-full max-w-7xl
        px-3 sm:px-6
        flex flex-wrap items-center justify-center gap-2
      "
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="
          px-4 py-2 rounded-full
          bg-white border shadow-sm
          text-sm font-medium
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:bg-gray-100
        "
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`
            px-4 py-2 rounded-full
            text-sm font-medium
            border shadow-sm
            ${
              currentPage === i + 1
                ? "bg-gray-900 text-white"
                : "bg-white hover:bg-gray-100"
            }
          `}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="
          px-4 py-2 rounded-full
          bg-white border shadow-sm
          text-sm font-medium
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:bg-gray-100
        "
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Contact />
    </div>
  )
}
