type Props = {
  data: any;
};

export default function MarketAnalysis({ data }: Props) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-6 shadow-lg space-y-3">
      <h2 className="text-xl font-semibold mb-2">📈 Market Analysis</h2>
      <p><strong>Opportunity Score:</strong> {data.opportunity_score}/100</p>
      <p><strong>Market Size:</strong> {data.market_size}</p>
      <p><strong>Growth Trend:</strong> {data.growth_trend}</p>
      <p><strong>Seasonality:</strong> {data.seasonality}</p>
      <p><strong>Competition Level:</strong> {data.competition_level}</p>

      <div>
        <h3 className="font-semibold">Target Demographics:</h3>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {data.target_demographics.map((demo: string, idx: number) => (
            <li key={idx}>{demo}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Market Insights:</h3>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {data.market_insights.map((insight: string, idx: number) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Trend Data:</h3>
        <p><strong>Search Volume:</strong> {data.trend_data.search_volume}</p>
        <p><strong>Growth Rate:</strong> {data.trend_data.growth_rate}</p>
        <p><strong>Peak Months:</strong> {data.trend_data.peak_months.join(", ")}</p>
      </div>
    </div>
  );
}
