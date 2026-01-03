import { useState, useEffect, createContext } from "react"

export const CoinContext = createContext()

const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchAllCoin = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&price_change_percentage=24h"
      )
      const data = await res.json()
      setAllCoin(data)
      console.log("Fetched coins:", data.length)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllCoin()
  }, [])

  return (
    <CoinContext.Provider value={{ allCoin, loading }}>
      {children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider
