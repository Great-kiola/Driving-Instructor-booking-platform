import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomPieChart = ({ data, colors }) => {
  // Inject colors directly into the data
  const chartData = data.map((entry, index) => ({
    ...entry,
    fill: colors[index % colors.length],
  }));

  return (
    <ResponsiveContainer width="100%" height={325}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="status"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
