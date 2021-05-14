/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import ModalInfosCard from './ModalInfosCard';
import {
  WrapperContent,
  DayCard,
  Number,
  RowDayWrapper,
  CardInfosWrapper,
  CardInfosWrapperCenter,
  SmallText,
  SmallTextCenter,
  BigText,
  Week,
} from './styles';

export default function Card({
  allProjectData,
  badgeTheme,
  preview,
  editOn,
  editButton,
  handleInputChange,
  updateItem,
  currentData,
  handleSelectChange,
  phases,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardInfos, setCardInfos] = useState();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const showCardInfos = item => {
    openModal();
    setCardInfos(item);
  };

  return (
    <>
      {allProjectData.length
        ? allProjectData.map((item, index) => (
            <WrapperContent key={item.id}>
              <DayCard onClick={() => showCardInfos(item)}>
                <RowDayWrapper theme={badgeTheme(item.phase)}>
                  <CardInfosWrapper>
                    <SmallText>Day:</SmallText>
                    <Number>{index + 1}</Number>
                  </CardInfosWrapper>
                  <CardInfosWrapperCenter>
                    <SmallText>Date:</SmallText>
                    <SmallTextCenter>
                      {parseISO(item.createdAt).toLocaleString('en-US', {
                        day: '2-digit',
                        weekday: 'short',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </SmallTextCenter>
                  </CardInfosWrapperCenter>
                  <CardInfosWrapper>
                    <SmallText>Phase:</SmallText>
                    <BigText>{item.phase}</BigText>
                  </CardInfosWrapper>
                </RowDayWrapper>
              </DayCard>
              <ModalInfosCard
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                currentData={currentData}
                cardInfos={cardInfos}
                editButton={editButton}
                editOn={editOn}
                handleInputChange={handleInputChange}
                updateItem={updateItem}
                handleSelectChange={handleSelectChange}
                phases={phases}
                preview={preview}
              />
              <Week>
                {(index + 1) % 7 === 0 ? (
                  <div>
                    <p>Week {`${(index + 1) / 7}`}</p>
                  </div>
                ) : (
                  ''
                )}
              </Week>
            </WrapperContent>
          ))
        : null}
    </>
  );
}
