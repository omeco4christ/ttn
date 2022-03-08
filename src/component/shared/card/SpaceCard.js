import React from 'react';
import {CSS_STYLE_SHADOW_HOLDER} from '../../../styles/styles';
import styled from '@emotion/native';
import {TextSm, TextXs} from '../text/Text';
import {
  COLOR_PRIMARY,
  COLOR_TEXT_SECONDARY,
  FONT_WEIGHT_BOLD,
} from '../../../constants/styles';
import {useNavigation} from '@react-navigation/native';
import {URL_SPACE} from '../../../constants/navigations';

const SpaceCard = ({id, image, name, count, description}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate(URL_SPACE, {
      spaceID: id,
    });
  };
  return (
    <Holder style={CSS_STYLE_SHADOW_HOLDER} onPress={handleNavigate}>
      <SpaceLogo source={{uri: image}} />
      <TextSection>
        <TextSm weight={FONT_WEIGHT_BOLD}>{name}</TextSm>
        <TextXs color={COLOR_TEXT_SECONDARY}>{count}</TextXs>
        <TextSm numberOfLines={2}>{description}</TextSm>
      </TextSection>
    </Holder>
  );
};

export default SpaceCard;

const Holder = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${COLOR_PRIMARY};
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const SpaceLogo = styled.Image`
  width: 45px;
  height: 45px;
`;

const TextSection = styled.View`
  padding: 10px;
  flex: 1;
`;
