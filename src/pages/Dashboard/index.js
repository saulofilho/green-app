import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import { Line } from 'rc-progress';
import InputMask from 'react-input-mask';

import DataService from '../../services/crudApi';
import Graphs from '../../components/Graphs';

import {
  Container,
  Content,
  WrapperWizard,
  Form,
  CreateHarvestBtn,
  Title,
  Subtitle,
  Text,
  NumberHarvests,
  HarvestName,
  FormWrapper,
} from './styles';

export default function Dashboard() {
  const [wizardOn, setWizardOn] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [greenData, setGreenData] = useState([]);

  const initialFormState = {
    id: '',
    harvest_name: '',
    strain_name: '',
    breeder: '',
    flowering_type: '',
    infos: '',
    tools: '',
    nutrients: '',
    soil: '',
    pot_size: '',
    light_schedule: '',
    grow_techniques: '',
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

  const flowering_type = [
    { value: 'regular', label: 'Regular' },
    { value: 'feminised', label: 'Feminised' },
    { value: 'autoflowering', label: 'Autoflowering' },
    { value: 'autoflowering_regular', label: 'Autoflowering Regular' },
    { value: 'fast', label: 'Fast' },
  ];

  const handleSelectChange = item => {
    setCurrentData(prevState => ({
      ...prevState,
      flowering_type: item.value,
    }));
  };

  return (
    <Container>
      <Content>
        <Title>Hey! I am your harvest data.</Title>

        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Subtitle>

        <Text>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <Title>Graphs about data</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Subtitle>

        <Graphs greenData={greenData} />

        <Title>Harvests</Title>

        {projectData.length ? (
          <NumberHarvests>
            You have{' '}
            <strong style={{ color: '#086972' }}>{projectData.length}</strong>{' '}
            harvests.
          </NumberHarvests>
        ) : (
          <p>Carregando...</p>
        )}

        <HarvestName>
          {projectData
            .sort((a, b) => a.id - b.id)
            .map(item => (
              <li key={item.id}>
                <Link to={`/project/${item.id}`}>{item.harvest_name}</Link>
              </li>
            ))}
        </HarvestName>

        <Title>Create harvest</Title>

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
                  strokeColor="#a7ff83"
                  strokeLinecap="square"
                />
                <Steps key={step.id} step={step}>
                  <Step id="one">
                    <div>
                      <Form>
                        <FormWrapper>
                          <p>Choose a nice name to your harvest</p>
                          <input
                            type="text"
                            name="harvest_name"
                            id="harvest_name"
                            placeholder="The Greenable"
                            value={currentData.harvest_name}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Talk about your harvest</p>
                          <textarea
                            name="infos"
                            id="infos"
                            placeholder="This harvest will be the..."
                            value={currentData.infos}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                      </Form>
                    </div>
                  </Step>
                  <Step id="two">
                    <div>
                      <Form>
                        <FormWrapper>
                          <p>Strain Name</p>
                          <input
                            type="text"
                            name="strain_name"
                            id="strain_name"
                            placeholder="Northern Lights"
                            value={currentData.strain_name}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Breeder</p>
                          <input
                            type="text"
                            name="breeder"
                            id="breeder"
                            placeholder="SeedsMan"
                            value={currentData.breeder}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Flowering Type</p>
                          <Select
                            defaultValue={flowering_type[0]}
                            id="flowering_type"
                            name="flowering_type"
                            onChange={handleSelectChange}
                            options={flowering_type}
                          />
                        </FormWrapper>
                      </Form>
                    </div>
                  </Step>
                  <Step id="three">
                    <div>
                      <Form>
                        <FormWrapper>
                          <p>Tools</p>
                          <input
                            type="text"
                            name="tools"
                            id="tools"
                            placeholder="Scissor, bucket, watering can..."
                            value={currentData.tools}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Nutrients</p>
                          <input
                            type="text"
                            name="nutrients"
                            id="nutrients"
                            placeholder="Bio Bizz..."
                            value={currentData.nutrients}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Soil</p>
                          <input
                            type="text"
                            name="soil"
                            id="soil"
                            placeholder="Coconut Mix"
                            value={currentData.soil}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Grow Techniques</p>
                          <input
                            type="text"
                            name="grow_techniques"
                            id="grow_techniques"
                            placeholder="Coconut Mix"
                            value={currentData.grow_techniques}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Pot Size</p>
                          <InputMask
                            type="text"
                            name="pot_size"
                            id="pot_size"
                            placeholder="99 L"
                            value={currentData.pot_size}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <FormWrapper>
                          <p>Light Schedule</p>
                          <InputMask
                            mask="99/9"
                            maskPlaceholder={null}
                            type="text"
                            name="light_schedule"
                            id="light_schedule"
                            placeholder="18/6"
                            value={currentData.light_schedule}
                            onChange={handleInputChange}
                          />
                        </FormWrapper>
                        <div className="buttons">
                          <button
                            disabled={!btnDisable}
                            className="salvar"
                            type="button"
                            onClick={e => {
                              e.preventDefault();
                              if (
                                !currentData.harvest_name ||
                                !currentData.infos ||
                                !currentData.strain_name ||
                                !currentData.breeder ||
                                !currentData.flowering_type ||
                                !currentData.tools ||
                                !currentData.nutrients ||
                                !currentData.soil ||
                                !currentData.grow_techniques ||
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
                    <CreateHarvestBtn
                      type="button"
                      className="btn-fluid margin-1-b"
                      onClick={next}
                    >
                      Next
                    </CreateHarvestBtn>
                  )}

                  {steps.indexOf(step) > 0 && (
                    <CreateHarvestBtn
                      type="button"
                      className="btn-fluid btn-secondary"
                      onClick={previous}
                    >
                      Back
                    </CreateHarvestBtn>
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
