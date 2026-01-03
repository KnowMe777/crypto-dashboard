export default function MarketHeader({ search, setSearch }) {
  return (
    <>
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-2xl font-bold">Cryptocurrency Market</h1>
        <p className="text-base text-gray-600">
          Explore & Monitor Digital Assets
        </p>
      </div>

      <div className="bg-white border rounded-2xl mb-5">
        <div
          className="
            flex flex-col gap-4
            sm:flex-row sm:items-center sm:justify-between
            px-4 sm:px-6 py-4
          "
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Featured Assets
          </h2>

          <div className="w-full sm:w-auto">
            <div
              className="
                flex items-center gap-2
                px-4 py-2
                border rounded-xl
                w-full sm:w-72
              "
            >
              <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
              <input
                type="text"
                placeholder="Search Symbols..."
                className="w-full outline-none text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
