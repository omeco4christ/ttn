import React from 'react';
import styled from '@emotion/native';
import {TextMd, TextXs} from '../shared/text/Text';
import {
  COLOR_PRIMARY,
  COLOR_TEXT_SECONDARY,
  FONT_WEIGHT_BOLD,
} from '../../constants/styles';
import {CSS_STYLE_SHADOW_HOLDER} from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';
import {URL_SPACE_POST} from '../../constants/navigations';

const SpacePostBox = () => {
  const navigation = useNavigation();
  return (
    <Holder style={CSS_STYLE_SHADOW_HOLDER}>
      <UserSection>
        <UserAvatar source={require('../../assets/images/user.jpg')} />
        <TextXs weight={FONT_WEIGHT_BOLD}>Christina Kennedy</TextXs>
      </UserSection>
      <TextSection onPress={() => navigation.navigate(URL_SPACE_POST)}>
        <TextMd color={COLOR_TEXT_SECONDARY} weight={FONT_WEIGHT_BOLD}>
          What is your Question or link?
        </TextMd>
      </TextSection>
    </Holder>
  );
};

export default SpacePostBox;

const Holder = styled.View`
  padding: 15px;
  background-color: ${COLOR_PRIMARY};
  margin-bottom: 20px;
`;

const UserSection = styled.View`
  flex-direction: row;
`;
const UserAvatar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-right: 10px;
`;
const TextSection = styled.TouchableOpacity`
  margin-top: 7px;
`;
