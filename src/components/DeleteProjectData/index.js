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

export default function DeleteProjectData({
  projectData,
  setProjectData,
  item,
}) {
  const deleteProject = async id => {
    await DataService.removeProject(id).then(response => {
      setProjectData(
        projectData.filter(project => project.id !== projectData.id)
      );
    });
    // window.location.reload();
  };

  return (
    <WrapperInfos>
      <Col>
        <Button type="button" onClick={() => deleteProject(item.id)}>
          <i className="ri-delete-bin-2-line ri-2x" />
        </Button>
        <TitleBox>Delete your project data: </TitleBox>
      </Col>
    </WrapperInfos>
  );
}
