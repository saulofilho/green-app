import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {
  WrapperContent,
  AddWrapper,
  WrapperDataAdd,
  Form,
  FormWrapper,
  SelectStyled,
  DownloadData,
  WarnProgress,
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
  progress,
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
              id={uniqid()}
              placeholder="Infos..."
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Phase</p>
            <SelectStyled
              defaultMenuIsOpen
              id={uniqid()}
              name="phase"
              onChange={handleSelectChange}
              options={phases}
            />
          </FormWrapper>
          <FormWrapper>
            <p>pH Water</p>
            <input
              type="text"
              name="ph_water"
              id={uniqid()}
              placeholder="6.2"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>pH Soil</p>
            <input
              type="text"
              name="ph_soil"
              id={uniqid()}
              placeholder="6.2"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>EC</p>
            <input
              type="text"
              name="ec"
              id={uniqid()}
              placeholder="2000"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Temperature Max</p>
            <input
              type="text"
              name="temp_max"
              id={uniqid()}
              placeholder="37"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Temperature Min</p>
            <input
              type="text"
              name="temp_min"
              id={uniqid()}
              placeholder="20"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Soil Moisture</p>
            <input
              type="text"
              name="moisture"
              id={uniqid()}
              placeholder="80"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Air Humidity</p>
            <input
              type="text"
              name="air_humidity"
              id={uniqid()}
              placeholder="60"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Plant Size</p>
            <input
              type="text"
              name="plant_size"
              id={uniqid()}
              placeholder="0.90"
              onChange={handleInputChange}
            />
          </FormWrapper>
          <FormWrapper>
            <p>Image</p>
            {preview ? <img src={preview} alt="green data img" /> : ''}
            <input
              name="img_id"
              type="file"
              id={uniqid()}
              accept="image/*"
              data-file={file}
              onChange={handleChange}
              ref={ref}
            />
            <WarnProgress>Up progress: {progress}%</WarnProgress>
            <DownloadData>
              <button
                type="button"
                onClick={() => {
                  saveItem(currentData);
                }}
              >
                Save
              </button>
            </DownloadData>
          </FormWrapper>
        </Form>
      </WrapperDataAdd>
    </WrapperContent>
  );
}

AddData.propTypes = {
  toggleAdd: PropTypes.func.isRequired,
  isToggledAdd: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  phases: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  preview: PropTypes.string,
  file: PropTypes.number,
  ref: PropTypes.func,
  progress: PropTypes.number,
};

AddData.defaultProps = {
  preview: '',
  file: 0,
  progress: 0,
  ref: () => {},
};
