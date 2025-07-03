import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const priorityData = [
  { name: 'High', value: 12 },
  { name: 'Medium', value: 20 },
  { name: 'Low', value: 10 },
];

const COLORS = ['#ef4444', '#facc15', '#3b82f6']; // red, yellow, blue

export const PriorityPieChart = () => {
  return (
    <div className="w-full h-[95%]">
      {/* <h2 className="text-lg font-semibold mb-2">Task Priority Distribution</h2> */}
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={priorityData}
            cx="50%"
            cy="50%"
            outerRadius={65}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {priorityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
