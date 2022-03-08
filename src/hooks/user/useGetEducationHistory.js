import apiService from '../../services/apiService';
import {useQuery} from 'react-query';

const useGetEducationHistory = () => {
  const {data, isSuccess, error} = useQuery(
    ['education'],
    apiService.getEducationCredential,
  );

  return {data, isSuccess, error};
};

export default useGetEducationHistory;
