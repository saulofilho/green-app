import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';
import { ResponsiveLine } from '@nivo/line';
import { parseISO } from 'date-fns';

import { Content, WrapperGraph } from './styles';

export default function Graphs({ allProjectsData }) {
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

  const dateFormatDay = allProjectsData.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt)
        .toISOString()
        .slice(0, 10),
      updatedAt: parseISO(date.createdAt)
        .toISOString()
        .slice(0, 10),
    };
  });

  const graphFormatMonth = dateFormatDay.map(elm => {
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

  const graphFormatDay = dateFormatDay.map(elm => {
    return {
      ...elm,
      day: elm.createdAt,
      value: elm.pot_size,
    };
  });

  return (
    <Content>
      <WrapperGraph>
        <ResponsiveAreaBump
          data={graphFormatMonth}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          spacing={8}
          colors={{ scheme: 'greens' }}
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
        <ResponsiveLine
          data={graphFormatMonth}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </WrapperGraph>
    </Content>
  );
}
