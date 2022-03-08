import React from 'react';
import Forum from '../../component/forum/Forum';
import useGetForum from '../../hooks/forum/useGetForum';
import useGetForumNameIDFromRoute from '../../hooks/forum/useGetForumNameIDFromRoute';

const ForumScreen = () => {
  const {forumID} = useGetForumNameIDFromRoute();
  const {data} = useGetForum(forumID);
  return data ? <Forum data={data} /> : null;
};

export default ForumScreen;
