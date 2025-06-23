import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'June 18', completed: 2 },
  { date: 'June 19', completed: 5 },
  { date: 'June 20', completed: 3 },
  { date: 'June 21', completed: 7 },
  { date: 'June 22', completed: 4 },
];

export const TaskCompletionChart = () => {
  return (
    <div className="w-full h-64 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Task Completion Over Time</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="completed" stroke="#4ade80" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
