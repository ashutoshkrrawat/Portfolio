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
  { day: 15, value: 18 },
  { day: 16, value: 16 },
  { day: 17, value: 15 },
  { day: 18, value: 24 },
  { day: 19, value: 20 },
  { day: 20, value: 20 },
  { day: 21, value: 17 },
  { day: 22, value: 8 },
  { day: 23, value: 10 },
  { day: 24, value: 6 },
  { day: 25, value: 6 },
  { day: 26, value: 6 },
  { day: 27, value: 6 },
  { day: 28, value: 7 },
  { day: 29, value: 12 },
];

function ContributionTrend() {
  return (
    <div className="h-[260px]">
      <h3 className="text-sm text-[#14d6d2] mb-3 text-center">
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
            stroke="#5eead4"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ContributionTrend;
