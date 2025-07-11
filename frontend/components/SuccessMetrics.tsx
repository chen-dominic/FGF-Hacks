import { ShoppingCartIcon, CalculatorIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';

type Props = {
  data: any;
};

export default function SuccessMetrics({ data }: Props) {
  return (
    <section className="text-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold">📊 Success Metrics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-600 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <ShoppingCartIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Target Daily Sales</div>
          <CountUp end={data.target_daily_sales} duration={2} className="text-2xl" />
        </div>
        <div className="bg-green-500 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <CalculatorIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Break Even Units</div>
          <CountUp end={data.break_even_units} duration={2} className="text-2xl" />
        </div>
        <div className="bg-green-400 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <CurrencyDollarIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Monthly Revenue</div>
          <CountUp end={data.projected_monthly_revenue} duration={2} prefix="$" className="text-2xl" />
        </div>
        <div className="bg-green-300 p-3 rounded-lg text-center hover:scale-105 transition-transform">
          <UserGroupIcon className="h-6 w-6 mx-auto mb-2" />
          <div className="text-sm">Customer Target</div>
          <CountUp end={data.customer_acquisition_target} duration={2} className="text-2xl" />
        </div>
      </div>
    </section>
  );
}