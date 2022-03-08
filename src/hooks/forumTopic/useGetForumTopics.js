import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetForumTopics = forumID => {
  const {data, error, isLoading} = useQuery(['forum-topics', forumID], () =>
    apiService.getForumTopics({
      forumID,
      pageNumber: 1,
    }),
  );

  const topics = !isLoading && data ? data.data : [];

  return {data: topics, error};
};

export default useGetForumTopics;
