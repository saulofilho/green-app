import React, { useState, useEffect } from 'react';

import DataService from '../../services/crudApi';

import { Container, Form } from './styles';

export default function Dashboard() {
  const [greenData, setGreenData] = useState([]);

  const initialFormState = {
    id: '',
    infos: '',
    phases: '',
    ph: '',
    ec: '',
    temp_max: '',
    temp_min: '',
    moisture: '',
    // img: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState);

  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getGreens();

      const { data } = response;

      setGreenData([...data]);
    }

    loadItens();
  }, []);

  const [btnDisable, setBtnDisable] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveItem = async () => {
    await DataService.createGreen(greenData).then(response => {
      setGreenData(response.data);
    });
  };

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
      <h2>green data</h2>
      {greenData.map(item => (
        <div className="" key={item.id}>
          <p>green id: {item.id}</p>
          <p>green project name: {item.project.name}</p>
          <p>green project infos: {item.project.infos}</p>
          <p>green infos: {item.infos}</p>
          <p>green phases: {item.phases}</p>
          <p>green ph: {item.ph}</p>
          <p>green ec: {item.ec}</p>
          <p>green temp_max: {item.temp_max}</p>
          <p>green temp_min: {item.temp_min}</p>
          <p>green moisture: {item.moisture}</p>
          <img src={item.img || 'img null'} alt={item.name} />
        </div>
      ))}
      <Form>
        <label htmlFor="infos">
          Infos
          <textarea
            name="infos"
            id="infos"
            placeholder="Infos..."
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="phases">
          Phase
          <input
            type="text"
            name="phases"
            id="phases"
            placeholder="One, two, three..."
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="ph">
          ph
          <input
            type="text"
            name="ph"
            id="ph"
            placeholder="6.2"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="ec">
          ec
          <input
            type="text"
            name="ec"
            id="ec"
            placeholder="2000"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="temp_max">
          temp_max
          <input
            type="text"
            name="temp_max"
            id="temp_max"
            placeholder="37"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="temp_min">
          temp_min
          <input
            type="text"
            name="temp_min"
            id="temp_min"
            placeholder="20"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="moisture">
          Moisture
          <input
            type="text"
            name="moisture"
            id="moisture"
            placeholder="Wet"
            onChange={handleInputChange}
          />
        </label>
        {/* <label htmlFor="color">
          IMAGE
          <input
            type="text"
            name="img"
            id="img"
            placeholder="img"
            onChange={handleInputChange}
          />
        </label> */}
        <div className="buttons">
          <button
            disabled={!btnDisable}
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              if (
                !currentData.infos ||
                !currentData.phases ||
                !currentData.ph ||
                !currentData.ec ||
                !currentData.temp_max ||
                !currentData.temp_min ||
                !currentData.moisture
              )
                return;

              saveItem(currentData);
              // window.location.reload();
            }}
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}
