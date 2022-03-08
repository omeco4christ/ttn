import React from 'react';
import styled from '@emotion/native';
import {TextSm, TextXs} from '../text/Text';
import {COLOR_TEXT_SECONDARY, FONT_WEIGHT_BOLD,} from '../../../constants/styles';

const TrendingList = ({url, primary, secondary}) => {
  return (
      <Holder>
        <ImageWrap source={{uri: url}} width={135} height={135}/>
        <TextSection>
          <TextSm weight={FONT_WEIGHT_BOLD}> {primary}</TextSm>
          <TextXs color={COLOR_TEXT_SECONDARY}>{secondary}</TextXs>
        </TextSection>
      </Holder>
  );
};

export default TrendingList;

const Holder = styled.View`
  width: 135px;
`;

const ImageWrap = styled.Image`
  width: 135px;
  height: 135px;
  border-radius: 10px;
`;

const TextSection = styled.View`
  margin-top: 10px;
`;
