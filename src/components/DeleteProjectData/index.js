import React from 'react';
import { toast } from 'react-toastify';
import DataService from '../../services/crudApi';
import { WrapperInfos, Col, Button, TitleBox } from './styles';

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
      if (response.status === 200) {
        toast.success('Deleted successfully.');
        setTimeout(() => {
          window.location.replace('/');
        }, 3000);
      } else if (response.status !== 200) {
        toast.error('Something went wrong.');
      }
    });
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
