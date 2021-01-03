import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DataService from '../../services/crudApi';
import { WrapperInfos, Col, Button, TitleBox, Row } from './styles';

export default function DeleteProjectData({
  projectData,
  setProjectData,
  item,
}) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

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
    <>
      <Col>
        <Button type="button" onClick={() => setDeleteConfirm(!deleteConfirm)}>
          <i className="ri-delete-bin-2-line ri-2x" />
        </Button>
        <TitleBox>Delete your project data: </TitleBox>
      </Col>
      <WrapperInfos hide={deleteConfirm}>
        <Row>
          <Col>
            <Button type="button" onClick={() => deleteProject(item.id)}>
              <i className="ri-question-mark ri-2x" />
            </Button>
            <TitleBox>Are sure to want to delete?</TitleBox>
          </Col>
          <Col>
            <Button
              type="button"
              onClick={() => setDeleteConfirm(!deleteConfirm)}
            >
              <i className="ri-close-line ri-2x" />
            </Button>
            <TitleBox>Nope.</TitleBox>
          </Col>
        </Row>
      </WrapperInfos>
    </>
  );
}
