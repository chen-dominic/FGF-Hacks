import { LightBulbIcon, ExclamationCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

type Props = {
  data: any;
};

export default function RisksAndOpportunities({ data }: Props) {
  return (
    <section className="text-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold">⚠️ Risks & Opportunities</h2>

      <div>
        <h3 className="text-green-400 font-semibold mb-2">Opportunities</h3>
        <ul className="list-none text-sm text-gray-300 space-y-2">
          {data.opportunities.map((op: string, idx: number) => (
            <li key={idx} className="flex items-center">
              <LightBulbIcon className="h-5 w-5 text-green-400 mr-2" /> {op}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-orange-400 font-semibold mb-2">Risks</h3>
        <ul className="list-none text-sm text-gray-300 space-y-2">
          {data.risks.map((risk: string, idx: number) => (
            <li key={idx} className="flex items-center">
              <ExclamationCircleIcon className="h-5 w-5 text-orange-400 mr-2" /> {risk}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-blue-400 font-semibold mb-2">Mitigation Strategies</h3>
        <ul className="list-none text-sm text-gray-300 space-y-2">
          {data.mitigation_strategies.map((strategy: string, idx: number) => (
            <li key={idx} className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2" /> {strategy}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}