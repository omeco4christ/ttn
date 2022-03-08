import ForumTopicCard from '../card/ForumTopicCard';
import React from 'react';
import styled from '@emotion/native';

const ForumTopicList = ({data = []}) => {
  return data.map(topic => (
    <CardContent key={topic.topic_id}>
      <ForumTopicCard
        topicID={topic.topic_id}
        body={topic.description}
        username={topic.username}
        time={topic.time}
        title={topic.title}
        forum={topic.forum_name}
        forumName={topic.forum_name}
        forumID={topic.forum_id}
        reactionCount={topic.like_count}
        viewCount={topic.view_count}
        commentCount={topic.comment_count}
        isReactionToggled={topic.is_liked}
        reactionToggledType={topic.like_type}
      />
    </CardContent>
  ));
};

export default ForumTopicList;

const CardContent = styled.View`
  margin-bottom: 15px;
`;
