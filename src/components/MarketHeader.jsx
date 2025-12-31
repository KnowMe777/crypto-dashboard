export default function MarketHeader({search, setSearch}) {
  return (
    <>
      <div className="flex items-start gap-2 flex-col">
        <h1 className="text-2xl font-bold">Cryptocurrency Market</h1>
        <p className="text-base text-gray-600">
          Explore & Monitor Digital Assets
        </p>
      </div>

      <div className="bg-white border rounded-2xl mt-7">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Featured Assets
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 border rounded-xl w-72">
              <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
              <input
                type="text"
                placeholder="Search Symbols..."
                className="w-full outline-none text-sm"
                value={search.value}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
