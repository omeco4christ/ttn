import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation, useRoute} from '@react-navigation/native';
import {URL_RESET_PASSWORD_SUCCESS} from '../../constants/navigations';

const useResetPassword = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const {token} = route.params;

  const mutation = useMutation(
    passwordObj => apiService.resetPassword(passwordObj),
    {
      onSuccess: () => {
        navigation.navigate(URL_RESET_PASSWORD_SUCCESS);
      },
    },
  );
  const {isLoading, error, data, reset} = mutation;
  const handleResetPassword = data => {
    if (error || data) {
      reset();
    }
    mutation.mutate({...data, token: token});
  };

  return {handleResetPassword, error, isLoading, data, reset};
};

export default useResetPassword;
