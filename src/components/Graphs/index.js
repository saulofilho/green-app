import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveAreaBump } from '@nivo/bump';
// import { parseISO } from 'date-fns';

import { Content, WrapperGraph } from './styles';

export default function Graphs({ greenData }) {
  // const dateFormatMonth = greenData.map(date => {
  //   return {
  //     ...date,
  //     createdAt: parseISO(date.createdAt).toLocaleString('en-US'),
  //     updatedAt: parseISO(date.createdAt).toLocaleString('default', {
  //       weekday: 'long',
  //       day: '2-digit',
  //     }),
  //   };
  // });

  console.log('greeeeeeeeeen', greenData);

  const dataTeste = [
    {
      id: 'JavaScript',
      data: [
        {
          x: 2000,
          y: 16,
        },
        {
          x: 2001,
          y: 11,
        },
        {
          x: 2002,
          y: 30,
        },
        {
          x: 2003,
          y: 20,
        },
        {
          x: 2004,
          y: 12,
        },
        {
          x: 2005,
          y: 10,
        },
      ],
    },
    {
      id: 'ReasonML',
      data: [
        {
          x: 2000,
          y: 30,
        },
        {
          x: 2001,
          y: 13,
        },
        {
          x: 2002,
          y: 25,
        },
        {
          x: 2003,
          y: 26,
        },
        {
          x: 2004,
          y: 15,
        },
        {
          x: 2005,
          y: 19,
        },
      ],
    },
  ];

  return (
    <Content>
      <WrapperGraph>
        <ResponsiveAreaBump
          data={dataTeste}
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
                id: 'JavaScript',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'ReasonML',
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
        <ResponsiveBar
          data={dataTeste}
          keys={['JavaScript', 'ReasonML']}
          indexBy="id"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
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
                id: 'JavaScript',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'ReasonML',
              },
              id: 'lines',
            },
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'x',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'y',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate
          motionStiffness={90}
          motionDamping={15}
        />
      </WrapperGraph>
    </Content>
  );
}
