import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetForum = id => {
  const {data} = useQuery(['forum', id], () => apiService.getForum(id));

  return {data: data};
};

export default useGetForum;
