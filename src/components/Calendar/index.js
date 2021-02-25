/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Container } from './styles';

export default function CalendarComponent({
  calendarData,
  setCalendarData,
  projectId,
}) {
  const [events, setEvents] = useState();
  // const [draggedEvent, setDraggedEvent] = useState();
  // const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);

  // console.log('events', events);
  // console.log('calendarData', calendarData);

  const locales = {
    'en-US': require('date-fns/locale/en-US'),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const DragAndDropCalendar = withDragAndDrop(Calendar);

  const calendarDataRename = calendarData.map(item => {
    return {
      ...item,
      allDay: item.all_day,
      end: new Date(item.end),
      start: new Date(item.start),
    };
  });

  const initialFormState = {
    project_id: projectId,
    id: '',
    all_day: '',
    end: '',
    start: '',
    title: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState);

  // console.log('currentData', currentData);

  function onEventResize(data) {
    const { start, end, title } = data;

    // console.log('onEventResize', data);
    setCurrentData(prevState => ({
      ...prevState,
      start,
      end,
      title,
      all_day: false,
    }));

    return { events: [...events] };
  }

  function onEventDrop({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    // console.log('drop', event);

    let { allDay } = event;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const nextEvents = calendarDataRename.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    // console.log('nextEvents', nextEvents);

    setCurrentData(nextEvents);
  }

  function handleSelect({ start, end }) {
    const title = window.prompt('New Event name');

    // console.log('handleSelect', start);
    if (title)
      setCurrentData(prevState => ({
        ...prevState,
        start,
        end,
        title,
        all_day: false,
      }));
  }

  return (
    <Container>
      <DragAndDropCalendar
        localizer={localizer}
        events={calendarDataRename}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: 720, width: '100%' }}
        selectable
        resizable
        defaultView={Views.MONTH}
        defaultDate={new Date()}
        showMultiDayTimes
        popup
        onEventResize={onEventResize}
        onEventDrop={onEventDrop}
        // onSelectEvent={event => alert(event.title)}
        // onEventDrop={() => moveEvent}
        // onEventResize={() => resizeEvent}
        onSelectSlot={handleSelect}
        // onDragStart={console.log}
        // dragFromOutsideItem={
        //   displayDragItemInCell ? dragFromOutsideItem() : null
        // }
        // onDropFromOutside={() => onDropFromOutside()}
        // handleDragStart={() => handleDragStart()}
      />
    </Container>
  );
}

// https://jquense.github.io/react-big-calendar/examples/index.html

// // data
// const [todos, setTodos] = useState([]);

// // initial form state
// const initialFormState = {
//   id: '',
//   todo_title: '',
//   todo_text: '',
//   todo_done: true,
// };

// const handleInputChange = e => {
//   const { name, value } = e.target;
//   setCurrentTodo(prevState => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// const saveTodo = async () => {
//   await DataService.createTodo(currentTodo).then(response => {
//     setCurrentTodo(response.data);
//   });
// };

// // update
// const updateTodo = async (id, updatedContact) => {
//   await DataService.updateTodo(currentTodo.id, currentTodo).then(response => {
//     setTodos(todos.map(todo => (todo.id === id ? updatedContact : todo)));
//   });
//   window.location.reload();
// };

// // edit
// const editRow = todo => {
//   toggleSecondModal();
//   setCurrentTodo(todo);
// };

// // delete
// const deleteTodo = async id => {
//   await DataService.removeTodo(id).then(response => {
//     setTodos(todos.filter(todo => todo.id !== todos.id));
//   });
// };
