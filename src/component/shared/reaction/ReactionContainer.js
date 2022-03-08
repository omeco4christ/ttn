import React from 'react';
import styled from '@emotion/native';
import ReactionCount from './ReactionCount';
import {TextSm} from '../text/Text';
import {COLOR_TEXT_SECONDARY} from '../../../constants/styles';
import Divider from '../divider/Divider';
import ReactionButtons from './ReactionButtons';
import {useNavigation} from '@react-navigation/native';
import {URL_FORUM, URL_FORUM_PARAMS} from '../../../constants/navigations';
import useToggleForumTopicReaction from '../../../hooks/forumTopic/useToggleForumTopicReaction';

const ReactionContainer = props => {
  const {
    topicID,
    forumName,
    forumID,
    commentCount = 0,
    reactionCount = 0,
    viewCount = 0,
    isReactionToggled,
    reactionToggledType,
  } = props;
  const navigation = useNavigation();
  const {handleToggle, isSuccess} = useToggleForumTopicReaction({
    topicID,
    forumID,
    isToggled: isReactionToggled,
  });
  return (
    <Holder>
      <ReactionWrap>
        <ReactionCount
          commentCount={commentCount}
          reactionCount={reactionCount}
          viewCount={viewCount}
        />
        <TextSm
          color={COLOR_TEXT_SECONDARY}
          onPress={() =>
            navigation.navigate(URL_FORUM, {[URL_FORUM_PARAMS]: forumID})
          }>
          {forumName}
        </TextSm>
      </ReactionWrap>
      <Divider />
      <ReactionButtons
        isToggled={isReactionToggled}
        toggledType={reactionToggledType}
        onToggleReaction={handleToggle}
      />
    </Holder>
  );
};

export default ReactionContainer;

const Holder = styled.View``;

const ReactionWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;
