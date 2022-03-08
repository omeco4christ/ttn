import React from 'react';
import styled from '@emotion/native';
import ActionAvatar from '../../shared/actionAvatar/ActionAvatar';
import {TextXs} from '../../shared/text/Text';
import {
  FONT_WEIGHT_BLACK,
  MAIN_HORIZONTAL_SPACING,
} from '../../../constants/styles';
import HorizontalScroll from '../../shared/scroll/HorizontalScroll';
import {URL_FORUM, URL_FORUM_PARAMS} from '../../../constants/navigations';
import {useNavigation} from '@react-navigation/native';

const ForumList = ({data = []}) => {
  return (
    <HorizontalScroll>
      <Holder>
        {data.map(forum => (
          <ForumListItem
            key={forum.id}
            id={forum.id}
            image={forum.icon_url}
            name={forum.name}
          />
        ))}
      </Holder>
    </HorizontalScroll>
  );
};

export default ForumList;

const Holder = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-top: 10px;
`;

const ForumListItem = ({id, image, name}) => {
  const navigation = useNavigation();
  return (
    <ListItem
      onPress={() =>
        navigation.navigate(URL_FORUM, {
          [URL_FORUM_PARAMS]: id,
        })
      }>
      <AvatarWrap>
        <ActionAvatar image={image} />
      </AvatarWrap>
      <TextXs weight={FONT_WEIGHT_BLACK}>{name}</TextXs>
    </ListItem>
  );
};

const ListItem = styled.TouchableOpacity`
  margin-right: ${MAIN_HORIZONTAL_SPACING};
  align-items: center;
  justify-content: center;
  width: 70px;
`;

const AvatarWrap = styled.View`
  margin-bottom: 5px;
`;
