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
  Today,
  NumberHarvests,
  HarvestName,
  FormWrapper,
} from './styles';

export default function Dashboard() {
  const [wizardOn, setWizardOn] = useState(false);
  const [projectsData, setProjectsData] = useState([]);

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

      setProjectsData([...data]);
    }

    loadDataProjects();
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
        <Today>Today is {new Date().toDateString()}</Today>

        <Title>Create a new harvest</Title>
        <Subtitle>
          TL;DR: Aqui e o seu primeiro passo: cadastrar o seu projeto. Logo
          abaixo voce encontra todos os seus projetos cadastrados.
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

        <Title>My harvests</Title>
        <Subtitle>
          TL;DR: Selecione os projetos ja cadastrados para ver o seu diario de
          dados sobre sua plantacao. Em cada diario voce pode criar e editar os
          seus dados diarios.
        </Subtitle>
        {projectsData.length ? (
          <NumberHarvests>
            You have{' '}
            <strong style={{ color: '#086972' }}>{projectsData.length}</strong>{' '}
            harvests.
          </NumberHarvests>
        ) : (
          <p>Loading...</p>
        )}

        <HarvestName>
          {projectsData
            .sort((a, b) => a.id - b.id)
            .map(item => (
              <li key={item.id}>
                <Link to={`/project/${item.id}`}>{item.harvest_name}</Link>
              </li>
            ))}
        </HarvestName>

        <Title>Graphs about your projects</Title>
        <Subtitle>
          TL;DR: Abaixo voce consegue comparar os dados de cada projeto de forma
          visual com os graficos.
        </Subtitle>

        <Graphs projectsData={projectsData} />
      </Content>
    </Container>
  );
}
