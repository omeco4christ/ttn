import React from 'react';
import CommentCard from '../shared/card/CommentCard';
import useGetForumTopicComments from '../../hooks/forumTopic/useGetForumTopicComments';

const TopicComments = props => {
  const {topicID} = props;
  const {comments} = useGetForumTopicComments(topicID);

  return comments.map(comment => (
    <CommentCard
      key={comment.id}
      commentID={comment.id}
      username={comment.username}
      time={comment.created_at}
      comment={comment.comment}
      topicID={topicID}
      reactionCount={comment.like_count}
      isReactionToggled={comment.is_liked}
    />
  ));
};

export default TopicComments;
