import React from 'react';
import styled from '@emotion/native';
import SvgComponent from '../shared/icon/SpaceBuild';
import {TextLg, TextNorm, TextSm} from '../shared/text/Text';
import {COLOR_DARK, FONT_WEIGHT_BOLD} from '../../constants/styles';

const SpaceListHeader = () => {
  return (
    <Holder>
      <SvgComponent />
      <TextSection>
        <TextNorm weight={FONT_WEIGHT_BOLD}>
          Build your new following feed
        </TextNorm>
        <TextSm style={{textAlign: 'center'}}>
          Follow some Space to start discovering stories in your feed
        </TextSm>
      </TextSection>
      <TitleSection>
        <TextLg weight={FONT_WEIGHT_BOLD}>Discover Spaces</TextLg>
      </TitleSection>
    </Holder>
  );
};

export default SpaceListHeader;

const Holder = styled.View`
  align-items: center;
  padding: 10px;
  background-color: ${COLOR_DARK};
`;

const TextSection = styled.View`
  padding-horizontal: 35px;
  align-items: center;
  margin-bottom: 46px;
`;

const TitleSection = styled.View`
  width: 100%;
`;
