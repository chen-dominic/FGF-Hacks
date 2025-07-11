type Props = {
  data: any;
};

export default function SuccessMetrics({ data }: Props) {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-6 shadow-lg space-y-3">
      <h2 className="text-xl font-semibold mb-2">💰 Success Metrics</h2>
      <p><strong>Target Daily Sales:</strong> {data.target_daily_sales} units</p>
      <p><strong>Break Even Units:</strong> {data.break_even_units}</p>
      <p><strong>Projected Monthly Revenue:</strong> ${data.projected_monthly_revenue.toLocaleString()}</p>
      <p><strong>Customer Acquisition Target:</strong> {data.customer_acquisition_target}</p>
    </div>
  );
}
