import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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
  const [allProjectsData, setAllProjectsData] = useState([]);
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

  // all get
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

    async function loadDataAllProjects() {
      const response = await DataService.getProjects();

      const { data } = response;

      setAllProjectsData([...data]);
    }

    loadDataAllProjects();
  }, []);

  const [btnDisable, setBtnDisable] = useState('');

  // save data
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

  const flowering_type = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Feminised', label: 'Feminised' },
    { value: 'Autoflowering', label: 'Autoflowering' },
    { value: 'Autoflowering Regular', label: 'Autoflowering Regular' },
    { value: 'Fast', label: 'Fast' },
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
        <h5>Today is {new Date().toDateString()}</h5>
        <Title>Welcome to your data storage.</Title>
        <Subtitle>
          Com o BDD você consegue cadastrar e controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </Subtitle>
        <Text>
          O primeiro passo é criar o seu projeto. Depois é só escolher qual
          projeto acessar para dar início a entrada de dados do seu database.
          Gráficos ajudam você a entender melhor qualquer acontecimento em sua
          planta. Você pode comparar os dados de cada dia para entender e tomar
          a melhor decisão. Abaixo você consegue cadastrar quantos projetos você
          quiser. São apenas alguns passos. Vamos lá?
        </Text>

        <Title>My harvests</Title>
        <Subtitle>
          Com o BDD você consegue cadastrar e controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </Subtitle>
        {projectData.length ? (
          <NumberHarvests>
            You have{' '}
            <strong style={{ color: '#086972' }}>{projectData.length}</strong>{' '}
            harvests.
          </NumberHarvests>
        ) : (
          <p>Loading...</p>
        )}

        <HarvestName>
          {projectData
            .sort((a, b) => a.id - b.id)
            .map(item => (
              <li key={item.id}>
                <Link to={`/app/project/${item.id}`}>{item.harvest_name}</Link>
              </li>
            ))}
        </HarvestName>

        <Title>Create a new harvest</Title>
        <Subtitle>
          Com o BDD você consegue cadastrar e controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </Subtitle>
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
                            defaultMenuIsOpen
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
                            placeholder="LST"
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
                            placeholder="99"
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

                              saveItem(currentData);
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </Form>
                    </div>
                  </Step>
                </Steps>
                <div className="example-buttons">
                  {steps.indexOf(step) > 0 && (
                    <CreateHarvestBtn
                      type="button"
                      className="btn-fluid btn-secondary"
                      onClick={previous}
                    >
                      Back
                    </CreateHarvestBtn>
                  )}

                  {steps.indexOf(step) < steps.length - 1 && (
                    <CreateHarvestBtn
                      type="button"
                      className="btn-fluid margin-1-b"
                      onClick={next}
                    >
                      Next
                    </CreateHarvestBtn>
                  )}
                </div>
              </>
            )}
          />
        </WrapperWizard>
        <Title>Graphs about your projects</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Subtitle>

        <Graphs greenData={greenData} allProjectsData={allProjectsData} />
      </Content>
    </Container>
  );
}
