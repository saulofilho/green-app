import React, { useState, useEffect } from 'react';
import DataService from '../../services/crudApi';
import ImgInput from './ImgInput';
import 'remixicon/fonts/remixicon.css';
import Select from 'react-select';
import {
  Container,
  Content,
  Form,
  WrapperContent,
  WrapperData,
  WrapperDataAdd,
  DayWrapper,
  AddWrapper,
  Row,
  RowDay,
  Col,
  ColDay,
  WrapperInfos,
  Number,
  RowDayWrapper,
  BorderLeft,
  BorderBotAndLeft,
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
    project_id: props.match.params.id,
    id: '',
    infos: '',
    phase: '',
    ph: '',
    ec: '',
    temp_max: '',
    temp_min: '',
    moisture: '',
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
    await DataService.createGreen(currentData).then(response => {
      setCurrentData(response.data);
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

  // https://fontawesome.com/
  // https://tablericons.com/
  // https://systemuicons.com/

  const phase = [
    'germination',
    'vegetation',
    'flowering',
    'washing',
    'drying',
    'cured',
  ];

  const badgeTheme = status => {
    let theme;
    switch (status) {
      case 'germination':
        theme = 'germination';
        break;
      case 'vegetation':
        theme = 'vegetation';
        break;
      case 'flowering':
        theme = 'flowering';
        break;
      case 'washing':
        theme = 'washing';
        break;
      case 'drying':
        theme = 'drying';
        break;
      case 'cured':
        theme = 'cured';
        break;
      default:
        theme = 'none';
        break;
    }
    return theme;
  };

  return (
    <Container>
      <Content>
        {projectData.map(item => (
          <div className="" key={item.id + item.name}>
            <h1>{item.harvest_name}</h1>
            <br />
            <p>Strain: {item.strain_name}</p>
            <p>Breeder: {item.breeder}</p>
            <br />
            <p>{item.infos}</p>
            <p>Tools: {item.tools}</p>
            <p>Soil: {item.soil}</p>
            <p>Nutrients: {item.nutrients}</p>
            <p>Pot Size: {item.pot_size}</p>
            <p>Light Schedule: {item.light_schedule}</p>
          </div>
        ))}
      </Content>
      <Content>
        {projectDataFiltered.map((item, index) => (
          <WrapperContent key={item.id}>
            <DayWrapper onClick={() => toggle(item.id)}>
              <RowDayWrapper theme={badgeTheme(item.phase)}>
                <Number>{index + 1}</Number>
                <ColDay>
                  <RowDay>
                    <BorderBotAndLeft>
                      <p>TEMPERATURE MAX:</p>
                      <p>{item.temp_max}</p>
                    </BorderBotAndLeft>
                  </RowDay>
                  <RowDay>
                    <BorderLeft>
                      <p>TEMPERATURE MIN:</p>
                      <p>{item.temp_min}</p>
                    </BorderLeft>
                  </RowDay>
                </ColDay>
                <ColDay>
                  <RowDay>
                    <BorderBotAndLeft>
                      <p>PHASE:</p>
                      <p>{item.phase}</p>
                    </BorderBotAndLeft>
                  </RowDay>
                  <RowDay>
                    <BorderLeft>
                      <p>PH Water:</p>
                      <p>{item.ph_water}</p>
                    </BorderLeft>
                    <BorderLeft>
                      <p>PH Soil:</p>
                      <p>{item.ph_water}</p>
                    </BorderLeft>
                  </RowDay>
                </ColDay>
              </RowDayWrapper>
            </DayWrapper>
            <WrapperData hide={isToggled === item.id}>
              <Row>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>Infos: </p>
                    <p>
                      <strong>{item.infos}</strong>
                    </p>
                  </Col>
                </WrapperInfos>
              </Row>
              <Row>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>Phase: </p>
                    <p>{item.phase}</p>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>PH Water: </p>
                    <p>{item.ph_water}</p>
                    <p>PH Soil: </p>
                    <p>{item.ph_soil}</p>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>EC: </p>
                    <p>{item.ec} PPM</p>
                  </Col>
                </WrapperInfos>
              </Row>
              <Row>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>Temperature Max: </p>
                    <p>{item.temp_max} °C</p>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>Temperature Min: </p>
                    <p>{item.temp_min} °C</p>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-home-line ri-3x" />
                  <Col>
                    <p>Soil Moisture: </p>
                    <p>{item.moisture} %</p>
                    <p>Air Humidity: </p>
                    <p>{item.air_humidity} %</p>
                  </Col>
                </WrapperInfos>
              </Row>
              <img
                src={item.img === null ? 'No image.' : item.img.url}
                alt={item.name}
              />
            </WrapperData>
          </WrapperContent>
        ))}
        <WrapperContent>
          <AddWrapper onClick={() => toggleAdd()}>Add</AddWrapper>
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
              <label htmlFor="phase">
                Phase
                {/* <input
                  type="text"
                  name="phase"
                  id="phase"
                  placeholder="One, two, three..."
                  onChange={handleInputChange}
                /> */}
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={phase[0]}
                  name="color"
                  options={phase}
                />
              </label>
              <label htmlFor="ph">
                PH
                <input
                  type="text"
                  name="ph"
                  id="ph"
                  placeholder="6.2"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="ec">
                EC
                <input
                  type="text"
                  name="ec"
                  id="ec"
                  placeholder="2000"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="temp_max">
                Temperature Max
                <input
                  type="text"
                  name="temp_max"
                  id="temp_max"
                  placeholder="37"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="temp_min">
                Temperature Min
                <input
                  type="text"
                  name="temp_min"
                  id="temp_min"
                  placeholder="20"
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="moisture">
                Air Humidity
                <input
                  type="text"
                  name="moisture"
                  id="moisture"
                  placeholder="50%"
                  onChange={handleInputChange}
                />
              </label>
              <ImgInput name="avatar_id" />
              <div className="buttons">
                <button
                  disabled={!btnDisable}
                  type="button"
                  className="salvar"
                  onClick={e => {
                    e.preventDefault();
                    if (
                      !currentData.infos ||
                      !currentData.phase ||
                      !currentData.ph ||
                      !currentData.ec ||
                      !currentData.temp_max ||
                      !currentData.temp_min ||
                      !currentData.moisture
                    )
                      return;

                    saveItem(currentData);
                    window.location.reload();
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
