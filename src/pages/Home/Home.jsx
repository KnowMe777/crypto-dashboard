import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import MarketHeader from "../../components/MarketHeader";
import MarketTable from "../../components/MarketTable";

export default function Home() {
  const { allCoin = [] } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const filteredCoins = allCoin.filter((coin) =>
      !search || 
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    )  
    setDisplayCoin(filteredCoins)
  }, [allCoin, search])
  
  return (
    <div className="w-full bg-gray-200 p-7">
      <MarketHeader search={search} setSearch={setSearch}/>
      <MarketTable coins={displayCoin} />
    </div>
  );
}

