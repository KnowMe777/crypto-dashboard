import { useState, useEffect, createContext } from "react";

export const CoinContext = createContext()

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]) 
    const fetchAllCoin = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&price_change_percentage=24h"
        );
        const data = await res.json();
        setAllCoin(data);
      } catch (err) {
        console.error(err);
      }
    };
      
    useEffect(() => { fetchAllCoin() }, [])
    
    const contextValue = {allCoin}

    return (
        <CoinContext value={contextValue}>
            {props.children}
        </CoinContext>
    )

}

export default CoinContextProvider