import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_RESET_PASSWORD_TOKEN} from '../../constants/navigations';

const useForgetPassword = () => {
  const navigation = useNavigation();
  const mutation = useMutation(
    emailObj => apiService.forgetPassword(emailObj),
    {
      onSuccess: () => {
        navigation.navigate(URL_RESET_PASSWORD_TOKEN);
      },
    },
  );
  const {isLoading, error, data, reset} = mutation;
  const handleSendEmail = data => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleSendEmail, error, isLoading, data, reset};
};

export default useForgetPassword;
