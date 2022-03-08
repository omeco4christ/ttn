import React from 'react';
import styled from '@emotion/native';
import {COLOR_TEXT_SECONDARY, COLOR_WHITE} from '../../constants/styles';
import ActionAvatar from '../shared/actionAvatar/ActionAvatar';
import {useNavigation} from '@react-navigation/native';
import {
  URL_FORUM,
  URL_FORUM_ID,
  URL_FORUM_NAME,
} from '../../constants/navigations';
import {TextSm, TextXs} from '../shared/text/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForumListItem = ({id, image, name, count}) => {
  const navigations = useNavigation();
  return (
    <Holder
      onPress={() =>
        navigations.navigate(URL_FORUM, {
          [URL_FORUM_ID]: id,
          [URL_FORUM_NAME]: name,
        })
      }>
      <ActionAvatar image={image} />
      <TextSection>
        <TextSm>{name}</TextSm>
        <TextXs color={COLOR_TEXT_SECONDARY}>{count} Posts</TextXs>
      </TextSection>
      <Icon name={'keyboard-arrow-right'} color={COLOR_WHITE} size={24} />
    </Holder>
  );
};

export default ForumListItem;

const Holder = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const TextSection = styled.View`
  margin-left: 15px;
  flex: 1;
`;
