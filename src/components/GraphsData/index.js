import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveStream } from '@nivo/stream';
import { ResponsiveMarimekko } from '@nivo/marimekko';
import { parseISO } from 'date-fns';

import { Content, WrapperGraph } from './styles';

export default function Graphs({ greenData }) {
  const dateFormatMonth = greenData.map(date => {
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

  const dataRename = greenData.map(elm => {
    return { ...elm, id: elm.phase, label: elm.infos, value: elm.ec };
  });

  console.log('dateFormatMonthdateFormatMonthdateFormatMonth', dateFormatMonth);
  console.log('dataRename', dataRename);

  return (
    <Content>
      <WrapperGraph>
        <ResponsiveBar
          data={dateFormatMonth}
          keys={[
            'ph_water',
            'ph_soil',
            'ec',
            'temp_max',
            'temp_min',
            'moisture',
            'air_humidity',
          ]}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'greens' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#17b978',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#a7ff83',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'ph_water',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'ph_soil',
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
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
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
      <WrapperGraph>
        <ResponsiveStream
          data={dateFormatMonth}
          keys={[
            'ph_water',
            'ph_soil',
            'ec',
            'temp_max',
            'temp_min',
            'moisture',
            'air_humidity',
          ]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
          }}
          offsetType="silhouette"
          colors={{ scheme: 'greens' }}
          fillOpacity={0.85}
          borderColor={{ theme: 'background' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#17b978',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#a7ff83',
              rotation: -45,
              lineWidth: 4,
              spacing: 8,
            },
          ]}
          fill={[
            {
              match: {
                id: 'ph_water',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'ph_soil',
              },
              id: 'squares',
            },
          ]}
          dotSize={8}
          dotColor={{ from: 'color' }}
          dotBorderWidth={2}
          dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000000',
                  },
                },
              ],
            },
          ]}
        />
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveMarimekko
          data={dateFormatMonth}
          value="moisture"
          dimensions={[
            {
              id: 'ph of watter',
              value: 'ph_water',
            },
            {
              id: 'ph of soil',
              value: 'ph_soil',
            },
            {
              id: 'temp max',
              value: 'temp_max',
            },
            {
              id: 'temp min',
              value: 'temp_min',
            },
          ]}
          innerPadding={9}
          axisTop={null}
          axisRight={{
            orient: 'right',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
          }}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
          colors={{ scheme: 'greens' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#17b978',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#a7ff83',
              rotation: -45,
              lineWidth: 4,
              spacing: 8,
            },
          ]}
          fill={[
            {
              match: {
                id: 'ph of watter',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'ph of soil',
              },
              id: 'dots',
            },
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 80,
              itemsSpacing: 0,
              itemWidth: 140,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'right-to-left',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'square',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
      </WrapperGraph>
      <WrapperGraph>
        {/* <ResponsiveFunnel
          data={dataRename}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          colors={{ scheme: 'pastel2' }}
          borderWidth={20}
          labelColor={{ from: 'color', modifiers: [['darker', 3]] }}
          beforeSeparatorLength={100}
          beforeSeparatorOffset={20}
          afterSeparatorLength={100}
          afterSeparatorOffset={20}
          currentPartSizeExtension={10}
          currentBorderWidth={40}
          motionConfig="wobbly"
        /> */}
      </WrapperGraph>
    </Content>
  );
}
