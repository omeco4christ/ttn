import React from 'react';
import styled from '@emotion/native';
import {SpaceLogo} from '../shared/card/SpaceCard';
import {COLOR_DARK, COLOR_SECONDARY} from '../../constants/styles';
import ChipButton from '../shared/buttons/ChipButton';
import {TextLg, TextSm, TextXs} from '../shared/text/Text';

const SpaceHeader = props => {
  const {cover_image, image, name, description, follower} = props;
  return (
    <Holder>
      <CoverImage source={{uri: cover_image}} />

      <BodySection>
        <LogoHolder>
          <SpaceLogo source={{uri: image}} />
        </LogoHolder>
        <ButtonWrap>
          <ChipButton title={'Follow'} bgColor={COLOR_SECONDARY} />
        </ButtonWrap>
        <NameSection>
          <TextLg>{name}</TextLg>
        </NameSection>
        <DescriptionSection>
          <TextSm>{description}</TextSm>
        </DescriptionSection>
        <TextXs>{follower} followers</TextXs>
      </BodySection>
    </Holder>
  );
};

export default SpaceHeader;

const Holder = styled.View`
  width: 100%;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 80px;
`;

const LogoHolder = styled.View`
  position: absolute;
  top: -8px;
  left: 20px;
`;

const BodySection = styled.View`
  width: 100%;
  color: ${COLOR_DARK};
  padding: 12px 20px 10px;
  background-color: #4e586e;
`;

const ButtonWrap = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;
const NameSection = styled.View`
  margin-top: 20px;
  margin-bottom: 15px;
`;

const DescriptionSection = styled.View`
  margin-bottom: 30px;
`;
