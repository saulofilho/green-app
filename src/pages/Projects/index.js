import React, { useState, useEffect } from 'react';

import DataService from '../../services/crudApi';

import { Container, Form } from './styles';

export default function Dashboard() {
  const [projectData, setProjectData] = useState([]);

  const initialFormState = {
    id: '',
    name: '',
    infos: '',
    tools: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState);

  // get
  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getProjects();

      const { data } = response;

      setProjectData([...data]);
    }

    loadItens();
  }, []);

  const [btnDisable, setBtnDisable] = useState('');

  // save
  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveItem = async () => {
    await DataService.createProjects(currentData).then(response => {
      setCurrentData(response.data);
    });
  };

  // const updateItem = async (id, updatedContact) => {
  //   await DataService.updateProducts(currentData.id, currentData).then(
  //     response => {
  //       setItens(itens.map(item => (item.id === id ? updatedContact : item)));
  //     }
  //   );
  //   window.location.reload();
  // };

  // const editRow = item => {
  //   toggleSecondModal();
  //   setcurrentData(item);
  // };

  // const deleteItem = async id => {
  //   await DataService.removeProducts(id).then(response => {
  //     setItens(itens.filter(item => item.id !== itens.id));
  //   });
  // };

  // search
  // const [searchValue, setSearchValue] = useState('');

  // const handleSearchInputChanges = e => {
  //   setSearchValue(e.target.value);
  // };

  // const results = !searchValue
  //   ? itens
  //   : itens.filter(item =>
  //       item.product_name.toLowerCase().includes(searchValue.toLowerCase())
  //     );

  return (
    <Container>
      <h1>dash</h1>
      <br />
      <br />
      <h2>project data</h2>
      {projectData.map(item => (
        <div className="" key={item.id + item.name}>
          <p>project id: {item.id}</p>
          <p>project name: {item.name}</p>
          <p>project infos: {item.infos}</p>
          <p>project tools: {item.tools}</p>
        </div>
      ))}
      <Form>
        <label htmlFor="name">
          Project Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Bola"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="info">
          Infos
          <textarea
            name="infos"
            id="infos"
            placeholder="Infos..."
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="tools">
          Tools
          <input
            type="text"
            name="tools"
            id="tools"
            placeholder="One, two, three..."
            onChange={handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            disabled={!btnDisable}
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              if (!currentData.name || !currentData.infos || !currentData.tools)
                return;

              saveItem(currentData);
              window.location.reload();
            }}
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}
