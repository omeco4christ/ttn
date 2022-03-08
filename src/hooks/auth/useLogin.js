import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import asyncStorageService from '../../services/asyncStorageService';

const useLogin = () => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.login(user), {
    onSuccess: async res => {
      await asyncStorageService.setToken(res.token);
      navigation.navigate('Tab');
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleLogin = data => {
    console.log(error);
    // if (error || data) {
    //   reset();
    // }
    mutation.mutate(data);
  };

  return {handleLogin, error, isLoading, data, reset};
};

export default useLogin;
