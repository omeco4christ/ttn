import React from 'react';
import styled from '@emotion/native';
import {
  COLOR_DARK,
  COLOR_PRIMARY,
  MAIN_HORIZONTAL_SPACING,
} from '../../../constants/styles';
import AvatarUsernameTime from '../user/AvatarUsernameTime';
import {TextSm} from '../text/Text';
import ReactionCommentButtons from '../reaction/ReactionCommentButtons';
import {timeFromNow} from '../../../utils/helper';
import useToggleForumCommentReaction from '../../../hooks/forumTopic/useToggleForumCommentReaction';

const CommentCard = ({
  comment,
  commentID,
  username,
  time,
  topicID,
  reactionCount,
  isReactionToggled,
  reactionToggledType,
}) => {
  const {handleToggle} = useToggleForumCommentReaction({
    commentID,
    topicID,
    isToggled: isReactionToggled,
  });
  return (
    <Holder>
      <HeaderHolder>
        <AvatarUsernameTime name={username} time={timeFromNow(time)} />
      </HeaderHolder>
      <MainContent>
        <TextSm ellipsizeMode="tail" numberOfLines={3}>
          {comment}
        </TextSm>
        <ReactionContainer>
          <ReactionCommentButtons
            onToggleReaction={handleToggle}
            isToggled={isReactionToggled}
            toggledType={reactionToggledType}
            reactionCount={reactionCount}
          />
        </ReactionContainer>
      </MainContent>
      <Divider />
    </Holder>
  );
};

export default CommentCard;

const Holder = styled.View`
  background-color: ${COLOR_PRIMARY};
  padding-vertical: ${MAIN_HORIZONTAL_SPACING};
`;

const HeaderHolder = styled.View`
  flex-direction: row;
`;

const MainContent = styled.View`
  padding-left: 65px;
  margin-vertical: ${MAIN_HORIZONTAL_SPACING};
  position: relative;
`;

const ReactionContainer = styled.View`
  margin-top: 20px;
`;

const Divider = styled.View`
  border-bottom-color: ${COLOR_DARK};
  border-bottom-width: 3px;
  margin-left: 45px;
  width: 100%;
`;
