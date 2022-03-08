import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {queryClient} from '../../services/queryClient';

const useAddEducationHistory = () => {
  const {mutate, isSuccess} = useMutation(
    values => apiService.addEducationHistory(values),
    {
      onSuccess: res => {
        console.log(res);
        queryClient.invalidateQueries(['education']);
      },
    },
  );
  const handleAdd = values => {
    mutate({...values, current: false});
  };
  return {handleAdd, isSuccess};
};

export default useAddEducationHistory;
