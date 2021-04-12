/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { BtnModal, Subtitle, Text, TextWrapper, DownloadData } from './styles';

function ModalInfosCalendar({
  modalIsOpenInfos,
  closeModalInfos,
  dataModalInfos,
  deleteDate,
}) {
  return (
    <Modal
      isOpen={modalIsOpenInfos}
      onRequestClose={closeModalInfos}
      contentLabel="Modal Calendar"
    >
      <BtnModal
        type="button"
        onClick={() => {
          closeModalInfos();
        }}
      >
        <i className="ri-close-fill ri-2x" />
      </BtnModal>
      <TextWrapper>
        <Text>Evento:&nbsp;</Text>
        <Subtitle>{dataModalInfos && dataModalInfos.title}</Subtitle>
      </TextWrapper>
      <TextWrapper>
        <Text>Start:&nbsp;</Text>
        <Subtitle>{dataModalInfos && dataModalInfos.start.toString()}</Subtitle>
      </TextWrapper>
      <TextWrapper>
        <Text>End:&nbsp;</Text>
        <Subtitle>{dataModalInfos && dataModalInfos.end.toString()}</Subtitle>
      </TextWrapper>
      <TextWrapper>
        <Text>Is it all day?&nbsp;</Text>
        <Subtitle>
          {dataModalInfos && dataModalInfos.allDay ? 'Yes' : 'No'}
        </Subtitle>
      </TextWrapper>
      <DownloadData>
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            deleteDate(dataModalInfos.id);
          }}
        >
          Delete
        </button>
      </DownloadData>
    </Modal>
  );
}

// ModalInfosCalendar.propTypes = {
//   modalIsOpenInfos: PropTypes.bool.isRequired,
//   closeModalInfos: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   modalData: PropTypes.array,
// };

// ModalGrid.defaultProps = {
//   closeModalInfos: () => {},
//   modalData: [],
// };

export default ModalInfosCalendar;
