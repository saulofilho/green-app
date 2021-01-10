import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import DataService from '../../services/crudApi';
import api from '../../services/api';
import 'remixicon/fonts/remixicon.css';
import GraphsData from '../../components/GraphsData';
import ProjectData from '../../components/ProjectData';
import AddData from '../../components/AddData';
import EditData from '../../components/EditData';
import {
  Container,
  Content,
  WrapperContent,
  WrapperData,
  DayWrapper,
  Row,
  RowDay,
  Col,
  ColDay,
  WrapperInfos,
  Number,
  RowDayWrapper,
  BorderLeft,
  BorderBotAndLeft,
  SmallText,
  BigText,
  TitleBox,
  TextBox,
  WrapperNumber,
  Week,
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
      if (response.status === 200) {
        toast.success('Saved successfully.');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else if (response.status !== 200) {
        toast.error('Something went wrong.');
      }
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
        if (response.status === 200) {
          toast.success('Saved successfully.');
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else if (response.status !== 200) {
          toast.error('Something went wrong.');
        }
      }
    );
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

  const dateFormatMonth = projectDataFiltered.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('en-US', {
        weekday: 'short',
        month: '2-digit',
        day: '2-digit',
      }),
      updatedAt: parseISO(date.createdAt).toLocaleString('en-US', {
        weekday: 'short',
        day: '2-digit',
      }),
    };
  });

  return (
    <Container>
      <Content>
        <ProjectData
          projectData={projectData}
          setProjectData={setProjectData}
        />
      </Content>
      <Content>
        {dateFormatMonth.length ? (
          dateFormatMonth.map((item, index) => (
            <WrapperContent key={item.id}>
              <DayWrapper onClick={() => toggle(item.id)}>
                <RowDayWrapper theme={badgeTheme(item.phase)}>
                  <WrapperNumber>
                    <Number>{index + 1}</Number>
                    <SmallText>{item.createdAt}</SmallText>
                  </WrapperNumber>
                  <ColDay>
                    <RowDay>
                      <BorderBotAndLeft>
                        <SmallText>TEMPERATURE MAX:</SmallText>
                        <BigText>{item.temp_max} °C</BigText>
                      </BorderBotAndLeft>
                    </RowDay>
                    <RowDay>
                      <BorderLeft>
                        <SmallText>TEMPERATURE MIN:</SmallText>
                        <BigText>{item.temp_min} °C</BigText>
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
                        <SmallText>PH WATER:</SmallText>
                        <BigText>{item.ph_water}</BigText>
                      </BorderLeft>
                      <BorderLeft>
                        <SmallText>PH SOIL:</SmallText>
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
                  <EditData
                    editButton={editButton}
                    editOn={editOn}
                    item={item}
                    handleInputChange={handleInputChange}
                    updateItem={updateItem}
                    currentData={currentData}
                    handleSelectChange={handleSelectChange}
                    phases={phases}
                    btnDisable={btnDisable}
                  />
                </Row>
              </WrapperData>
              <Week>
                {(index + 1) % 7 === 0 ? (
                  <div>
                    <p>Week {`${index - index + 1}`}</p>
                    <span />
                  </div>
                ) : (
                  ''
                )}
              </Week>
            </WrapperContent>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <AddData
          toggleAdd={toggleAdd}
          isToggledAdd={isToggledAdd}
          handleInputChange={handleInputChange}
          handleChange={handleChange}
          saveItem={saveItem}
          currentData={currentData}
          phases={phases}
          handleSelectChange={handleSelectChange}
          preview={preview}
          file={file}
          btnDisable={btnDisable}
        />
        <GraphsData greenData={greenData} dateFormatMonth={dateFormatMonth} />
      </Content>
    </Container>
  );
}
