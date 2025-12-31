import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export default function Coin() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [chartColor, setChartColor] = useState("#228B22");

  const [days, setDays] = useState(30);

  const timeRanges = [
    { label: "1D", value: 1 },
    { label: "7D", value: 7 },
    { label: "30D", value: 30 },
    { label: "90D", value: 90 },
  ];

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        if (!coinData) {
          const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}`
          );
          const data = await res.json();
          setCoinData(data);
        }

        const intervalParam = days > 1 ? "&interval=daily" : "";

        const chartRes = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}${intervalParam}`
        );
        const chartResData = await chartRes.json();

        const prices = chartResData.prices;
        const firstPrice = prices[0][1];
        const lastPrice = prices[prices.length - 1][1];

        const isTrendPositive = lastPrice >= firstPrice;

        const borderColor = isTrendPositive ? "#228B22" : "#D22B2B"; 
        const backgroundColor = isTrendPositive
          ? "rgba(74, 222, 128, 0.1)" 
          : "rgba(239, 68, 68, 0.1)";

        setChartColor(borderColor);

        const formattedChart = {
          labels: prices.map((p) => {
            const date = new Date(p[0]);
            if (days === 1) {
              return date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
            }
            return new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
            }).format(date);
          }),
          datasets: [
            {
              label: "Price",
              data: prices.map((p) => p[1]),
              borderColor: borderColor,
              backgroundColor: backgroundColor,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 5,
              borderWidth: 2,
            },
          ],
        };

        setChartData(formattedChart);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id, days, coinData]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return currencyFormatter.format(context.parsed.y);
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          maxTicksLimit: 7,
          maxRotation: 0,
          color: "#9ca3af",
        },
      },
      y: {
        position: "right",
        grid: { display: false, drawBorder: false },
        ticks: {
          color: "#9ca3af",
          callback: (value) =>
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
              style: "currency",
              currency: "USD",
            }).format(value),
        },
      },
    },
  };

  if (loading && !coinData)
    return <p className="p-7 flex items-center justify-center">Loading...</p>;
  if (!coinData)
    return (
      <p className="p-7 text-red-500 flex items-center justify-center">
        Coin Data Not Found
      </p>
    );

  const shortDescription =
    coinData.description?.en?.replace(/<\/?[^>]+(>|$)/g, "") || "";
  const displayDescription =
    shortDescription.length > 400
      ? shortDescription.slice(0, 400) + "..."
      : shortDescription;

  const is24hPositive = coinData.market_data.price_change_percentage_24h >= 0;

  return (
    <div className="p-7 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <img
          src={coinData.image?.small}
          alt={coinData.name}
          className="w-10 h-10"
        />
        <h1 className="text-3xl font-bold">
          {coinData.name} ({coinData.symbol?.toUpperCase()})
        </h1>
      </div>

      <p
        className={`font-medium ${is24hPositive ? "text-green-700" : "text-red-500"}`}
      >
        24h Change:{" "}
        {coinData.market_data.price_change_percentage_24h?.toFixed(2)}%
      </p>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setDays(range.value)}
              style={{
                backgroundColor: days === range.value ? chartColor : "",
                color: days === range.value ? "white" : "",
              }}
              className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${
                days !== range.value ? "text-gray-500 hover:bg-gray-100" : ""
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {chartData ? (
          <div className="h-[400px] w-full">
            <Line data={chartData} options={chartOptions} />
          </div>
        ) : (
          <div className="h-[400px] w-full flex items-center justify-center text-gray-400">
            Loading Chart...
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-sm">Current Price</p>
          <p className="font-semibold">
            ${coinData.market_data.current_price.usd?.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-sm">Market Cap</p>
          <p className="font-semibold">
            ${coinData.market_data.market_cap.usd?.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-sm">24h High</p>
          <p className="font-semibold">
            ${coinData.market_data.high_24h.usd?.toLocaleString()}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-sm">24h Low</p>
          <p className="font-semibold">
            ${coinData.market_data.low_24h.usd?.toLocaleString()}
          </p>
        </div>
      </div>

      {displayDescription && (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>{displayDescription}</p>
        </div>
      )}
    </div>
  );
}
