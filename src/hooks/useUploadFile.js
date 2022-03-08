import {useMutation} from 'react-query';
import apiService from '../services/apiService';

const useUploadFile = () => {
  const {mutateAsync, data} = useMutation(data => apiService.uploadFile(data));

  const handleUpload = file =>
    new Promise((resolve, reject) => {
      console.log('file');
      const formData = new FormData();
      formData.append('type', 'passing_url');
      formData.append('file', file);
      console.log(formData);
      mutateAsync(formData)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });

  return {handleUpload};
};

export default useUploadFile;
