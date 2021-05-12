import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import DataService from '../../services/crudApi';
import Graphs from '../../components/Graphs';
import ModalAddProject from '../../components/ModalAddProject';

import {
  Container,
  Content,
  CreateHarvestBtn,
  Title,
  Subtitle,
  Today,
  NumberHarvests,
  HarvestName,
  Loading,
} from './styles';

export default function Dashboard() {
  const [projectsData, setProjectsData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const fetchData = useCallback(async () => {
    await DataService.getHarvests()
      .then(response => {
        const { data } = response;

        setProjectsData([...data]);
        setIsLoading(false);
      })
      .catch(err => {
        toast.error(err.message);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCurrentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveItem = async () => {
    await DataService.createProjects(currentData)
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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <Content>
        <Today>Today is {new Date().toDateString()}</Today>
        <Title>Create a new harvest: right here, right now.</Title>
        <Subtitle>
          Here will be your first step: creating your harvest.
          <br />
          Click on the button to input project`s data.
        </Subtitle>
        <CreateHarvestBtn type="button" onClick={() => openModal()}>
          New!
        </CreateHarvestBtn>
        <Title>Where are my harvests?</Title>
        <Subtitle>
          If you have registered any harvest, it will be displayed here. Click
          in the selected project to see the daily data.
          <br />
          Besides that, you able to create and edit your daily data.
        </Subtitle>
        {projectsData.length ? (
          <NumberHarvests>
            You have{' '}
            <strong style={{ color: '#17b978' }}>{projectsData.length}</strong>{' '}
            {projectsData.length <= 1 ? 'project.' : 'projects.'}
          </NumberHarvests>
        ) : (
          <Loading>Loading...</Loading>
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
        <Title>Graphs about your harvests, pal.</Title>
        <Subtitle>
          Below is possible to analyse, compare and cross the 28 last days daily
          data of which harvest.
        </Subtitle>
        {projectsData.length > 1 ? <Graphs projectsData={projectsData} /> : ''}
      </Content>
      <ModalAddProject
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        handleInputChange={handleInputChange}
        saveItem={saveItem}
        flowering_type={flowering_type}
        handleSelectChange={handleSelectChange}
        currentData={currentData}
      />
    </Container>
  );
}
