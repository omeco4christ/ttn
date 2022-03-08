import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetForumTopicComments = topicID => {
  const {data, error} = useQuery(
    ['forum-topic-comment', {topicID: topicID}],
    () => apiService.getForumTopicComment({topicID, pageNumber: 1}),
  );

  const comments = data ? data.data : [];
  return {comments, error};
};

export default useGetForumTopicComments;
