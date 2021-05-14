/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalImage from 'react-modal-image';
import EditData from '../../EditData';

import { BtnModal, Row, WrapperInfos, Col, TitleBox, TextBox } from './styles';

function ModalInfosCard({
  modalIsOpen,
  closeModal,
  cardInfos,
  editButton,
  editOn,
  handleInputChange,
  updateItem,
  currentData,
  handleSelectChange,
  phases,
  preview,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Card"
    >
      <BtnModal
        type="button"
        onClick={() => {
          closeModal();
        }}
      >
        <i className="ri-close-fill ri-2x" />
      </BtnModal>
      <Row>
        <WrapperInfos>
          <i className="ri-information-line ri-2x" />
          <Col>
            <TitleBox>Infos: </TitleBox>
            <TextBox>{cardInfos && cardInfos.infos}</TextBox>
          </Col>
        </WrapperInfos>
      </Row>
      <Row>
        <WrapperInfos>
          <i className="ri-contrast-2-line ri-2x" />
          <Col>
            <TitleBox>Phase: </TitleBox>
            <TextBox>{cardInfos && cardInfos.phase}</TextBox>
          </Col>
        </WrapperInfos>
        <WrapperInfos>
          <i className="ri-water-flash-line ri-2x" />
          <Col>
            <TitleBox>pH Water: </TitleBox>
            <TextBox>{cardInfos && cardInfos.ph_water} pH</TextBox>
          </Col>
        </WrapperInfos>
        <WrapperInfos>
          <i className="ri-earth-line ri-2x" />
          <Col>
            <TitleBox>pH Soil: </TitleBox>
            <TextBox>{cardInfos && cardInfos.ph_soil} pH</TextBox>
          </Col>
        </WrapperInfos>
        <WrapperInfos>
          <i className="ri-flask-line ri-2x" />
          <Col>
            <TitleBox>EC: </TitleBox>
            <TextBox>{cardInfos && cardInfos.ec} PPM</TextBox>
          </Col>
        </WrapperInfos>
      </Row>
      <Row>
        <WrapperInfos>
          <i className="ri-sun-line ri-2x" />
          <Col>
            <TitleBox>Temperature Max: </TitleBox>
            <TextBox>{cardInfos && cardInfos.temp_max} °C</TextBox>
          </Col>
        </WrapperInfos>
        <WrapperInfos>
          <i className="ri-rainy-line ri-2x" />
          <Col>
            <TitleBox>Temperature Min: </TitleBox>
            <TextBox>{cardInfos && cardInfos.temp_min} °C</TextBox>
          </Col>
        </WrapperInfos>
        <WrapperInfos>
          <i className="ri-umbrella-line ri-2x" />
          <Col>
            <TitleBox>Soil Moisture: </TitleBox>
            <TextBox>{cardInfos && cardInfos.moisture} %</TextBox>
          </Col>
        </WrapperInfos>
        <WrapperInfos>
          <i className="ri-temp-cold-line ri-2x" />
          <Col>
            <TitleBox>Air Humidity: </TitleBox>
            <TextBox>{cardInfos && cardInfos.air_humidity} %</TextBox>
          </Col>
        </WrapperInfos>
      </Row>
      <Row>
        <WrapperInfos>
          <i className="ri-seedling-line ri-2x" />
          <Col>
            <TitleBox>Plant Size: </TitleBox>
            <TextBox>{cardInfos && cardInfos.plant_size} cm</TextBox>
          </Col>
        </WrapperInfos>
      </Row>
      <Row>
        <WrapperInfos>
          <i className="ri-camera-line ri-2x" />
          <Col>
            <TitleBox>Image: </TitleBox>
            <img
              src={preview}
              alt={cardInfos && cardInfos.name}
              loading="lazy"
            />
            <ModalImage
              small={cardInfos && cardInfos.img.url}
              large={cardInfos && cardInfos.img.url}
              alt={cardInfos && cardInfos.name}
            />
          </Col>
        </WrapperInfos>
      </Row>
      <Row>
        <EditData
          editButton={editButton}
          editOn={editOn}
          cardInfos={cardInfos}
          handleInputChange={handleInputChange}
          updateItem={updateItem}
          currentData={currentData}
          handleSelectChange={handleSelectChange}
          phases={phases}
        />
      </Row>
    </Modal>
  );
}

// ModalInfosCard.propTypes = {
//   modalIsOpen: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   modalData: PropTypes.array,
// };

// ModalGrid.defaultProps = {
//   closeModal: () => {},
//   modalData: [],
// };

export default ModalInfosCard;
