type Props = {
  data: any;
};

export default function PositioningStrategy({ data }: Props) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-6 shadow-lg space-y-3">
      <h2 className="text-xl font-semibold mb-2">🎯 Positioning Strategy</h2>
      <p><strong>Price Tier:</strong> {data.price_tier}</p>
      <p><strong>Positioning Statement:</strong> {data.positioning_statement}</p>
      <p><strong>Competitive Advantage:</strong> {data.competitive_advantage}</p>

      <div>
        <h3 className="font-semibold">Marketing Channels:</h3>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {data.marketing_channels.map((channel: string, idx: number) => (
            <li key={idx}>{channel}</li>
          ))}
        </ul>
      </div>

      <p><strong>Launch Strategy:</strong> {data.launch_strategy}</p>
    </div>
  );
}
