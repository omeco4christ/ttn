import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {queryClient} from '../../services/queryClient';

const useToggleForumCommentReaction = ({commentID, topicID, isToggled}) => {
  const {mutate: addReaction} = useMutation(
    ['forum-topic-comment-reaction', commentID],
    () => apiService.addForumTopicCommentReaction({commentID}),
    {
      onSuccess: (...res) => {
        queryClient.setQueryData(
          ['forum-topic-comment', {topicID}],
          oldData => {
            return {
              ...oldData,
              data: oldData.data.map(comment =>
                comment.id === commentID
                  ? {
                      ...comment,
                      is_liked: true,
                      like_count: parseInt(comment.like_count) + 1,
                    }
                  : comment,
              ),
            };
          },
        );
      },
    },
  );

  const {mutate: deleteReaction} = useMutation(
    ['forum-topic-comment-reaction', commentID],
    () => apiService.deleteForumTopicCommentReaction({commentID}),
    {
      onSuccess: res => {
        queryClient.setQueryData(
          ['forum-topic-comment', {topicID}],
          oldData => {
            return {
              ...oldData,
              data: oldData.data.map(comment =>
                comment.id === commentID
                  ? {
                      ...comment,
                      is_liked: false,
                      like_count: parseInt(comment.like_count) - 1,
                    }
                  : comment,
              ),
            };
          },
        );
      },
    },
  );
  const handleToggle = () => {
    if (isToggled) {
      deleteReaction();
    } else {
      addReaction();
    }
  };
  return {handleToggle};
};

export default useToggleForumCommentReaction;
