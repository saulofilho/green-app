import React, { useState, useEffect } from 'react';

import DataService from '../../services/crudApi';

import { Container } from './styles';

export default function Dashboard() {
  const [greenData, setGreenData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  // const initialFormState = {
  //   id: '',
  //   name: '',
  //   infos: '',
  //   user_id: '',
  //   user: '',
  // };

  // const [currentData, setCurrentData] = useState(initialFormState);

  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getProject();

      const { data } = response;

      setProjectData([...data]);
    }

    loadItens();
  }, []);

  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getGreen();

      const { data } = response;

      setGreenData([...data]);
    }

    loadItens();
  }, []);

  // const [btnDisable, setBtnDisable] = useState('');

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   setBtnDisable(e.target.value);
  //   setCurrentItem(prevState => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const saveItem = async () => {
  //   await DataService.createProducts(currentItem).then(response => {
  //     setCurrentItem(response.data);
  //   });
  // };

  // const updateItem = async (id, updatedContact) => {
  //   await DataService.updateProducts(currentItem.id, currentItem).then(
  //     response => {
  //       setItens(itens.map(item => (item.id === id ? updatedContact : item)));
  //     }
  //   );
  //   window.location.reload();
  // };

  // const editRow = item => {
  //   toggleSecondModal();
  //   setCurrentItem(item);
  // };

  // const deleteItem = async id => {
  //   await DataService.removeProducts(id).then(response => {
  //     setItens(itens.filter(item => item.id !== itens.id));
  //   });
  // };

  return (
    <Container>
      <h1>dash</h1>
      <br />
      <br />
      <h2>project data</h2>
      {projectData.map(item => (
        <div className="" key={item.id + item.name}>
          <p>project id: {item.id}</p>
          <p>project infos: {item.infos}</p>
          <p>project name: {item.name}</p>
          <p>project user name: {item.user.name}</p>
          <p>project user email: {item.user.email}</p>
          <p>project user id: {item.user_id}</p>
          <br />
          <br />
        </div>
      ))}
      <br />
      <br />
      <h2>green data</h2>
      {greenData.map(item => (
        <div className="" key={item.id + item.name}>
          <p>green id: {item.id}</p>
          <p>green ec: {item.ec}</p>
          <p>green infos: {item.infos}</p>
          <p>green moisture: {item.moisture}</p>
          <p>green ph: {item.ph}</p>
          <p>green phases: {item.phases}</p>
          <img src={item.img || 'img null'} alt={item.name} />
          <p>green project id: {item.project.id}</p>
          <p>green project infos: {item.project.infos}</p>
          <p>green project name: {item.project.name}</p>
          <br />
          <br />
        </div>
      ))}
      <br />
      <br />
    </Container>
  );
}
