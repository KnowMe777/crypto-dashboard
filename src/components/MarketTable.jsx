import CoinRow from "./CoinRow";

export default function MarketTable({ coins }) {
  if (!coins || coins.length === 0)
    return <p className="p-7 text-center">No coins found.</p>;

  return (
    <div className="bg-white border rounded-2xl mt-2">
      <div className="grid grid-cols-6 px-6 py-3 text-sm text-gray-500 border-b">
        <span>Asset</span>
        <span>Price</span>
        <span>Change</span>
        <span>24h Range</span>
        <span>Volume</span>
        <span className="text-center">Action</span>
      </div>

      {coins.map((coin) => (
        <CoinRow key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
