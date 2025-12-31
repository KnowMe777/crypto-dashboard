import TableHeader from "./TableHeader";
import CoinRow from "./CoinRow";

export default function MarketTable({ coins }) {
  return (
    <div className="bg-white border rounded-2xl mt-3">
      <TableHeader />

      {coins?.map((coin) => (
        <CoinRow key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
