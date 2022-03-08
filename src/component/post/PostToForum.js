import React from 'react';
import PostListButton from './PostListButton';
import useForumList from '../../hooks/forum/useForumList';
import Popover from '../shared/Popover';
import useModal from '../../hooks/useModal';
import {useNavigation} from '@react-navigation/native';
import {
  URL_CREATE_FORUM_POST,
  URL_FORUM_ID,
  URL_FORUM_NAME,
} from '../../constants/navigations';
import ActionAvatar from '../shared/actionAvatar/ActionAvatar';
import {TextSm} from '../shared/text/Text';
import {COLOR_WHITE} from '../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from '@emotion/native';
import ForumListRenderer from '../forum/ForumListRenderer';
import Feather from 'react-native-vector-icons/Feather';
import IconButton from '../shared/buttons/IconButton';

const PostToForum = () => {
  const {data} = useForumList();
  const {openModal, closeModal, modal} = useModal();
  return (
    <>
      <PostListButton label={'Post To Forum'} onPress={openModal} />
      <Popover
        open={modal}
        onClose={closeModal}
        style={{flex: 1, height: '100%'}}>
        <PopoverSection>
          <PopoverHeadSection>
            <TextSm>Select Forum</TextSm>
            <IconButton onPress={closeModal}>
              <Feather name={'x'} color={COLOR_WHITE} size={24} />
            </IconButton>
          </PopoverHeadSection>
          <ForumListRenderer data={data}>
            {forum => (
              <ListItem
                id={forum.id}
                name={forum.name}
                image={forum.icon_url}
              />
            )}
          </ForumListRenderer>
        </PopoverSection>
      </Popover>
    </>
  );
};

export default PostToForum;

const PopoverSection = styled.View`
  padding: 20px;
`;

const PopoverHeadSection = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const ListItem = ({id, image, name}) => {
  const navigations = useNavigation();
  return (
    <ListHolderItem
      onPress={() =>
        navigations.navigate(URL_CREATE_FORUM_POST, {
          [URL_FORUM_ID]: id,
          [URL_FORUM_NAME]: name,
        })
      }>
      <ActionAvatar image={image} />
      <TextSection>
        <TextSm>{name}</TextSm>
      </TextSection>
      <Icon name={'keyboard-arrow-right'} color={COLOR_WHITE} size={24} />
    </ListHolderItem>
  );
};

const ListHolderItem = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const TextSection = styled.View`
  margin-left: 15px;
  flex: 1;
`;
