import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from '@nivo/bar';
import { Stream } from '@nivo/stream';
import { Marimekko } from '@nivo/marimekko';
import { Calendar } from '@nivo/calendar';
import { parseISO } from 'date-fns';
import {
  Content,
  WrapperGraph,
  CalendarLegend,
  SelectEdited,
  SelectTitle,
} from './styles';

export default function Graphs({ projectData }) {
  const dateFormatCalendar = projectData.map(date => {
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

  const dateFormatDay = projectData.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('en-US', {
        day: '2-digit',
      }),
    };
  });

  const dateFormatMonth = projectData.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('en-US', {
        month: 'short',
      }),
    };
  });

  const graphFormatDay = dateFormatCalendar.map(elm => {
    return {
      ...elm,
      day: elm.createdAt,
      value: elm.ph_water,
    };
  });

  const monthsSelect = [
    { value: 'Jan', label: 'Jan' },
    { value: 'Feb', label: 'Feb' },
    { value: 'Mar', label: 'Mar' },
    { value: 'Apr', label: 'Apr' },
    { value: 'May', label: 'May' },
    { value: 'Jun', label: 'Jun' },
    { value: 'Jul', label: 'Jul' },
    { value: 'Aug', label: 'Aug' },
    { value: 'Sep', label: 'Sep' },
    { value: 'Out', label: 'Out' },
    { value: 'Nov', label: 'Nov' },
    { value: 'Dec', label: 'Dec' },
  ];

  const [filterMonth, setFilterMonth] = useState([]);
  const handleSelectChange = e => {
    const filteredDates = dateFormatMonth.filter(a => a.createdAt === e.value);
    setFilterMonth(filteredDates);
  };

  return (
    <Content>
      {projectData.length !== 0 ? (
        <>
          <SelectTitle>Filter your data by month.</SelectTitle>
          <SelectEdited
            defaultMenuIsOpen
            options={monthsSelect}
            onChange={handleSelectChange}
          />
          <WrapperGraph>
            <Bar
              width={1500}
              height={500}
              data={filterMonth}
              keys={[
                'ec',
                'temp_max',
                'temp_min',
                'moisture',
                'air_humidity',
                'ph_water',
                'ph_soil',
                'plant_size',
              ]}
              indexBy="id"
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
                    id: 'ec',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'moisture',
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
            <i className="ri-arrow-right-line ri-1x" />
          </WrapperGraph>
          <CalendarLegend>Your whole data.</CalendarLegend>
          <WrapperGraph>
            <Stream
              width="1500"
              height="500"
              data={dateFormatDay}
              keys={[
                'createdAt',
                'ec',
                'temp_max',
                'temp_min',
                'moisture',
                'air_humidity',
                'ph_water',
                'ph_soil',
                'plant_size',
              ]}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
              }}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
                legend: '',
                legendOffset: 31,
                legendPosition: 'middle',
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
                    id: 'moisture',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'ec',
                  },
                  id: 'dots',
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
            <i className="ri-arrow-right-line ri-1x" />
          </WrapperGraph>
          <CalendarLegend>
            ph Water, ph Soil, Temperature Max and Temperature Min.
          </CalendarLegend>
          <WrapperGraph>
            <Marimekko
              width="1500"
              height="500"
              data={dateFormatDay}
              id="id"
              value="id"
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
            <i className="ri-arrow-right-line ri-1x" />
          </WrapperGraph>
          <CalendarLegend>pH Water</CalendarLegend>
          <WrapperGraph>
            <Calendar
              width="1500"
              height="500"
              data={graphFormatDay}
              from="2021-01-01"
              to="2021-12-31"
              emptyColor="#eeeeee"
              colors={['#61cdbb', '#97e3d5', '#a7ff83', '#17b978']}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              yearSpacing={40}
              monthBorderColor="#ffffff"
              dayBorderWidth={2}
              dayBorderColor="#ffffff"
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'row',
                  translateY: 36,
                  itemCount: 4,
                  itemWidth: 42,
                  itemHeight: 36,
                  itemsSpacing: 14,
                  itemDirection: 'right-to-left',
                },
              ]}
            />
            <i className="ri-arrow-right-line ri-1x" />
          </WrapperGraph>
        </>
      ) : (
        <SelectTitle>Graphs and images will be displayed here.</SelectTitle>
      )}
    </Content>
  );
}

Graphs.propTypes = {
  projectData: PropTypes.array,
};

Graphs.defaultProps = {
  projectData: [],
};
