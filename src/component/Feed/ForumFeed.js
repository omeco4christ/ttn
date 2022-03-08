import React from 'react';
import {View} from 'react-native';
import FeedSearchHeader from './component/FeedSearchHeader';
import FeedHeader from './component/FeedHeader';
import ForumList from './component/ForumList';
import useGetTrendingTopics from '../../hooks/useGetTrendingTopics';
import useGetLatestTopics from '../../hooks/forumTopic/useGetForumTopics';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import {TextExLg} from '../shared/text/Text';
import {
  FONT_WEIGHT_BOLD,
  MAIN_HORIZONTAL_SPACING,
} from '../../constants/styles';
import styled from '@emotion/native';
import ForumTopicList from '../shared/list/ForumTopicList';
import useForumList from '../../hooks/forum/useForumList';

const ForumFeed = () => {
  // const [data] = useGetTrendingForum();
  const {data} = useForumList();
  const [trendingTopics] = useGetTrendingTopics();
  const {data: latestTopics} = useGetLatestTopics();
  return (
    <View style={{flex: 1}}>
      <FeedSearchHeader />
      <VerticalScroll>
        <FeedHeader />
        <ForumList data={data} />

        {/*<TitleContent>*/}
        {/*  <TextExLg weight={FONT_WEIGHT_BOLD}>Trending</TextExLg>*/}
        {/*</TitleContent>*/}
        {/*<SlidePost data={trendingTopics} />*/}
        <TitleContent>
          <TextExLg weight={FONT_WEIGHT_BOLD}>Latest</TextExLg>
        </TitleContent>
        <TopicSection>
          <ForumTopicList data={latestTopics} />
        </TopicSection>
      </VerticalScroll>
    </View>
  );
};

export default ForumFeed;

const TitleContent = styled.View`
  margin-left: ${MAIN_HORIZONTAL_SPACING};
`;

const TopicSection = styled.View`
  padding-horizontal: 15px;
`;
