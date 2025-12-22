import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { day: 11, value: 1 },
  { day: 12, value: 0 },
  { day: 13, value: 8 },
  { day: 14, value: 0 },
  { day: 15, value: 2 },
  { day: 16, value: 10 },
  { day: 17, value: 17 },
  { day: 18, value: 8 },
  
];

function ContributionTrend() {
  return (
    <div className="w-full h-[180px]">
      <h3 className="text-sm text-[#d6dedd] mb-3 text-center">
        Contribution Trend
      </h3>

      <ResponsiveContainer>
        
        <LineChart data={data}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--color-primary-lighter))"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ContributionTrend;
