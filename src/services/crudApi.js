import api from './api';

const getGreen = () => {
  return api.get('/green');
};
const getProject = () => {
  return api.get('/project');
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
  getGreen,
  getProject,
  upImg,
};
