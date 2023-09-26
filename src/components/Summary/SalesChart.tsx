import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ISale } from "../../context/DataContext";

type ISalePerDay = {
  date: string;
  pago: number;
  processando: number;
  falha: number;
};

const mapData = (data: ISale[]): ISalePerDay[] => {
  const days = data.reduce((a: { [key: string]: ISalePerDay }, b) => {
    const day = b.data.split(" ")[0];
    if (!a[day]) {
      a[day] = {
        date: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    a[day][b.status] += b.preco;
    return a;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    date: day.date.substring(5),
  }));
};

const SalesChart = ({ data }: { data: ISale[] }) => {
  const mappedData = mapData(data);

  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={mappedData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#82ca9d" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#8884d8"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#ff7300"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
