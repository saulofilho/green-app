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

  return (
    <Container>
      <Content>
        <h2>
          bem-vindo, <strong>{profile.name}</strong>
        </h2>
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
        <Graphs />
        <br />
        <Row>
          <Graphs />
          <Graphs />
        </Row>
        <LineChart width={600} height={300} data={dataChart}>
          <LineRecharts type="monotone" dataKey="uv" stroke="#8884d8" />
          <LineRecharts type="monotone" dataKey="pv" stroke="#4484d8" />
          <LineRecharts type="monotone" dataKey="amt" stroke="#1133d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
        <br />
        <h2>Harvest</h2>
        {projectData
          .sort((a, b) => a.id - b.id)
          .map(item => (
            <ul key={item.id}>
              <li>
                <Link to={`/project/${item.id}`}>{item.name}</Link>
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
                  <Step id="merlin">
                    <div>
                      <h1>Merlin</h1>
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
                              if (
                                !currentData.name ||
                                !currentData.infos ||
                                !currentData.tools
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
                  <Step id="x">
                    <div>
                      <h1>x</h1>
                    </div>
                  </Step>
                  <Step id="xx">
                    <div>
                      <h1>xx</h1>
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
