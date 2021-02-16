import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DataService from '../../services/crudApi';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Container } from './styles';

export default function CalendarComponent() {
  const [, setStatus] = useState('Idle.');
  const [calendarData, setAllProjectData] = useState([]);

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

  const fetchData = async () => {
    setStatus('Fetching...');

    const response = await DataService.getCalendar();

    const { data } = response;

    setAllProjectData([...data]);
    setStatus('Fetched.');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calendarDataRename = calendarData.map(item => {
    return {
      ...item,
      allDay: item.all_day,
      end: new Date(item.end),
      start: new Date(item.start),
    };
  });

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
        onSelectEvent={event => alert(event.title)}
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

// // create
// const [btnDisable, setBtnDisable] = useState('');

// const handleInputChange = e => {
//   const { name, value } = e.target;
//   setBtnDisable(e.target.value);
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
