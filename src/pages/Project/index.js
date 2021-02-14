import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import { CSVLink } from 'react-csv';
import ModalImage from 'react-modal-image';
import DataService from '../../services/crudApi';
import api from '../../services/api';
import GraphsData from '../../components/GraphsData';
import ProjectInfos from '../../components/ProjectInfos';
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
  LoadData,
  DownloadData,
  WrapperContentInitial,
} from './styles';

export default function Project(props) {
  const { match } = props;
  const [, setStatus] = useState('Idle.');
  const [showOff, setShowOff] = useState(true);
  const [projectInfos, setProjectInfos] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [allProjectData, setAllProjectData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [page, setPage] = useState(1);

  const [isToggled, setIsToggled] = useState(false);
  const [isToggledAdd, setIsToggledAdd] = useState(false);
  const [editOn, setEditOn] = useState(false);
  const [btnDisable, setBtnDisable] = useState('');

  const { defaultValue, registerField } = useField('img_green');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  const fetchData = async (id, currentPage) => {
    setStatus('Fetching...');
    await DataService.getProject(id, currentPage).then(response => {
      const { data } = response;

      setProjectData([...data.green]);
      setProjectInfos([data]);
      setStatus('Fetched.');
    });
  };

  useEffect(() => {
    fetchData(match.params.id, page);
  }, [match.params.id, page]);

  function fetchDataNextPage() {
    setPage(page + 1);
    setAllProjectData(prevState => [...prevState, ...projectData]);
  }

  const initialFormState = {
    project_id: match.params.id,
    id: '',
    infos: '',
    ph_water: '',
    ph_soil: '',
    ec: '',
    temp_max: '',
    temp_min: '',
    moisture: '',
    air_humidity: '',
    plant_size: '',
    phase: '',
    img_id: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = item => {
    setBtnDisable(item.value);
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
    { value: 'seeding', label: 'Seeding' },
    { value: 'vegetative', label: 'Vegetative' },
    { value: 'flowering', label: 'Flowering' },
    { value: 'flushing', label: 'Flushing' },
    { value: 'drying', label: 'Drying' },
    { value: 'cured', label: 'Cured' },
  ];

  const badgeTheme = status => {
    let theme;
    switch (status) {
      case 'seeding':
        theme = 'seeding';
        break;
      case 'vegetative':
        theme = 'vegetative';
        break;
      case 'flowering':
        theme = 'flowering';
        break;
      case 'flushing':
        theme = 'flushing';
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
        <ProjectInfos
          projectInfos={projectInfos}
          setProjectInfos={setProjectInfos}
        />
      </Content>
      <Content>
        {projectData.length
          ? projectData.map((item, index) => (
              <WrapperContentInitial key={item.id} hide={showOff}>
                <DayWrapper onClick={() => toggle(item.id)}>
                  <RowDayWrapper theme={badgeTheme(item.phase)}>
                    <WrapperNumber>
                      <Number>{index + 1}</Number>
                      <SmallText>
                        {parseISO(item.createdAt).toLocaleString('en-US', {
                          weekday: 'short',
                          day: '2-digit',
                        })}
                      </SmallText>
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
                          <BigText>{item.ph_soil}</BigText>
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
                        <TitleBox>pH Water: </TitleBox>
                        <TextBox>{item.ph_water} pH</TextBox>
                      </Col>
                    </WrapperInfos>
                    <WrapperInfos>
                      <i className="ri-earth-line ri-2x" />
                      <Col>
                        <TitleBox>pH Soil: </TitleBox>
                        <TextBox>{item.ph_soil} pH</TextBox>
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
                      <i className="ri-seedling-line ri-2x" />
                      <Col>
                        <TitleBox>Plant Size: </TitleBox>
                        <TextBox>{item.plant_size} cm</TextBox>
                      </Col>
                    </WrapperInfos>
                  </Row>
                  <Row>
                    <WrapperInfos>
                      <i className="ri-camera-line ri-2x" />
                      <Col>
                        <TitleBox>Image: </TitleBox>
                        <img src={preview} alt={item.name} loading="lazy" />
                        <ModalImage
                          small={item.img.url}
                          large={item.img.url}
                          alt={item.name}
                        />
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
                      <i className="ri-arrow-up-line ri-1x" />
                      <p>Week {`${(index + 1) / 7}`}</p>
                      <span />
                    </div>
                  ) : (
                    ''
                  )}
                </Week>
              </WrapperContentInitial>
            ))
          : ''}
        {allProjectData.length
          ? allProjectData.map((item, index) => (
              <WrapperContent key={item.id}>
                <DayWrapper onClick={() => toggle(item.id)}>
                  <RowDayWrapper theme={badgeTheme(item.phase)}>
                    <WrapperNumber>
                      <Number>{index + 1}</Number>
                      <SmallText>
                        {parseISO(item.createdAt).toLocaleString('en-US', {
                          weekday: 'short',
                          day: '2-digit',
                        })}
                      </SmallText>
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
                          <BigText>{item.ph_soil}</BigText>
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
                        <TitleBox>pH Water: </TitleBox>
                        <TextBox>{item.ph_water} pH</TextBox>
                      </Col>
                    </WrapperInfos>
                    <WrapperInfos>
                      <i className="ri-earth-line ri-2x" />
                      <Col>
                        <TitleBox>pH Soil: </TitleBox>
                        <TextBox>{item.ph_soil} pH</TextBox>
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
                      <i className="ri-seedling-line ri-2x" />
                      <Col>
                        <TitleBox>Plant Size: </TitleBox>
                        <TextBox>{item.plant_size} cm</TextBox>
                      </Col>
                    </WrapperInfos>
                  </Row>
                  <Row>
                    <WrapperInfos>
                      <i className="ri-camera-line ri-2x" />
                      <Col>
                        <TitleBox>Image: </TitleBox>
                        <img src={preview} alt={item.name} loading="lazy" />
                        <ModalImage
                          small={item.img.url}
                          large={item.img.url}
                          alt={item.name}
                        />
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
                      <i className="ri-arrow-up-line ri-1x" />
                      <p>Week {`${(index + 1) / 7}`}</p>
                      <span />
                    </div>
                  ) : (
                    ''
                  )}
                </Week>
              </WrapperContent>
            ))
          : ''}
        <LoadData
          type="button"
          onClick={() => {
            setShowOff(!showOff);
            fetchDataNextPage();
          }}
        >
          Load data.
        </LoadData>
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
        <DownloadData>
          <CSVLink
            data={projectData}
            filename="mybotanicdailydata.csv"
            target="_blank"
          >
            Download CVS data.
          </CSVLink>
        </DownloadData>
        <GraphsData projectData={projectData} allProjectData={allProjectData} />
      </Content>
    </Container>
  );
}

Project.propTypes = {
  match: PropTypes.object,
};

Project.defaultProps = {
  match: {},
};
