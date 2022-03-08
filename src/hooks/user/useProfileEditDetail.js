import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {queryClient} from '../../services/queryClient';

const useProfileEditDetail = () => {
  const {mutate, isSuccess} = useMutation(
    data => apiService.updateUserProfile(data),
    {
      onSuccess: res => {
        console.log(res);
        queryClient.invalidateQueries(['user']);
      },
      onError: err => console.log(err),
    },
  );
  const handleUpdate = values => {
    mutate(values);
  };
  return {handleUpdate, isSuccess};
};

export default useProfileEditDetail;
