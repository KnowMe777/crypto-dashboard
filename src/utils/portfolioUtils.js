const STORAGE_KEY = "portfolio"

export function getPortfolio() {
    const data = localStorage.getItem(STORAGE_KEY)
    const parsed = data ? JSON.parse(data) : []

    return parsed.filter((coin) => coin && coin.id && coin.current_price !== undefined)
}

export function addToPortfolio(coin) {
    const portfolio = getPortfolio()

    const exists = portfolio.find((item) => item.id === coin.id)
    if(exists) return false

    portfolio.push({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      low_24h: coin.low_24h,
      high_24h: coin.high_24h,
      total_volume: coin.total_volume,
    })

    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolio))
    return true
}

export function removeFromPortfolio(id) {
    const portfolio = getPortfolio().filter((coin) => coin.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolio))
}