import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import asyncStorageService from '../../services/asyncStorageService';

const useSignup = () => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.signup(user), {
    onSuccess: async res => {
      console.log(res);
      await asyncStorageService.setToken(res.token);
      navigation.navigate('Tab');
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleSignup = data => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleSignup, error, isLoading, data, reset};
};

export default useSignup;
