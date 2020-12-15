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
} from 'recharts';
import DataService from '../../services/crudApi';

import { Container, Content, Graphs, Row, WrapperWizard, Form } from './styles';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const [wizardOn, setWizardOn] = useState(false);
  const dataChart = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 5400, pv: 300, amt: 2100 },
    { name: 'Page C', uv: 5400, pv: 300, amt: 2100 },
    { name: 'Page D', uv: 400, pv: 30, amt: 210 },
    { name: 'Page E', uv: 540, pv: 300, amt: 200 },
  ];

  const [projectData, setProjectData] = useState([]);

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

  return (
    <Container>
      <Content>
        <h1>
          bem-vindo, <strong>{profile.name}</strong>
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <h2>Graphs about data</h2>
        <br />
        <Graphs>
          <LineChart width={600} height={300} data={dataChart}>
            <LineRecharts type="monotone" dataKey="uv" stroke="#8884d8" />
            <LineRecharts type="monotone" dataKey="pv" stroke="#4484d8" />
            <LineRecharts type="monotone" dataKey="amt" stroke="#1133d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </Graphs>
        <br />
        <Row>
          <Graphs>
            <LineChart width={200} height={300} data={dataChart}>
              <LineRecharts type="monotone" dataKey="uv" stroke="#8884d8" />
              <LineRecharts type="monotone" dataKey="pv" stroke="#4484d8" />
              <LineRecharts type="monotone" dataKey="amt" stroke="#1133d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </Graphs>
          <Graphs>
            <LineChart width={200} height={300} data={dataChart}>
              <LineRecharts type="monotone" dataKey="uv" stroke="#8884d8" />
              <LineRecharts type="monotone" dataKey="pv" stroke="#4484d8" />
              <LineRecharts type="monotone" dataKey="amt" stroke="#1133d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </Graphs>
        </Row>
        <br />
        <h2>Harvests</h2>
        {projectData.length ? (
          <div>
            <p>
              Total de tarefas cadastradas:{' '}
              <strong>{projectData.length}</strong>
            </p>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        <br />
        {projectData
          .sort((a, b) => a.id - b.id)
          .map(item => (
            <ul key={item.id}>
              <li>
                <Link to={`/project/${item.id}`}>{item.harvest_name}</Link>
              </li>
            </ul>
          ))}
        <br />
        <h2>Create harvest</h2>
        <button type="button" onClick={() => setWizardOn(!wizardOn)}>
          new
        </button>
        <WrapperWizard hide={wizardOn}>
          <Wizard
            render={({ next, previous, step, steps }) => (
              <>
                <Line
                  percent={((steps.indexOf(step) + 1) / steps.length) * 100}
                  className="pad-b"
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
        <br />
      </Content>
    </Container>
  );
}
