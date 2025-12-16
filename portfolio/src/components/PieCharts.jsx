import { Pie, PieChart, ResponsiveContainer } from "recharts";

// Sample data
const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {
  return (
    <div style={{ width: "100%", maxWidth: "500px", height: "400px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            paddingAngle={5}
            isAnimationActive={isAnimationActive}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} 
