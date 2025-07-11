type Props = {
  data: any;
};

export default function ProductConcept({ data }: Props) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-6 shadow-lg space-y-3">
      <h2 className="text-xl font-semibold mb-2">🍞 Product Concept</h2>
      <p className="text-lg font-bold">{data.name}</p>
      <p className="italic text-sm text-gray-400">{data.tagline}</p>
      <p className="text-sm mt-2">{data.description}</p>

      <div>
        <span className="font-semibold">Category:</span> {data.category}<br />
        <span className="font-semibold">Price:</span> ${data.price}<br />
        <span className="font-semibold">Target Audience:</span> {data.target_audience}
      </div>

      <div>
        <h3 className="mt-3 font-semibold">Key Ingredients:</h3>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {data.key_ingredients.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mt-3 font-semibold">Unique Selling Points:</h3>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {data.unique_selling_points.map((usp: string, idx: number) => (
            <li key={idx}>{usp}</li>
          ))}
        </ul>
      </div>

      <p className="mt-3"><strong>Flavor Profile:</strong> {data.flavor_profile}</p>
      <p><strong>Visual Appeal:</strong> {data.visual_appeal}</p>
    </div>
  );
}
