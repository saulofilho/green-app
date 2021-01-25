import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';
import { ResponsiveLine } from '@nivo/line';
import { parseISO } from 'date-fns';

import { Content, WrapperGraph, CalendarLegend } from './styles';

export default function Graphs({ projectsData }) {
  const dateFormatDay = projectsData.map(date => {
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

  const graphFormatMoisture = dateFormatDay.map(elm => {
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
          y: item.moisture,
        };
      }),
    };
  });

  const graphFormatAir = dateFormatDay.map(elm => {
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
          y: item.air_humidity,
        };
      }),
    };
  });

  const graphFormatPhSoil = dateFormatDay.map(elm => {
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
          y: item.ph_soil,
        };
      }),
    };
  });

  const graphFormatPhWater = dateFormatDay.map(elm => {
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
          y: item.ph_water,
        };
      }),
    };
  });

  const populateDataUndefined = graphFormatMoisture.map(elm => {
    return {
      ...elm,
      data: elm.data.length === 0 ? [{ x: 0, y: 0 }] : elm.data,
    };
  });

  return (
    <Content>
      <WrapperGraph>
        <ResponsiveAreaBump
          data={populateDataUndefined}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          spacing={8}
          colors={{ scheme: 'accent' }}
          blendMode="multiply"
          startLabel="id"
          axisTop={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 31,
            legendPosition: 'middle',
          }}
        />
        <CalendarLegend>soil moisture</CalendarLegend>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveLine
          data={graphFormatMoisture}
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
          colors={{ scheme: 'accent' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 31,
            legendPosition: 'middle',
          }}
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
        <CalendarLegend>soil moisture</CalendarLegend>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveLine
          data={graphFormatAir}
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
          colors={{ scheme: 'accent' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 31,
            legendPosition: 'middle',
          }}
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
        <CalendarLegend>air humidity</CalendarLegend>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveLine
          data={graphFormatPhSoil}
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
          colors={{ scheme: 'accent' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 31,
            legendPosition: 'middle',
          }}
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
        <CalendarLegend>ph soil</CalendarLegend>
      </WrapperGraph>
      <WrapperGraph>
        <ResponsiveLine
          data={graphFormatPhWater}
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
          colors={{ scheme: 'accent' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 31,
            legendPosition: 'middle',
          }}
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
        <CalendarLegend>ph water</CalendarLegend>
      </WrapperGraph>
    </Content>
  );
}
