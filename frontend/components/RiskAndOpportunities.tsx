type Props = {
  data: any;
};

export default function RisksAndOpportunities({ data }: Props) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-6 shadow-lg space-y-3">
      <h2 className="text-xl font-semibold mb-2">⚠️ Risks & Opportunities</h2>

      <div>
        <h3 className="font-semibold">Opportunities:</h3>
        <ul className="list-disc list-inside text-sm text-green-400">
          {data.opportunities.map((op: string, idx: number) => (
            <li key={idx}>{op}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-red-400">Risks:</h3>
        <ul className="list-disc list-inside text-sm text-red-400">
          {data.risks.map((risk: string, idx: number) => (
            <li key={idx}>{risk}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Mitigation Strategies:</h3>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {data.mitigation_strategies.map((strategy: string, idx: number) => (
            <li key={idx}>{strategy}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
