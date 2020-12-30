import React from 'react';
import Select from 'react-select';
import {
  WrapperContent,
  AddWrapper,
  WrapperDataAdd,
  Form,
  FormWrapper,
} from './styles';

export default function AddData({
  toggleAdd,
  isToggledAdd,
  handleInputChange,
  handleChange,
  saveItem,
  currentData,
  phases,
  handleSelectChange,
  preview,
  file,
  ref,
  btnDisable,
}) {
  return (
    <WrapperContent>
      <AddWrapper onClick={() => toggleAdd()}>Add a brand new day!</AddWrapper>
      <WrapperDataAdd hideAdd={isToggledAdd}>
        <Form>
          <FormWrapper>
            <p>Infos</p>
            <textarea
              name="infos"
              id="infos"
              placeholder="Infos..."
              onChange={handleInputChange}
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
              placeholder="6.2"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>PH Soil</p>
            <input
              type="text"
              name="ph_soil"
              id="ph_soil"
              placeholder="6.2"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>EC</p>
            <input
              type="text"
              name="ec"
              id="ec"
              placeholder="2000"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Temperature Max</p>
            <input
              type="text"
              name="temp_max"
              id="temp_max"
              placeholder="37"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Temperature Min</p>
            <input
              type="text"
              name="temp_min"
              id="temp_min"
              placeholder="20"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Soil Moisture</p>
            <input
              type="text"
              name="moisture"
              id="moisture"
              placeholder="80"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Air Humidity</p>
            <input
              type="text"
              name="air_humidity"
              id="air_humidity"
              placeholder="60"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Image</p>
            {preview ? <img src={preview} alt="green data img" /> : ''}
            <input
              name="img_id"
              type="file"
              id="img_id"
              accept="image/*"
              data-file={file}
              onChange={handleChange}
              ref={ref}
            />
            <div className="buttons">
              <button
                disabled={!btnDisable}
                type="button"
                className="salvar"
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
      </WrapperDataAdd>
    </WrapperContent>
  );
}
