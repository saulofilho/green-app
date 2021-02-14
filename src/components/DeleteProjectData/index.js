import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import DataService from '../../services/crudApi';
import { WrapperInfos, Col, Button, TitleBox, Row } from './styles';

export default function DeleteProjectData({
  projectInfos,
  setProjectInfos,
  item,
}) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const deleteProject = async id => {
    await DataService.removeProject(id).then(response => {
      setProjectInfos(
        projectInfos.filter(project => project.id !== projectInfos.id)
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
        <TitleBox>Delete your harvest data: </TitleBox>
      </Col>
      <WrapperInfos hide={deleteConfirm}>
        <Row>
          <Col>
            <Button
              type="button"
              onClick={() => setDeleteConfirm(!deleteConfirm)}
            >
              <i className="ri-close-line ri-2x" />
            </Button>
            <TitleBox>Nope.</TitleBox>
          </Col>
          <Col>
            <Button type="button" onClick={() => deleteProject(item.id)}>
              <i className="ri-check-line ri-2x" />
            </Button>
            <TitleBox>Are you sure?</TitleBox>
          </Col>
        </Row>
      </WrapperInfos>
    </>
  );
}

DeleteProjectData.propTypes = {
  item: PropTypes.object.isRequired,
  projectInfos: PropTypes.array.isRequired,
  setProjectInfos: PropTypes.func.isRequired,
};
