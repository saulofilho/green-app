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
const updateGreen = (id, data) => {
  return api.put(`/green/${id}`, data);
};
const upImg = data => {
  return api.post('/imgs', data);
};

// const removeGreen = id => {
//   return api.delete(`/green/${id}`);
// };
// const removeProject = id => {
//   return api.delete(`/project/${id}`);
// };

export default {
  getProject,
  getProjects,
  createProjects,
  getGreens,
  createGreen,
  updateGreen,
  upImg,
};
