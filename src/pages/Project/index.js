import React, { useState, useEffect } from 'react';

import DataService from '../../services/crudApi';

import {
  Container,
  Content,
  Form,
  WrapperContent,
  WrapperData,
  WrapperDataAdd,
  Dia,
} from './styles';

export default function Project(props) {
  const [projectData, setProjectData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggledAdd, setIsToggledAdd] = useState(false);
  const [projectDataFiltered, setProjectDataFiltered] = useState([]);

  useEffect(() => {
    const loadItens = async id => {
      await DataService.getProject(id).then(response => {
        const { data } = response;
        setProjectData([data]);

        const dataFiltered = greenData.filter(
          item => item.project_id === data.id
        );

        setProjectDataFiltered(dataFiltered);
      });
    };

    loadItens(props.match.params.id);
  }, [props, greenData]);

  // GREEN DATA
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

  const toggle = id => {
    setIsToggled(isToggled === id ? false : id);
  };

  const toggleAdd = () => {
    setIsToggledAdd(!isToggledAdd);
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

  return (
    <Container>
      <Content>
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
      </Content>
      <Content>
        {projectDataFiltered.map(item => (
          <WrapperContent key={item.id}>
            <Dia onClick={() => toggle(item.id)}>Dia: {item.id}</Dia>
            <WrapperData hide={isToggled === item.id}>
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
            </WrapperData>
          </WrapperContent>
        ))}
        <WrapperContent>
          <Dia onClick={() => toggleAdd()}>Add</Dia>
          <WrapperDataAdd hideAdd={isToggledAdd}>
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
          </WrapperDataAdd>
        </WrapperContent>
      </Content>
    </Container>
  );
}
