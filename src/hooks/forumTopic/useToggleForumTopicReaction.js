import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {queryClient} from '../../services/queryClient';

const useToggleForumTopicReaction = ({topicID, forumID, isToggled}) => {
  const {mutate, isSuccess} = useMutation(
    ['forum-topic-reaction', topicID],
    () => apiService.addForumTopicReaction({topicID}),
    {
      onSuccess: (...res) => {
        queryClient.setQueryData(['forum-topic', topicID], topic => ({
          ...topic,
          is_liked: true,
          like_count: parseInt(topic.like_count) + 1,
        }));
        queryClient.setQueryData(['forum-topics', forumID], oldData => {
          return {
            ...oldData,
            data: oldData.data.map(topic =>
              topic.topic_id === topicID
                ? {
                    ...topic,
                    is_liked: true,
                    like_count: parseInt(topic.like_count) + 1,
                  }
                : topic,
            ),
          };
        });
      },
    },
  );

  const {mutate: deleteReaction} = useMutation(
    ['forum-topic-reaction', topicID],
    () => apiService.deleteForumTopicReaction({topicID}),
    {
      onSuccess: res => {
        queryClient.setQueryData(['forum-topic', topicID], topic => ({
          ...topic,
          is_liked: false,
          like_count: parseInt(topic.like_count) - 1,
        }));
        queryClient.setQueryData(['forum-topics', forumID], oldData => {
          return {
            ...oldData,
            data: oldData.data.map(topic =>
              topic.topic_id === topicID
                ? {
                    ...topic,
                    is_liked: false,
                    like_count: parseInt(topic.like_count) - 1,
                  }
                : topic,
            ),
          };
        });
      },
    },
  );
  const handleToggle = () => {
    if (isToggled) {
      deleteReaction();
    } else {
      mutate();
    }
  };
  return {handleToggle, isSuccess};
};

export default useToggleForumTopicReaction;
