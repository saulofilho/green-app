import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ComposedChart,
  Area,
  Bar,
  Cell,
  BarChart,
  AreaChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  PolarGrid,
  RadialBarChart,
  RadialBar,
  ReferenceLine,
} from 'recharts';
import { parseISO } from 'date-fns';

import { Content, WrapperGraph } from './styles';

export default function Graphs({ greenData, allProjectsData }) {
  const dateFormatMonth = allProjectsData.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('en-US', {
        weekday: 'long',
        day: '2-digit',
      }),
      updatedAt: parseISO(date.createdAt).toLocaleString('en-US', {
        weekday: 'long',
        day: '2-digit',
      }),
    };
  });

  const x = dateFormatMonth.map(item => item.green).flat();

  console.log('allProjectsDataallProjectsData', x);

  return (
    <Content>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={dateFormatMonth}>
            <Line type="monotone" dataKey='pot_size' stroke="red" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="harvest_name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart>
            <Pie
              data={dateFormatMonth}
              dataKey="pot_size"
              outerRadius={110}
              fill="lightblue"
              stroke="white"
              label={{ fill: 'gray', fontSize: '12px' }}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="99%" height={40}>
          <AreaChart data={dateFormatMonth}>
            <Area dataKey="pot_size" stroke="red" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <AreaChart
            data={dateFormatMonth}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid />
            <XAxis dataKey="pot_size" />
            <YAxis />
            <Tooltip />
            <defs>
              {/* <DefAreaValueColor
                id="splitColor"
                data={props.itens}
                positiveColor="red"
                negativeColor="ping"
              /> */}
            </defs>
            <Area dataKey="pot_size" stroke="red" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            data={dateFormatMonth}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="pot_size" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pot_size"
              stackId="a"
              fill="#8884d8"
              barSize={5}
            />
            <Bar
              dataKey="product_price"
              stackId="a"
              fill="#8884d8"
              barSize={5}
            />
          </BarChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <RadarChart outerRadius={150} data={dateFormatMonth}>
            <PolarGrid stroke="#8884d8" />
            <PolarAngleAxis dataKey="pot_size" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="pot_size"
              stroke="red"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Radar
              name="Lily"
              dataKey="product_price"
              stroke="blue"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <ComposedChart
            data={dateFormatMonth}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid />
            <XAxis dataKey="pot_size" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area dataKey="pot_size" fill="red" stroke="red" />
            <Bar dataKey="pot_size" barSize={5} fill="red" />
            <Line dataKey="pot_size" stroke="white" activeDot={{ r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </WrapperGraph>
      <WrapperGraph>

      </WrapperGraph>
    </Content>
  );
}
