import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import { CSVLink } from 'react-csv';
import ReactExport from 'react-export-excel';
import DataService from '../../services/crudApi';
import api from '../../services/api';
import Card from '../../components/Card';
import GraphsData from '../../components/GraphsData';
import ProjectInfos from '../../components/ProjectInfos';
import AddData from '../../components/AddData';
import CalendarComponent from '../../components/Calendar';
import Carousel from '../../components/Carousel';
import {
  Container,
  Content,
  DownloadData,
  TableComparativeWrapper,
  Loading,
  SelectTitle,
  WrapperDownloadData,
} from './styles';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;
const { ExcelColumn } = ReactExport.ExcelFile;

export default function Project(props) {
  const { match } = props;
  const [projectInfos, setProjectInfos] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [allProjectData, setAllProjectData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isToggledAdd, setIsToggledAdd] = useState(false);
  const [editOn, setEditOn] = useState(false);

  const [progress, setProgress] = useState(0);
  const { defaultValue, registerField } = useField('img_green');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  const fetchData = useCallback(async (id, page) => {
    await DataService.getHarvest(id, page)
      .then(response => {
        const { data } = response;

        setProjectData([...data.green]);
        setCalendarData([...data.calendar]);
        setProjectInfos([data]);

        setIsLoading(false);
      })
      .catch(err => {
        toast.error(err.message);
      });
  }, []);

  useEffect(() => {
    fetchData(match.params.id, currentPage);
  }, [fetchData, match.params.id, currentPage]);

  const fetchNextPage = () => {
    setCurrentPage(currentPage + 1);
    setAllProjectData(prevState => [...prevState, ...projectData]);
  };

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

    const config = {
      onUploadProgress: progressEvent => {
        setProgress(
          Math.round((100 * progressEvent.loaded) / progressEvent.total)
        );
      },
    };

    const response = await api.post('imgs', data, config);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    setCurrentData(prevState => ({
      ...prevState,
      img_id: id,
    }));
  };

  const saveItem = async () => {
    await DataService.createGreen(currentData)
      .then(response => {
        setCurrentData(response.data);
        toast.success('Saved successfully.');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(err => {
        toast.error(err.message);
      });
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
    { value: 'germinative', label: 'Germinative' },
    { value: 'vegetative', label: 'Vegetative' },
    { value: 'flowering', label: 'Flowering' },
    { value: 'flushing', label: 'Flushing' },
    { value: 'drying', label: 'Drying' },
    { value: 'cured', label: 'Cured' },
  ];

  const badgeTheme = status => {
    let theme;
    switch (status) {
      case 'germinative':
        theme = 'germinative';
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

  const TableRow = ({ row, index }) => (
    <tbody>
      <tr>
        <td>
          {index + 1}
          <br />
          {parseISO(row.createdAt).toLocaleString('en-US', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
          })}
        </td>
        <td>{row.infos}</td>
        <td>{row.temp_max}</td>
        <td>{row.temp_min}</td>
        <td>{row.phase}</td>
        <td>{row.ph_water}</td>
        <td>{row.ph_soil}</td>
        <td>{row.ec}</td>
        <td>{row.moisture}</td>
        <td>{row.air_humidity}</td>
        <td>{row.plant_size}</td>
      </tr>
    </tbody>
  );

  const headers = [
    { label: 'Infos', key: 'infos' },
    { label: 'Phase', key: 'phase' },
    { label: 'pH water', key: 'ph_water' },
    { label: 'pH soil', key: 'ph_soil' },
    { label: 'EC', key: 'ec' },
    { label: 'Temp. Max.', key: 'temp_max' },
    { label: 'Temp. Min.', key: 'temp_min' },
    { label: 'Moisture', key: 'moisture' },
    { label: 'Air Humidity', key: 'air_humidity' },
    { label: 'Plant Size', key: 'plant_size' },
  ];

  if (isLoading) {
    return (
      <Container>
        <Content>
          <Loading>Loading...</Loading>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      {projectInfos.length ? (
        <Content>
          <ProjectInfos
            projectInfos={projectInfos}
            setProjectInfos={setProjectInfos}
          />
        </Content>
      ) : (
        <Container>
          <Content>
            <Loading>Loading...</Loading>
          </Content>
        </Container>
      )}
      {projectInfos.length ? (
        <Content>
          <CalendarComponent
            calendarData={calendarData}
            projectId={match.params.id}
          />
        </Content>
      ) : (
        <Container>
          <Content>
            <Loading>Loading...</Loading>
          </Content>
        </Container>
      )}
      <Content>
        <Card
          allProjectData={allProjectData}
          projectData={projectData}
          badgeTheme={badgeTheme}
          preview={preview}
          editButton={editButton}
          editOn={editOn}
          handleInputChange={handleInputChange}
          updateItem={updateItem}
          currentData={currentData}
          handleSelectChange={handleSelectChange}
          phases={phases}
        />
        <WrapperDownloadData>
          {projectData.length ? (
            <DownloadData>
              <button
                type="button"
                onClick={() => {
                  fetchNextPage();
                }}
              >
                Load data.
              </button>
            </DownloadData>
          ) : null}
        </WrapperDownloadData>
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
          progress={progress}
        />
        {allProjectData.length ? (
          <WrapperDownloadData>
            <DownloadData>
              <CSVLink
                data={allProjectData}
                filename="HarvestData.csv"
                target="_blank"
                headers={headers}
              >
                Download CVS data.
              </CSVLink>
            </DownloadData>
            <DownloadData>
              <ExcelFile
                filename="HarvestData"
                element={<button type="button"> Download Excel data.</button>}
              >
                <ExcelSheet data={allProjectData} name="um">
                  <ExcelColumn label="Infos" value="infos" />
                  <ExcelColumn label="Phase" value="phase" />
                  <ExcelColumn label="pH water" value="ph_water" />
                  <ExcelColumn label="pH soil" value="ph_soil" />
                  <ExcelColumn label="EC" value="ec" />
                  <ExcelColumn label="Temp. Max." value="temp_max" />
                  <ExcelColumn label="Temp. Min." value="temp_min" />
                  <ExcelColumn label="Moisture" value="moisture" />
                  <ExcelColumn label="Air Humidity" value="air_humidity" />
                  <ExcelColumn label="Plant Size" value="plant_size" />
                </ExcelSheet>
              </ExcelFile>
            </DownloadData>
          </WrapperDownloadData>
        ) : null}
        <GraphsData
          projectData={allProjectData}
          allProjectData={allProjectData}
        />
      </Content>
      {allProjectData.length ? (
        <Content>
          <SelectTitle>Photos from your harvest.</SelectTitle>
          <Carousel allProjectData={allProjectData} />
        </Content>
      ) : null}
      {allProjectData.length ? (
        <>
          <SelectTitle>Comparative table about your whole data.</SelectTitle>
          <TableComparativeWrapper>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Infos</th>
                  <th>Temp. Max.</th>
                  <th>Temp. Min</th>
                  <th>Phase</th>
                  <th>pH Water</th>
                  <th>pH Soil</th>
                  <th>EC</th>
                  <th>Moisture</th>
                  <th>Air Humidity</th>
                  <th>Plant Size</th>
                </tr>
              </thead>
              {allProjectData.map((row, index) => (
                <TableRow row={row} index={index} key={row.id} />
              ))}
            </table>
          </TableComparativeWrapper>
        </>
      ) : null}
    </Container>
  );
}

Project.propTypes = {
  match: PropTypes.object,
};

Project.defaultProps = {
  match: {},
};
