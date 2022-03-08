import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetForumTopicByID = topicID => {
  const {data, error} = useQuery(['forum-topic', topicID], () =>
    apiService.getForumTopicsByID(topicID),
  );

  return {data};
};

export default useGetForumTopicByID;
