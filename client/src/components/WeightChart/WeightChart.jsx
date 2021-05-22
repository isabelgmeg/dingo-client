
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function WeightChart({data}) {

  return ( 
    <LineChart width={300} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="weight" stroke="#18223d" />
    <CartesianGrid stroke="#18223d" strokeDasharray="2 5" />
    <XAxis stroke="#18223d" dataKey="" />
    <YAxis stroke="#18223d"/>
    <Tooltip />
  </LineChart>
  );
}

