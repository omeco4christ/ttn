import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation, useRoute} from '@react-navigation/native';
import {URL_FORUM, URL_FORUM_PARAMS} from '../../constants/navigations';
import {queryClient} from '../../services/queryClient';

const useCreateForumTopic = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {mutate, isLoading, error, data} = useMutation(
    topic => apiService.createForumTopic(topic),
    {
      onSuccess: async res => {
        queryClient.invalidateQueries('forum-topics');
        navigation.navigate(URL_FORUM, {
          [URL_FORUM_PARAMS]: route.params.forumID,
        });
      },
    },
  );

  const handleCreateTopic = topic => {
    mutate({...topic, forum_id: route.params.forumID});
  };

  return {handleCreateTopic, isLoading, error, data};
};

export default useCreateForumTopic;
