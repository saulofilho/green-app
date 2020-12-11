import api from './api';

const getProject = id => {
  return api.get(`/project/${id}`);
};
const getProjects = () => {
  return api.get('/projects');
};
const createProjects = data => {
  return api.post('/project', data);
};
const getGreens = () => {
  return api.get('/greens');
};
const createGreen = data => {
  return api.post('/green', data);
};
const upImg = data => {
  return api.post('/imgs', data);
};

// const updateTodo = (id, data) => {
//   return api.put(`/todo/${id}`, data);
// };
// const removeTodo = id => {
//   return api.delete(`/todo/${id}`);
// };

export default {
  getProject,
  getProjects,
  createProjects,
  getGreens,
  createGreen,
  upImg,
};
