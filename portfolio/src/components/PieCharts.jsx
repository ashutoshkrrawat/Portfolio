import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Frontend", value: 85, color: "#14d6d2" },
  { name: "Backend", value: 70, color: "#0f766e" },
  { name: "DSA", value: 65, color: "#134e4a" },
  { name: "UI/UX", value: 75, color: "#5eead4" },
];

const renderLabel = ({ cx, cy, midAngle, outerRadius, name, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#cbd5e1"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={15}
    >
      {name} ({value}%)
    </text>
  );
};

export default function PieChartWithPaddingAngle({
  isAnimationActive = true,
}) {
  return (
    <div className="w-full h-[360px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="55%"
            outerRadius="80%"
            paddingAngle={5}
            cornerRadius={8}
            labelLine
            label={renderLabel}
            isAnimationActive={isAnimationActive}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
