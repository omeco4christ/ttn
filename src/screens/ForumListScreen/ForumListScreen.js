import React from 'react';
import ForumList from '../../component/forum/ForumList';
import useForumList from '../../hooks/forum/useForumList';

const ForumListScreen = () => {
  const {data} = useForumList();
  return <ForumList data={data} />;
};

export default ForumListScreen;
