import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import { Line } from 'rc-progress';
import {
  LineChart,
  Line as LineRecharts,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Bar,
  BarChart,
  Legend,
  Tooltip,
  ComposedChart,
  Scatter,
} from 'recharts';
import { parseISO } from 'date-fns';
import DataService from '../../services/crudApi';

import {
  Container,
  Content,
  WrapperWizard,
  Form,
  CreateHarvestBtn,
} from './styles';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const [wizardOn, setWizardOn] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [greenData, setGreenData] = useState([]);

  const initialFormState = {
    id: '',
    harvest_name: '',
    strain_name: '',
    breeder: '',
    infos: '',
    tools: '',
    nutrients: '',
    soil: '',
    pot_size: '',
    light_schedule: '',
  };

  const [currentData, setCurrentData] = useState(initialFormState);

  // get
  useEffect(() => {
    async function loadDataProjects() {
      const response = await DataService.getProjects();

      const { data } = response;

      setProjectData([...data]);
    }

    loadDataProjects();

    async function loadDataGreen() {
      const response = await DataService.getGreens();

      const { data } = response;

      setGreenData([...data]);
    }

    loadDataGreen();
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

  const dateFormatMonth = greenData.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('en-US'),
      updatedAt: parseISO(date.createdAt).toLocaleString('default', {
        weekday: 'long',
        day: '2-digit',
      }),
    };
  });

  return (
    <Container>
      <Content>
        <h3>bem-vindo,</h3>
        <h1>{profile.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Graphs about data</h2>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={dateFormatMonth}>
            <LineRecharts type="monotone" dataKey="ph" stroke="#8884d8" />
            <LineRecharts type="monotone" dataKey="ec" stroke="#4484d8" />
            <LineRecharts type="monotone" dataKey="moisture" stroke="#1133d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <AreaChart data={dateFormatMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="ph"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="ec"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="moisture"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart data={dateFormatMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temp_max" stackId="a" fill="#8884d8" />
            <Bar dataKey="temp_min" stackId="a" fill="#82ca9d" />
            <Bar dataKey="moisture" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <ComposedChart data={dateFormatMonth}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="ph"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="ec" barSize={20} fill="#413ea0" />
            <LineRecharts type="monotone" dataKey="moisture" stroke="#ff7300" />
            <Scatter dataKey="temp_max" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
        <h2>Harvests</h2>
        {projectData.length ? (
          <p>
            You have <strong>{projectData.length}</strong> harvests.
          </p>
        ) : (
          <p>Carregando...</p>
        )}
        {projectData
          .sort((a, b) => a.id - b.id)
          .map(item => (
            <ul key={item.id}>
              <li>
                <Link to={`/project/${item.id}`}>{item.harvest_name}</Link>
              </li>
            </ul>
          ))}
        <h2>Create harvest</h2>
        <CreateHarvestBtn type="button" onClick={() => setWizardOn(!wizardOn)}>
          {!wizardOn ? 'New!' : 'Close'}
        </CreateHarvestBtn>
        <WrapperWizard hide={wizardOn}>
          <Wizard
            render={({ next, previous, step, steps }) => (
              <>
                <Line
                  percent={((steps.indexOf(step) + 1) / steps.length) * 100}
                  strokeWidth="1"
                  strokeColor="yellowgreen"
                  strokeLinecap="square"
                />
                <Steps key={step.id} step={step}>
                  <Step id="one">
                    <div>
                      <Form>
                        <label htmlFor="harvest_name">
                          Choose a nice name to your harvest
                          <input
                            type="text"
                            name="harvest_name"
                            id="harvest_name"
                            placeholder="The Great Gorilla"
                            value={currentData.harvest_name}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label htmlFor="infos">
                          Infos
                          <textarea
                            name="infos"
                            id="infos"
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            value={currentData.infos}
                            onChange={handleInputChange}
                          />
                        </label>
                      </Form>
                    </div>
                  </Step>
                  <Step id="two">
                    <div>
                      <Form>
                        <label htmlFor="strain_name">
                          strain_name
                          <input
                            type="text"
                            name="strain_name"
                            id="strain_name"
                            placeholder="strain_name"
                            value={currentData.strain_name}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label htmlFor="breeder">
                          breeder
                          <input
                            type="text"
                            name="breeder"
                            id="breeder"
                            placeholder="breeder"
                            value={currentData.breeder}
                            onChange={handleInputChange}
                          />
                        </label>
                      </Form>
                    </div>
                  </Step>
                  <Step id="three">
                    <div>
                      <Form>
                        <label htmlFor="tools">
                          Tools
                          <input
                            type="text"
                            name="tools"
                            id="tools"
                            placeholder="tools"
                            value={currentData.tools}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label htmlFor="nutrients">
                          nutrients
                          <input
                            type="text"
                            name="nutrients"
                            id="nutrients"
                            placeholder="nutrients"
                            value={currentData.nutrients}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label htmlFor="soil">
                          soil
                          <input
                            type="text"
                            name="soil"
                            id="soil"
                            placeholder="soil"
                            value={currentData.soil}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label htmlFor="pot_size">
                          pot_size
                          <input
                            type="text"
                            name="pot_size"
                            id="pot_size"
                            placeholder="pot_size"
                            value={currentData.pot_size}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label htmlFor="light_schedule">
                          light_schedule
                          <input
                            type="text"
                            name="light_schedule"
                            id="light_schedule"
                            placeholder="light_schedule"
                            value={currentData.light_schedule}
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
                              if (
                                !currentData.harvest_name ||
                                !currentData.strain_name ||
                                !currentData.infos ||
                                !currentData.tools ||
                                !currentData.nutrients ||
                                !currentData.soil ||
                                !currentData.pot_size ||
                                !currentData.light_schedule
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
                    </div>
                  </Step>
                </Steps>
                <div className="example-buttons">
                  {steps.indexOf(step) < steps.length - 1 && (
                    <button
                      type="button"
                      className="btn-fluid margin-1-b"
                      onClick={next}
                    >
                      Next
                    </button>
                  )}

                  {steps.indexOf(step) > 0 && (
                    <button
                      type="button"
                      className="btn-fluid btn-secondary"
                      onClick={previous}
                    >
                      Back
                    </button>
                  )}
                </div>
              </>
            )}
          />
        </WrapperWizard>
      </Content>
    </Container>
  );
}
