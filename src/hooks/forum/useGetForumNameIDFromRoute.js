import {useRoute} from '@react-navigation/native';
import {URL_FORUM_ID, URL_FORUM_NAME} from '../../constants/navigations';

const useGetForumNameIDFromRoute = () => {
  const route = useRoute();
  const {[URL_FORUM_ID]: forumID, [URL_FORUM_NAME]: forumName} = route.params;

  return {forumID, forumName};
};

export default useGetForumNameIDFromRoute;
