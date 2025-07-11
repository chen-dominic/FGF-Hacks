import { StarIcon, GlobeAltIcon, ArrowTrendingUpIcon, CalendarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

type Props = {
  data: any;
};

export default function MarketAnalysis({ data }: Props) {
  return (
    <section className=" text-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold">📈 Market Analysis</h2>

      {/* Score Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-blue-600 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <StarIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Opportunity Score</div>
          <div className="text-2xl">{data.opportunity_score}/100</div>
        </div>
        <div className="bg-blue-500 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <GlobeAltIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Market Size</div>
          <div className="text-xl">{data.market_size}</div>
        </div>
        <div className="bg-blue-400 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <ArrowTrendingUpIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Growth Trend</div>
          <div className="text-xl">{data.growth_trend}</div>
        </div>
        <div className="bg-blue-300 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <CalendarIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Seasonality</div>
          <div className="text-xl">{data.seasonality}</div>
        </div>
        <div className="bg-blue-200 text-black p-3 rounded-lg text-center col-span-2 sm:col-span-1 hover:scale-105 transition-transform">
          <ShieldCheckIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Competition Level</div>
          <div className="text-xl">{data.competition_level}</div>
        </div>
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <h3 className="text-white font-semibold mb-1">Target Demographics</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm">
            {data.target_demographics.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <h3 className="text-white font-semibold mb-1">Market Insights</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm">
            {data.market_insights.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <h3 className="text-white font-semibold mb-1">Trend Data</h3>
          <p className="text-gray-300 text-sm">🔍 Search Volume: {data.trend_data.search_volume}</p>
          <p className="text-gray-300 text-sm">📈 Growth Rate: {data.growth_trend}</p>
          <p className="text-gray-300 text-sm">📅 Peak Months: {data.trend_data.peak_months.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}