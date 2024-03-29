import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {
  WrapperInfos,
  Col,
  Button,
  TitleBox,
  WrapperDataAdd,
  Form,
  FormWrapper,
  SelectEdited,
  DownloadData,
} from './styles';

export default function EditData({
  editButton,
  editOn,
  cardInfos,
  handleInputChange,
  currentData,
  handleSelectChange,
  phases,
  updateItem,
}) {
  return (
    <WrapperInfos>
      <Col>
        <Button type="button" onClick={() => editButton(cardInfos)}>
          <i className="ri-file-edit-line ri-2x" />
        </Button>
        <TitleBox>Edit your data: </TitleBox>
        <WrapperDataAdd hideAdd={editOn}>
          <Form>
            <FormWrapper>
              <p>Infos</p>
              <textarea
                name="infos"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.infos}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Phase</p>
              <SelectEdited
                defaultMenuIsOpen
                id={uniqid()}
                name="phase"
                onChange={handleSelectChange}
                options={phases}
                defaultValue={currentData && currentData.phase}
              />
            </FormWrapper>
            <FormWrapper>
              <p>pH Water</p>
              <input
                type="text"
                name="ph_water"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.ph_water}
              />
            </FormWrapper>
            <FormWrapper>
              <p>pH Soil</p>
              <input
                type="text"
                name="ph_soil"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.ph_soil}
              />
            </FormWrapper>
            <FormWrapper>
              <p>EC</p>
              <input
                type="text"
                name="ec"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.ec}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Temperature Max</p>
              <input
                type="text"
                name="temp_max"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.temp_max}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Temperature Min</p>
              <input
                type="text"
                name="temp_min"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.temp_min}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Soil Moisture</p>
              <input
                type="text"
                name="moisture"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.moisture}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Plant Size</p>
              <input
                type="text"
                name="plant_size"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.plant_size}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Air Humidity</p>
              <input
                type="text"
                name="air_humidity"
                id={uniqid()}
                onChange={handleInputChange}
                value={currentData && currentData.air_humidity}
              />
            </FormWrapper>
            <FormWrapper>
              <div className="buttons">
                <DownloadData>
                  <button
                    type="button"
                    onClick={e => {
                      e.preventDefault();
                      updateItem(currentData.id, currentData);
                    }}
                  >
                    Edit
                  </button>
                </DownloadData>
              </div>
            </FormWrapper>
          </Form>
        </WrapperDataAdd>
      </Col>
    </WrapperInfos>
  );
}

EditData.propTypes = {
  editButton: PropTypes.func.isRequired,
  editOn: PropTypes.bool.isRequired,
  cardInfos: PropTypes.object,
  handleInputChange: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  phases: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
};

EditData.defaultProps = {
  cardInfos: {},
};
