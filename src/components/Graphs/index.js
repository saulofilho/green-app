import React from 'react';
import {
  LineChart,
  Line as LineRecharts,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Bar,
  BarChart,
  Legend,
  Tooltip,
  ComposedChart,
  Scatter,
} from 'recharts';
import { parseISO } from 'date-fns';

import { Content } from './styles';

export default function Graphs({ greenData }) {
  const dateFormatMonth = greenData.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('en-US'),
      updatedAt: parseISO(date.createdAt).toLocaleString('default', {
        weekday: 'long',
        day: '2-digit',
      }),
    };
  });

  return (
    <Content>
      <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
        <LineChart data={dateFormatMonth}>
          <LineRecharts type="monotone" dataKey="ph" stroke="#8884d8" />
          <LineRecharts type="monotone" dataKey="ec" stroke="#4484d8" />
          <LineRecharts type="monotone" dataKey="moisture" stroke="#1133d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
        <AreaChart data={dateFormatMonth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ph"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="ec"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="moisture"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
        <BarChart data={dateFormatMonth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp_max" stackId="a" fill="#8884d8" />
          <Bar dataKey="temp_min" stackId="a" fill="#82ca9d" />
          <Bar dataKey="moisture" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
        <ComposedChart data={dateFormatMonth}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="ph" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="ec" barSize={20} fill="#413ea0" />
          <LineRecharts type="monotone" dataKey="moisture" stroke="#ff7300" />
          <Scatter dataKey="temp_max" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </Content>
  );
}
