import {useMutation} from 'react-query';
import apiService from '../../services/apiService';

const useChangePassword = () => {
  const mutation = useMutation(passwordObj =>
    apiService.changePassword(passwordObj),
  );
  const {isLoading, error, data, reset} = mutation;
  const handleChangePassword = data => {
    mutation.mutate(data);
  };

  return {handleChangePassword, error, isLoading, data, reset};
};

export default useChangePassword;
