type Props = {
  data: any;
};

export default function PositioningStrategy({ data }: Props) {
  return (
    <section className="text-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold">🎯 Positioning Strategy</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="space-y-4">
          <p><strong className="text-white">Price Tier:</strong> {data.price_tier}</p>
          <p className="text-gray-300 italic border-l-4 border-blue-500 pl-4">{data.positioning_statement}</p>
          <p className="text-gray-300 italic border-l-4 border-blue-500 pl-4">{data.competitive_advantage}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-1">Marketing Channels</h3>
          <div className="flex flex-wrap gap-2">
            {data.marketing_channels.map((item: string, i: number) => (
              <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">{item}</span>
            ))}
          </div>
          <p className="mt-4"><strong className="text-white">Launch Strategy:</strong><br />{data.launch_strategy}</p>
        </div>
      </div>
    </section>
  );
}