import DropdownSection from "@/components/DropdownSection";
import { TagIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

type Props = {
  data: any;
};

export default function ProductConcept({ data }: Props) {
  return (
    <section className="text-white p-6 rounded-2xl shadow-md space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="italic text-sm text-gray-400">{data.tagline}</p>
        <p className="text-gray-300 max-w-4xl mx-auto mt-4 text-justify">{data.description}</p>
      </div>

      {/* Highlight Tiles */}
      <div className="flex items-stretch justify-around gap-10 max-w-4xl mx-auto">
        <div className="bg-blue-600 text-white p-4 rounded-xl font-bold flex-1 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <TagIcon className="h-6 w-6 mb-2" />
          <div className="text-sm font-medium">Category</div>
          <div className="text-2xl">{data.category}</div>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-xl font-bold flex-1 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <CurrencyDollarIcon className="h-6 w-6 mb-2" />
          <div className="text-sm font-medium">Price</div>
          <div className="text-2xl">${data.price}</div>
        </div>
        <div className="bg-orange-600 text-white p-4 rounded-xl font-bold flex-1 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <UserGroupIcon className="h-6 w-6 mb-2" />
          <div className="text-sm font-medium">Target</div>
          <div className="text-2xl text-center">{data.target_audience}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          <DropdownSection title="Key Ingredients">
            <ul className="list-disc list-inside">
              {data.key_ingredients.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </DropdownSection>

          <DropdownSection title="Unique Selling Points">
            <ul className="list-disc list-inside">
              {data.unique_selling_points.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </DropdownSection>
        </div>

        <div className="space-y-4">
          <DropdownSection title="Flavour Profile">
            <p>{data.flavor_profile}</p>
          </DropdownSection>

          <DropdownSection title="Visual Appeal">
            <p>{data.visual_appeal}</p>
          </DropdownSection>
        </div>
      </div>
    </section>
  );
}