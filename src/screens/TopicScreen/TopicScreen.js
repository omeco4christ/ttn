import React from 'react';
import Topic from '../../component/Topic/Topic';
import useGetForumTopicByID from '../../hooks/forumTopic/useGetForumTopicByID';
import {useRoute} from '@react-navigation/native';

const TopicScreen = () => {
  const route = useRoute();
  const {data} = useGetForumTopicByID(route.params.id);
  return data ? <Topic data={data} /> : null;
};

export default TopicScreen;
