import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import { useField } from '@rocketseat/unform';
import DataService from '../../services/crudApi';
import api from '../../services/api';
import 'remixicon/fonts/remixicon.css';
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
  Title,
  Subtitle,
  Text,
  TextWrapper,
  WrapperProjectInfos,
  FormWrapper,
  SmallText,
  BigText,
  TitleBox,
  TextBox,
  Button,
} from './styles';

export default function Project(props) {
  const [projectData, setProjectData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggledAdd, setIsToggledAdd] = useState(false);
  const [projectDataFiltered, setProjectDataFiltered] = useState([]);
  const [editOn, setEditOn] = useState(false);

  const { defaultValue, registerField } = useField('img_green');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

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
    ph_water: '',
    ph_soil: '',
    ec: '',
    temp_max: '',
    temp_min: '',
    moisture: '',
    air_humidity: '',
    phase: '',
    img_id: '',
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

  const handleSelectChange = item => {
    setCurrentData(prevState => ({
      ...prevState,
      phase: item.value,
    }));
  };

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'img_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  const handleChange = async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('imgs', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);

    setCurrentData(prevState => ({
      ...prevState,
      img_id: id,
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

  const updateItem = async (id, updateGreenData) => {
    await DataService.updateGreen(currentData.id, currentData).then(
      response => {
        setGreenData(
          greenData.map(item => (item.id === id ? updateGreenData : item))
        );
      }
    );
    window.location.reload();
  };

  const editButton = item => {
    setEditOn(!editOn);
    setCurrentData(item);
  };

  const phases = [
    { value: 'germination', label: 'Germination' },
    { value: 'vegetation', label: 'Vegetation' },
    { value: 'flowering', label: 'Flowering' },
    { value: 'washing', label: 'Washing' },
    { value: 'drying', label: 'Drying' },
    { value: 'cured', label: 'Cured' },
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
          <WrapperProjectInfos key={item.id + item.name}>
            <Title>{item.harvest_name}</Title>
            <TextWrapper>
              <Text>Strain:&nbsp;</Text>
              <Subtitle>{item.strain_name}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Breeder:&nbsp;</Text>
              <Subtitle>{item.breeder}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Flowering Type:&nbsp;</Text>
              <Subtitle>{item.flowering_type}</Subtitle>
            </TextWrapper>
            <br />
            <TextWrapper>
              <Text>Infos:&nbsp;</Text>
              <Subtitle>{item.infos}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Tools:&nbsp;</Text>
              <Subtitle>{item.tools}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Soil:&nbsp;</Text>
              <Subtitle>{item.soil}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Nutrients:&nbsp;</Text>
              <Subtitle>{item.nutrients}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Pot Size:&nbsp;</Text>
              <Subtitle>{item.pot_size} L</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Light Schedule:&nbsp;</Text>
              <Subtitle>{item.light_schedule}</Subtitle>
            </TextWrapper>
          </WrapperProjectInfos>
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
                      <SmallText>TEMPERATURE MAX:</SmallText>
                      <BigText>{item.temp_max}</BigText>
                    </BorderBotAndLeft>
                  </RowDay>
                  <RowDay>
                    <BorderLeft>
                      <SmallText>TEMPERATURE MIN:</SmallText>
                      <BigText>{item.temp_min}</BigText>
                    </BorderLeft>
                  </RowDay>
                </ColDay>
                <ColDay>
                  <RowDay>
                    <BorderBotAndLeft>
                      <SmallText>PHASE:</SmallText>
                      <BigText>{item.phase}</BigText>
                    </BorderBotAndLeft>
                  </RowDay>
                  <RowDay>
                    <BorderLeft>
                      <SmallText>PH Water:</SmallText>
                      <BigText>{item.ph_water}</BigText>
                    </BorderLeft>
                    <BorderLeft>
                      <SmallText>PH Soil:</SmallText>
                      <BigText>{item.ph_water}</BigText>
                    </BorderLeft>
                  </RowDay>
                </ColDay>
              </RowDayWrapper>
            </DayWrapper>
            <WrapperData hide={isToggled === item.id}>
              <Row>
                <WrapperInfos>
                  <i className="ri-information-line ri-2x" />
                  <Col>
                    <TitleBox>Infos: </TitleBox>
                    <TextBox>{item.infos}</TextBox>
                  </Col>
                </WrapperInfos>
              </Row>
              <Row>
                <WrapperInfos>
                  <i className="ri-contrast-2-line ri-2x" />
                  <Col>
                    <TitleBox>Phase: </TitleBox>
                    <TextBox>{item.phase}</TextBox>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-water-flash-line ri-2x" />
                  <Col>
                    <TitleBox>PH Water: </TitleBox>
                    <TextBox>{item.ph_water}</TextBox>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-earth-line ri-2x" />
                  <Col>
                    <TitleBox>PH Soil: </TitleBox>
                    <TextBox>{item.ph_soil}</TextBox>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-flask-line ri-2x" />
                  <Col>
                    <TitleBox>EC: </TitleBox>
                    <TextBox>{item.ec} PPM</TextBox>
                  </Col>
                </WrapperInfos>
              </Row>
              <Row>
                <WrapperInfos>
                  <i className="ri-sun-line ri-2x" />
                  <Col>
                    <TitleBox>Temperature Max: </TitleBox>
                    <TextBox>{item.temp_max} °C</TextBox>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-rainy-line ri-2x" />
                  <Col>
                    <TitleBox>Temperature Min: </TitleBox>
                    <TextBox>{item.temp_min} °C</TextBox>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-umbrella-line ri-2x" />
                  <Col>
                    <TitleBox>Soil Moisture: </TitleBox>
                    <TextBox>{item.moisture} %</TextBox>
                  </Col>
                </WrapperInfos>
                <WrapperInfos>
                  <i className="ri-temp-cold-line ri-2x" />
                  <Col>
                    <TitleBox>Air Humidity: </TitleBox>
                    <TextBox>{item.air_humidity} %</TextBox>
                  </Col>
                </WrapperInfos>
              </Row>
              <Row>
                <WrapperInfos>
                  <i className="ri-camera-line ri-2x" />
                  <Col>
                    <TitleBox>Image: </TitleBox>
                    <img
                      src={
                        item.img ? item.img.url : '../../assets/images/x.jpg'
                      }
                      alt={item.name}
                    />
                    <img src={preview} alt={item.name} />
                  </Col>
                </WrapperInfos>
              </Row>
              <Row>
                <WrapperInfos>
                  <Col>
                    <Button type="button" onClick={() => editButton(item)}>
                      <i className="ri-file-edit-line ri-2x" />
                    </Button>
                    <TitleBox>Edit your data: </TitleBox>
                    <WrapperDataAdd hideAdd={editOn}>
                      <Form>
                        <FormWrapper>
                          <p>Infos</p>
                          <textarea
                            name="infos"
                            id="infos"
                            onChange={handleInputChange}
                            value={currentData && currentData.infos}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Phase</p>
                          <Select
                            defaultMenuIsOpen
                            id="phase"
                            name="phase"
                            onChange={handleSelectChange}
                            options={phases}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>PH Water</p>
                          <input
                            type="text"
                            name="ph_water"
                            id="ph_water"
                            onChange={handleInputChange}
                            value={currentData && currentData.ph_water}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>PH Soil</p>
                          <input
                            type="text"
                            name="ph_soil"
                            id="ph_soil"
                            onChange={handleInputChange}
                            value={currentData && currentData.ph_soil}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>EC</p>
                          <input
                            type="text"
                            name="ec"
                            id="ec"
                            onChange={handleInputChange}
                            value={currentData && currentData.ec}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Temperature Max</p>
                          <input
                            type="text"
                            name="temp_max"
                            id="temp_max"
                            onChange={handleInputChange}
                            value={currentData && currentData.temp_max}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Temperature Min</p>
                          <input
                            type="text"
                            name="temp_min"
                            id="temp_min"
                            onChange={handleInputChange}
                            value={currentData && currentData.temp_min}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Soil Moisture</p>
                          <input
                            type="text"
                            name="moisture"
                            id="moisture"
                            onChange={handleInputChange}
                            value={currentData && currentData.moisture}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Air Humidity</p>
                          <input
                            type="text"
                            name="air_humidity"
                            id="air_humidity"
                            onChange={handleInputChange}
                            value={currentData && currentData.air_humidity}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <div className="buttons">
                            <button
                              disabled={!btnDisable}
                              type="button"
                              className="salvar"
                              onClick={e => {
                                e.preventDefault();
                                updateItem(currentData.id, currentData);
                              }}
                            >
                              Edit
                            </button>
                          </div>
                        </FormWrapper>
                      </Form>
                    </WrapperDataAdd>
                  </Col>
                </WrapperInfos>
              </Row>
            </WrapperData>
          </WrapperContent>
        ))}
        <WrapperContent>
          <AddWrapper onClick={() => toggleAdd()}>
            Add a brand new day!
          </AddWrapper>
          <WrapperDataAdd hideAdd={isToggledAdd}>
            <Form>
              <FormWrapper>
                <p>Infos</p>
                <textarea
                  name="infos"
                  id="infos"
                  placeholder="Infos..."
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>Phase</p>
                <Select
                  defaultValue={phases[0]}
                  id="phase"
                  name="phase"
                  onChange={handleSelectChange}
                  options={phases}
                />
              </FormWrapper>
              <FormWrapper>
                <p>PH Water</p>
                <input
                  type="text"
                  name="ph_water"
                  id="ph_water"
                  placeholder="6.2"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>PH Soil</p>
                <input
                  type="text"
                  name="ph_soil"
                  id="ph_soil"
                  placeholder="6.2"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>EC</p>
                <input
                  type="text"
                  name="ec"
                  id="ec"
                  placeholder="2000"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>Temperature Max</p>
                <input
                  type="text"
                  name="temp_max"
                  id="temp_max"
                  placeholder="37"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>Temperature Min</p>
                <input
                  type="text"
                  name="temp_min"
                  id="temp_min"
                  placeholder="20"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>Soil Moisture</p>
                <input
                  type="text"
                  name="moisture"
                  id="moisture"
                  placeholder="50%"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>Air Humidity</p>
                <input
                  type="text"
                  name="air_humidity"
                  id="air_humidity"
                  placeholder="10%"
                  onChange={handleInputChange}
                />
              </FormWrapper>
              <FormWrapper>
                <p>Image</p>
                {preview ? <img src={preview} alt="green data img" /> : ''}
                <input
                  name="img_id"
                  type="file"
                  id="img_id"
                  accept="image/*"
                  data-file={file}
                  onChange={handleChange}
                  ref={ref}
                />
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
                        !currentData.ph_water ||
                        !currentData.ph_soil ||
                        !currentData.ec ||
                        !currentData.temp_max ||
                        !currentData.temp_min ||
                        !currentData.air_humidity ||
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
              </FormWrapper>
            </Form>
          </WrapperDataAdd>
        </WrapperContent>
      </Content>
    </Container>
  );
}
