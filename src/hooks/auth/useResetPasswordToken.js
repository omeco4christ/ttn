import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_RESET_PASSWORD} from '../../constants/navigations';

const useResetPasswordToken = () => {
  const navigation = useNavigation();
  const mutation = useMutation(
    tokenObj => apiService.resetPasswordTokenValidation(tokenObj),
    {
      onSuccess: (data, tokenObj) => {
        navigation.navigate(URL_RESET_PASSWORD, {token: tokenObj.token});
      },
    },
  );
  const {isLoading, error, data, reset} = mutation;
  const handleValidateToken = data => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleValidateToken, error, isLoading, data, reset};
};

export default useResetPasswordToken;
