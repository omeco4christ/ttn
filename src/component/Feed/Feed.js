import React from 'react';
import {View} from 'react-native';
import FeedSearchHeader from './component/FeedSearchHeader';
import useGetTrendingTopics from '../../hooks/useGetTrendingTopics';
import useGetLatestTopics from '../../hooks/forumTopic/useGetForumTopics';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import ForumTopicList from '../shared/list/ForumTopicList';
import styled from '@emotion/native';
import Popover from '../shared/Popover';
import useModal from '../../hooks/useModal';
import MenuItem from '../shared/MenuItem';
import postType from '../../utils/postType';

const Feed = () => {
  const [trendingTopics] = useGetTrendingTopics();
  const {data: latestTopics} = useGetLatestTopics();
  const {modal, openModal, closeModal} = useModal();
  return (
    <View style={{flex: 1}}>
      <FeedSearchHeader
      // postButton={<ChipButton title={'POST'} onPress={openModal} />}
      />
      <Popover open={modal} onClose={closeModal} modalType={'center'}>
        {postType.keysArray().map((item, index) => (
          <MenuItem
            key={item}
            bottomBorder={index !== postType.keysArray().length - 1}>
            {postType.getType(item)}
          </MenuItem>
        ))}
      </Popover>
      <VerticalScroll>
        <TopicSection>
          <ForumTopicList data={latestTopics} />
        </TopicSection>

        {/*<SlidePost data={trendingTopics} />*/}
      </VerticalScroll>
      {/*<BottomNav />*/}
    </View>
  );
};

export default Feed;

const TopicSection = styled.View`
  padding-horizontal: 15px;
`;
