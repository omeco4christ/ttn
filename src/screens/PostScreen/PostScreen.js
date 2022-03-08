import React from 'react';
import PostToForum from '../../component/post/PostToForum';
import {TextLg} from '../../component/shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../../constants/styles';
import styled from '@emotion/native';
import AskAQuestion from '../../component/post/AskAQuestion';
import PostToSpace from '../../component/post/PostToSpace';

const PostScreen = () => {
  return (
    <Holder>
      <TextLg weight={FONT_WEIGHT_BOLD}>Select a Post</TextLg>
      <BodySection>
        <PostToForum />
        <PostToSpace />
        <AskAQuestion />
      </BodySection>
    </Holder>
  );
};

export default PostScreen;
const Holder = styled.View`
  padding: 20px;
`;

const BodySection = styled.View`
  margin-top: 20px;
`;
