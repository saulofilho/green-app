import React from 'react';
import PropTypes from 'prop-types';
import EditProjectData from '../EditProjectData';
import DeleteProjectData from '../DeleteProjectData';
import {
  Title,
  Subtitle,
  Text,
  TextWrapper,
  WrapperProjectInfos,
  Row,
} from './styles';

export default function ProjectInfos({ projectInfos, setProjectInfos }) {
  return (
    <>
      {projectInfos.length ? (
        projectInfos.map(item => (
          <WrapperProjectInfos key={item.id}>
            <Title>{item.harvest_name}</Title>
            <TextWrapper>
              <Text>Strain:&nbsp;</Text>
              <Subtitle>{item.strain_name}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Breeder:&nbsp;</Text>
              <Subtitle>{item.breeder}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Flowering Type:&nbsp;</Text>
              <Subtitle>{item.flowering_type}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Infos:&nbsp;</Text>
              <Subtitle>{item.infos}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Tools:&nbsp;</Text>
              <Subtitle>{item.tools}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Soil:&nbsp;</Text>
              <Subtitle>{item.soil}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Nutrients:&nbsp;</Text>
              <Subtitle>{item.nutrients}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Pot Size:&nbsp;</Text>
              <Subtitle>{item.pot_size} L</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Light Schedule:&nbsp;</Text>
              <Subtitle>{item.light_schedule}</Subtitle>
            </TextWrapper>
            <TextWrapper>
              <Text>Grow Techniques:&nbsp;</Text>
              <Subtitle>{item.grow_techniques}</Subtitle>
            </TextWrapper>
            <Row>
              <EditProjectData
                item={item}
                projectInfos={projectInfos}
                setProjectInfos={setProjectInfos}
              />
            </Row>
            <Row>
              <DeleteProjectData
                item={item}
                projectInfos={projectInfos}
                setProjectInfos={setProjectInfos}
              />
            </Row>
          </WrapperProjectInfos>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

ProjectInfos.propTypes = {
  projectInfos: PropTypes.array,
  setProjectInfos: PropTypes.func,
};

ProjectInfos.defaultProps = {
  projectInfos: [],
  setProjectInfos: () => {},
};
