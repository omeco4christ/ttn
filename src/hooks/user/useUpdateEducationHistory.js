import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {queryClient} from '../../services/queryClient';

const useUpdateEducationHistory = () => {
  const {mutate, isSuccess} = useMutation(
    values => apiService.updateEducationHistory(values),
    {
      onSuccess: res => {
        console.log(res);
        queryClient.invalidateQueries(['education']);
      },
    },
  );
  const handleUpdate = values => {
    mutate(values);
  };
  return {handleUpdate, isSuccess};
};

export default useUpdateEducationHistory;
