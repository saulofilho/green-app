/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import { DebounceInput } from 'react-debounce-input';

import { Form, FormWrapper, BtnModal } from './styles';

function ModalAddProject({
  modalIsOpen,
  closeModal,
  btnDisable,
  handleInputChange,
  saveItem,
  flowering_type,
  handleSelectChange,
  currentData,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Project"
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
        <FormWrapper>
          <p>Choose a nice name to your harvest</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="harvest_name"
            id="harvest_name"
            placeholder="The Greenable"
            value={currentData.harvest_name}
            onChange={handleInputChange}
          />
          <p>Talk about your harvest</p>
          <DebounceInput
            debounceTimeout={300}
            name="infos"
            id="infos"
            placeholder="This harvest will be the..."
            value={currentData.infos}
            onChange={handleInputChange}
          />
          <p>Strain Name</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="strain_name"
            id="strain_name"
            placeholder="Northern Lights"
            value={currentData.strain_name}
            onChange={handleInputChange}
          />
          <p>Breeder</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="breeder"
            id="breeder"
            placeholder="SeedsMan"
            value={currentData.breeder}
            onChange={handleInputChange}
          />
          <p>Flowering Type</p>
          <Select
            defaultMenuIsOpen
            id="flowering_type"
            name="flowering_type"
            onChange={handleSelectChange}
            options={flowering_type}
          />
          <p>Tools</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="tools"
            id="tools"
            placeholder="Scissor, bucket, watering can..."
            value={currentData.tools}
            onChange={handleInputChange}
          />
          <p>Nutrients</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="nutrients"
            id="nutrients"
            placeholder="Bio Bizz..."
            value={currentData.nutrients}
            onChange={handleInputChange}
          />
          <p>Soil</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="soil"
            id="soil"
            placeholder="Coconut Mix"
            value={currentData.soil}
            onChange={handleInputChange}
          />
          <p>Grow Techniques</p>
          <DebounceInput
            debounceTimeout={300}
            type="text"
            name="grow_techniques"
            id="grow_techniques"
            placeholder="LST"
            value={currentData.grow_techniques}
            onChange={handleInputChange}
          />
          <p>Pot Size</p>
          <DebounceInput
            element={InputMask}
            debounceTimeout={300}
            type="text"
            name="pot_size"
            id="pot_size"
            placeholder="99"
            value={currentData.pot_size}
            onChange={handleInputChange}
          />
          <p>Light Schedule</p>
          <DebounceInput
            element={InputMask}
            debounceTimeout={300}
            mask="99/9"
            maskPlaceholder={null}
            type="text"
            name="light_schedule"
            id="light_schedule"
            placeholder="18/6"
            value={currentData.light_schedule}
            onChange={handleInputChange}
          />
          <div className="buttons">
            <button
              disabled={!btnDisable}
              className="salvar"
              type="button"
              onClick={e => {
                e.preventDefault();

                saveItem(currentData);
              }}
            >
              Save
            </button>
          </div>
        </FormWrapper>
      </Form>
    </Modal>
  );
}

// ModalAddProject.propTypes = {
//   modalIsOpen: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   modalData: PropTypes.array,
// };

// ModalGrid.defaultProps = {
//   closeModal: () => {},
//   modalData: [],
// };

export default ModalAddProject;
