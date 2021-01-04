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
  BarChart,
  AreaChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  PolarGrid,
} from 'recharts';
import { ResponsiveAreaBump } from '@nivo/bump';
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

  const dataRename = dateFormatMonth.map(elm => {
    return {
      ...elm,
      id: elm.harvest_name,
      data: elm.green.map(item => {
        return {
          ...item,
          x: parseISO(item.createdAt).toLocaleString('en-US', {
            weekday: 'long',
            day: '2-digit',
          }),
          y: item.temp_max,
        };
      }),
    };
  });

  return (
    <Content>
      <WrapperGraph>
        <ResponsiveAreaBump
          data={dataRename}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          spacing={8}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'The Greenable',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'Coco Loko',
              },
              id: 'lines',
            },
          ]}
          startLabel="id"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
        />
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={allProjectsData}>
            <Line type="monotone" dataKey="id" stroke="red" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ec" />
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
            <Bar dataKey="pot_size" stackId="a" fill="#8884d8" barSize={5} />
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
      <WrapperGraph />
    </Content>
  );
}
