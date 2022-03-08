import React from 'react';
import styled from '@emotion/native';
import {COLOR_INPUT, COLOR_SECONDARY} from '../../../constants/styles';

const ActionAvatar = ({image}) => {
  return (
      <OuterCircle>
        <InnerCircle>
          <HeroImage source={{uri: image}}/>
        </InnerCircle>
      </OuterCircle>
  );
};

export default ActionAvatar;

const OuterCircle = styled.View`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${COLOR_SECONDARY};
  border-radius: 25px;
`;

const InnerCircle = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-color: ${COLOR_INPUT};
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.Image`
  height: 24px;
  width: 24px;
`;
