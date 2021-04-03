/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { BtnModal } from './styles';

function ModalInfosCalendar({ modalIsOpen, closeModal, currentData }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Calendar"
    >
      <BtnModal
        type="button"
        onClick={() => {
          closeModal();
        }}
      >
        <i className="ri-close-fill ri-2x" />
      </BtnModal>
      <h1>{currentData.title}</h1>
      <h1>{currentData.start.toString()}</h1>
      <h1>{currentData.end.toString()}</h1>
      <h1>{currentData.allDay}</h1>
    </Modal>
  );
}

// ModalInfosCalendar.propTypes = {
//   modalIsOpen: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   modalData: PropTypes.array,
// };

// ModalGrid.defaultProps = {
//   closeModal: () => {},
//   modalData: [],
// };

export default ModalInfosCalendar;
