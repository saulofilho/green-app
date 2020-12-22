import React, { useState } from 'react';
import DataService from '../../services/crudApi';
import {
  WrapperInfos,
  Col,
  Button,
  TitleBox,
  WrapperDataEdit,
  Form,
  FormWrapper,
} from './styles';

export default function EditProjectData({
  handleSelectChange,
  phases,
  projectData,
  setProjectData,
  item,
}) {
  const [editOn, setEditOn] = useState(false);
  const [btnDisable, setBtnDisable] = useState('');

  const initialProjectState = {
    id: '',
    harvest_name: '',
    strain_name: '',
    breeder: '',
    flowering_type: '',
    infos: '',
    tools: '',
    soil: '',
    nutrients: '',
    pot_size: '',
    light_schedule: '',
    grow_techniques: '',
  };

  const [currentProjectData, setCurrentProjectData] = useState(
    initialProjectState
  );

  const updateProject = async (id, updateProjectData) => {
    await DataService.editProject(
      currentProjectData.id,
      currentProjectData
    ).then(response => {
      setProjectData(
        projectData.map(item => (item.id === id ? updateProjectData : item))
      );
    });
    window.location.reload();
  };

  const editButton = item => {
    setEditOn(!editOn);
    setCurrentProjectData(item);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentProjectData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <WrapperInfos>
      <Col>
        <Button type="button" onClick={() => editButton(item)}>
          <i className="ri-file-edit-line ri-2x" />
        </Button>
        <TitleBox>Edit your project data: </TitleBox>
        <WrapperDataEdit hideAdd={editOn}>
          <Form>
            <FormWrapper>
              <p>Harvest Name</p>
              <input
                type="text"
                name="harvest_name"
                id="harvest_name"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.harvest_name}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Strain</p>
              <input
                type="text"
                name="strain_name"
                id="strain_name"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.strain_name}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Breeder</p>
              <input
                type="text"
                name="breeder"
                id="breeder"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.breeder}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Flowering Type</p>
              <input
                type="text"
                name="flowering_type"
                id="flowering_type"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.flowering_type}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Infos</p>
              <input
                type="text"
                name="infos"
                id="infos"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.infos}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Tools</p>
              <input
                type="text"
                name="tools"
                id="tools"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.tools}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Soil</p>
              <input
                type="text"
                name="soil"
                id="soil"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.soil}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Nutrients</p>
              <input
                type="text"
                name="nutrients"
                id="nutrients"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.nutrients}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Pot Size</p>
              <input
                type="text"
                name="pot_size"
                id="pot_size"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.pot_size}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Light Schedule</p>
              <input
                type="text"
                name="light_schedule"
                id="light_schedule"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.light_schedule}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Grow Techniques</p>
              <input
                type="text"
                name="grow_techniques"
                id="grow_techniques"
                onChange={handleInputChange}
                value={currentProjectData && currentProjectData.grow_techniques}
              />
            </FormWrapper>
            <FormWrapper>
              <div className="buttons">
                <button
                  disabled={!btnDisable}
                  type="button"
                  className="salvar"
                  onClick={e => {
                    e.preventDefault();
                    updateProject(currentProjectData.id, currentProjectData);
                    window.location.reload();
                  }}
                >
                  Edit
                </button>
              </div>
            </FormWrapper>
          </Form>
        </WrapperDataEdit>
      </Col>
    </WrapperInfos>
  );
}
