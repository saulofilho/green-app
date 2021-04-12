/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { BtnModal, Subtitle, Text, TextWrapper, DownloadData } from './styles';

function ModalEditCalendar({
  modalIsOpenEdit,
  closeModalEdit,
  dataModalEdit,
  updateDate,
}) {
  return (
    <Modal
      isOpen={modalIsOpenEdit}
      onRequestClose={closeModalEdit}
      contentLabel="Modal Calendar"
    >
      <BtnModal
        type="button"
        onClick={() => {
          closeModalEdit();
        }}
      >
        <i className="ri-close-fill ri-2x" />
      </BtnModal>
      <TextWrapper>
        <Text>Evento:&nbsp;</Text>
        <Subtitle>{dataModalEdit && dataModalEdit.title}</Subtitle>
      </TextWrapper>
      <TextWrapper>
        <Text>Start:&nbsp;</Text>
        <Subtitle>{dataModalEdit && dataModalEdit.start.toString()}</Subtitle>
      </TextWrapper>
      <TextWrapper>
        <Text>End:&nbsp;</Text>
        <Subtitle>{dataModalEdit && dataModalEdit.end.toString()}</Subtitle>
      </TextWrapper>
      <TextWrapper>
        <Text>Is it all day?&nbsp;</Text>
        <Subtitle>
          {dataModalEdit && dataModalEdit.allDay ? 'Yes' : 'No'}
        </Subtitle>
      </TextWrapper>
      <DownloadData>
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            updateDate(dataModalEdit);
          }}
        >
          Edit
        </button>
      </DownloadData>
    </Modal>
  );
}

// ModalEditCalendar.propTypes = {
//   modalIsOpenEdit: PropTypes.bool.isRequired,
//   closeModalEdit: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   modalData: PropTypes.array,
// };

// ModalGrid.defaultProps = {
//   closeModalEdit: () => {},
//   modalData: [],
// };

export default ModalEditCalendar;
