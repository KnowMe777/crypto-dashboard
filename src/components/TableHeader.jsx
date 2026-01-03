export default function TableHeader() {
  return (
    <div className="grid grid-cols-6 px-6 py-3 text-sm text-gray-500 border-t border-b">
      <span>Asset</span>
      <span>Price</span>
      <span>Change</span>
      <span>24h Range</span>
      <span>Volume</span>
      <span className="text-right">Action</span>
    </div>
  )
}
