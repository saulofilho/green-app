/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { toast } from 'react-toastify';
import ModalAddCalendar from '../ModalAddCalendar';
import ModalInfosCalendar from '../ModalInfosCalendar';
import DataService from '../../services/crudApi';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Container } from './styles';

export default function CalendarComponent({ calendarData, projectId }) {
  const DragAndDropCalendar = withDragAndDrop(Calendar);
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(null);
  const [draggedEvent, setDraggedEvent] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

  const calendarDataRename = calendarData.map(item => {
    return {
      ...item,
      allDay: item.all_day,
      end: new Date(item.end),
      start: new Date(item.start),
    };
  });

  const [events, setEvents] = useState([...calendarDataRename]);

  const initialFormState = {
    project_id: projectId,
    all_day: '',
    end: '',
    start: '',
    title: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState);
  console.log('eventseventsevents', currentData);

  function handleSelect() {
    const modalAdd = openModal();

    if (modalAdd)
      setTimeout(() => {
        setCurrentData();
      }, 2000);
  }

  function moveEvent({ event, start, end }) {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);

    setCurrentData(event);
    console.log('moveEvent', event);
  }

  function resizeEvent({ event, start, end }) {
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setEvents(nextEvents);

    setCurrentData(event);
    console.log('resizeEvent', event);
  }

  function handleDragStart(event) {
    setDisplayDragItemInCell(event);
    console.log('handleDragStart', event);
  }

  function dragFromOutsideItem(event) {
    setDraggedEvent();
    console.log('dragFromOutsideItem', event);
  }

  function onDropFromOutside({ start, end, allDay }) {
    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay,
    };

    setDraggedEvent(null);
    moveEvent({ event, start, end });
    console.log('onDropFromOutside', event);
  }

  function showEventInfos(event) {
    setCurrentData(event);
    setModalIsOpen(true);
  }

  const saveDate = async () => {
    await DataService.createCalendar(currentData)
      .then(response => {
        setCurrentData(response.data);
        toast.success('Saved successfully.');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(err => {
        toast.error('Something went wrong.');
        console.log('err', err.message);
      });
  };

  return (
    <Container>
      <DragAndDropCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: 720, width: '100%' }}
        selectable
        resizable
        defaultView={Views.MONTH}
        defaultDate={new Date()}
        showMultiDayTimes
        popup
        scrollToTime={new Date()}
        onSelectEvent={showEventInfos}
        step={30}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onSelectSlot={handleSelect}
        onDragStart={console.log}
        dragFromOutsideItem={displayDragItemInCell ? dragFromOutsideItem : null}
        onDropFromOutside={onDropFromOutside}
        handleDragStart={handleDragStart}
      />
      <ModalAddCalendar
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentData={currentData}
        setCurrentData={setCurrentData}
        saveDate={saveDate}
      />
      <ModalInfosCalendar
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentData={currentData}
      />
    </Container>
  );
}

// https://www.w3schools.com/tags/att_input_type_time.asp
// https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback
// https://reactjsexample.com/simple-react-time-input-field/

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
