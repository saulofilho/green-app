import api from './api';

const getHarvest = (id, page) => {
  return api.get(`/harvest/${id}?page=${page}`);
};
const getHarvests = () => {
  return api.get('/harvests');
};
const createProjects = data => {
  return api.post('/harvest', data);
};
const removeProject = id => {
  return api.delete(`/harvest/${id}`);
};
const editProject = (id, data) => {
  return api.put(`/harvest/${id}`, data);
};
const createGreen = data => {
  return api.post('/green', data);
};
const updateGreen = (id, data) => {
  return api.put(`/green/${id}`, data);
};
const deleteCalendar = id => {
  return api.delete(`/calendar/${id}`);
};
const updateCalendar = (id, data) => {
  return api.put(`/calendar/${id}`, data);
};
const createCalendar = data => {
  return api.post('/calendar', data);
};

export default {
  getHarvest,
  getHarvests,
  createProjects,
  createGreen,
  updateGreen,
  removeProject,
  editProject,
  // getCalendar,
  deleteCalendar,
  updateCalendar,
  createCalendar,
};
