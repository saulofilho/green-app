/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { Form, BtnModal, DownloadData } from './styles';

function ModalAddCalendar({
  modalIsOpen,
  closeModal,
  saveDate,
  currentData,
  setCurrentData,
}) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    setCurrentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDateChange = e => {
    const { name, value } = e.target;
    setCurrentData(prevState => ({
      ...prevState,
      [name]: new Date(value),
    }));
  };

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
      <Form>
        <p>Start:</p>
        <input
          type="datetime-local"
          name="start"
          id="start"
          onChange={handleDateChange}
        />
        <p>End:</p>
        <input
          type="datetime-local"
          name="end"
          id="end"
          onChange={handleDateChange}
        />
        <p>Event:</p>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
        />
        <select name="all_day" id="all_day" onChange={handleInputChange}>
          <option value>Yes</option>
          <option value={false}>No</option>
        </select>
        <DownloadData>
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              saveDate(currentData);
            }}
          >
            Save
          </button>
        </DownloadData>
      </Form>
    </Modal>
  );
}

// ModalAddCalendar.propTypes = {
//   modalIsOpen: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   modalData: PropTypes.array,
// };

// ModalGrid.defaultProps = {
//   closeModal: () => {},
//   modalData: [],
// };

export default ModalAddCalendar;
