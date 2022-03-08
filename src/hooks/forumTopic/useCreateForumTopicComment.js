import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useRoute} from '@react-navigation/native';

const useCreateForumTopicComment = () => {
  const {params} = useRoute();
  const {mutate, error, isLoading, isSuccess} = useMutation(
    ['forum-topic-comment'],
    apiService.createForumTopicComment,
  );

  const handleAddComment = ({comment}) => {
    mutate({topicID: params.id, comment: comment});
  };
  return {handleAddComment, error, isLoading, isSuccess};
};

export default useCreateForumTopicComment;
