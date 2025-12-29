import React from "react";

export default function Home() {
  return (
    <div className="border-2 border-red-700 w-full bg-gray-200 p-7">
      <div className=" flex items-start gap-2 flex-col">
        <h1 className="text-2xl font-bold">Cryptocurrency Market</h1>
        <p className="text-base text-gray-600">
          Explore & Monitor Digital Assets
        </p>
      </div>

      <div className="bg-white border rounded-lg mt-7">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Featured Assets
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-gray-500 w-72 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search Symbols..."
                className="w-full outline-none text-sm"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-sm text-gray-600">
              <i className="fa-solid fa-filter"></i>
              Filter
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white text-sm text-gray-600">
              Sort By
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 px-6 py-3 text-sm text-gray-500 border-t border-b">
          <span>Asset</span>
          <span>Price</span>
          <span>Change</span>
          <span>24h Range</span>
          <span>Volume</span>
          <span className="text-right">Action</span>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-6 px-6 py-4 items-center text-sm border-b hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <img
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              className="w-7 h-7"
            />
            <div>
              <p className="font-semibold text-gray-800">Bitcoin</p>
              <p className="text-gray-500 text-xs">BTC</p>
            </div>
          </div>

          <p>$45,000.15</p>

          <p className="text-green-600 font-medium">+2.73%</p>

          <p>$43,500 – $45,200</p>

          <p>12.5M</p>

          <div className="text-right">
            <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs">
              View →
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-6 px-6 py-4 items-center text-sm border-b hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <img
              src="https://assets.coingecko.com/coins/images/279/large/ethereum.png"
              className="w-7 h-7"
            />
            <div>
              <p className="font-semibold text-gray-800">Ethereum</p>
              <p className="text-gray-500 text-xs">ETH</p>
            </div>
          </div>

          <p>$3,200.50</p>

          <p className="text-red-500 font-medium">-2.59%</p>

          <p>$3,150 – $3,310</p>

          <p>4.8M</p>

          <div className="text-right">
            <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs">
              View →
            </button>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-6 px-6 py-4 items-center text-sm hover:bg-gray-50 transition">
          <div className="flex items-center gap-3">
            <img
              src="https://assets.coingecko.com/coins/images/975/large/cardano.png"
              className="w-7 h-7"
            />
            <div>
              <p className="font-semibold text-gray-800">Cardano</p>
              <p className="text-gray-500 text-xs">ADA</p>
            </div>
          </div>

          <p>$1.25</p>

          <p className="text-green-600 font-medium">+5.92%</p>

          <p>$1.18 – $1.28</p>

          <p>2.1B</p>

          <div className="text-right">
            <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs">
              View →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
