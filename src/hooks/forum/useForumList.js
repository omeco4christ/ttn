import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useForumList = () => {
  const {data, error} = useQuery('forums', () => apiService.getForumsList(1));

  return {data, error};
};

export default useForumList;
