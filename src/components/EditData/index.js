import React from 'react';
import Select from 'react-select';
import {
  WrapperInfos,
  Col,
  Button,
  TitleBox,
  WrapperDataAdd,
  Form,
  FormWrapper,
} from './styles';

export default function EditData({
  editButton,
  editOn,
  item,
  handleInputChange,
  currentData,
  handleSelectChange,
  btnDisable,
  phases,
  updateItem,
}) {
  return (
    <WrapperInfos>
      <Col>
        <Button type="button" onClick={() => editButton(item)}>
          <i className="ri-file-edit-line ri-2x" />
        </Button>
        <TitleBox>Edit your data: </TitleBox>
        <WrapperDataAdd hideAdd={editOn}>
          <Form>
            <FormWrapper>
              <p>Infos</p>
              <textarea
                name="infos"
                id="infos"
                onChange={handleInputChange}
                value={currentData && currentData.infos}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Phase</p>
              <Select
                defaultMenuIsOpen
                id="phase"
                name="phase"
                onChange={handleSelectChange}
                options={phases}
              />
            </FormWrapper>
            <FormWrapper>
              <p>PH Water</p>
              <input
                type="text"
                name="ph_water"
                id="ph_water"
                onChange={handleInputChange}
                value={currentData && currentData.ph_water}
              />
            </FormWrapper>
            <FormWrapper>
              <p>PH Soil</p>
              <input
                type="text"
                name="ph_soil"
                id="ph_soil"
                onChange={handleInputChange}
                value={currentData && currentData.ph_soil}
              />
            </FormWrapper>
            <FormWrapper>
              <p>EC</p>
              <input
                type="text"
                name="ec"
                id="ec"
                onChange={handleInputChange}
                value={currentData && currentData.ec}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Temperature Max</p>
              <input
                type="text"
                name="temp_max"
                id="temp_max"
                onChange={handleInputChange}
                value={currentData && currentData.temp_max}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Temperature Min</p>
              <input
                type="text"
                name="temp_min"
                id="temp_min"
                onChange={handleInputChange}
                value={currentData && currentData.temp_min}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Soil Moisture</p>
              <input
                type="text"
                name="moisture"
                id="moisture"
                onChange={handleInputChange}
                value={currentData && currentData.moisture}
              />
            </FormWrapper>
            <FormWrapper>
              <p>Air Humidity</p>
              <input
                type="text"
                name="air_humidity"
                id="air_humidity"
                onChange={handleInputChange}
                value={currentData && currentData.air_humidity}
              />
            </FormWrapper>
            <FormWrapper>
              <div className="buttons">
                <button
                  disabled={!btnDisable}
                  type="button"
                  className="salvar"
                  onClick={e => {
                    e.preventDefault();
                    updateItem(currentData.id, currentData);
                    window.location.reload();
                  }}
                >
                  Edit
                </button>
              </div>
            </FormWrapper>
          </Form>
        </WrapperDataAdd>
      </Col>
    </WrapperInfos>
  );
}
