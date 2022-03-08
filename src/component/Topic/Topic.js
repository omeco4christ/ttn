import React from 'react';
import styled from '@emotion/native';
import AvatarUsernameTime from '../shared/user/AvatarUsernameTime';
import {
  COLOR_DARK,
  COLOR_SECONDARY,
  FONT_WEIGHT_BOLD,
} from '../../constants/styles';
import {TextMd} from '../shared/text/Text';
import ReactionContainer from '../shared/reaction/ReactionContainer';
import CommentForm from './component/CommentForm';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import BackIconButton from '../shared/buttons/BackIconButton';
import EditorRenderHTML from '../shared/richEditor/EditorRenderHTML';
import {timeFromNow} from '../../utils/helper';
import TopicComments from './TopicComments';

const Topic = props => {
  const {data = {}} = props;
  const {
    topic_id,
    title,
    description,
    views,
    like_count,
    is_liked,
    liked_type,
    created_at,
    forum_id,
  } = data;
  return (
    <Holder>
      <Header>
        <BackIconButton />
      </Header>
      <BodySection>
        <VerticalScroll>
          <AvatarUsernameTime
            name={'Christina Kennedy'}
            time={timeFromNow(created_at)}
          />
          <TextMd color={COLOR_SECONDARY} weight={FONT_WEIGHT_BOLD}>
            {title}
          </TextMd>
          <HeroImage source={require('../../assets/images/topic.jpg')} />
          <EditorRenderHTML html={description} />
          <ReactionContainer
            topicID={topic_id}
            forumID={forum_id}
            isReactionToggled={is_liked}
            reactionToggledType={liked_type}
            reactionCount={like_count}
          />
          <CommentSection>
            <TextMd weight={FONT_WEIGHT_BOLD}>Comments</TextMd>
            <TopicComments topicID={topic_id} />
          </CommentSection>
        </VerticalScroll>
      </BodySection>
      <BottomSection>
        <CommentForm />
      </BottomSection>
    </Holder>
  );
};

export default Topic;

const Holder = styled.View`
  //padding: 15px;
  flex: 1;
  justify-content: space-between;
`;
const Header = styled.View`
  //padding: 20px;
  padding-horizontal: 15px;
  padding-top: 15px;
  margin-bottom: 15px;
`;

const BodySection = styled.View`
  padding-horizontal: 15px;
  flex: 1;
`;

const HeroImage = styled.Image`
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 150px;
`;

const BottomSection = styled.View`
  background-color: ${COLOR_DARK};
  margin-top: 20px;
  padding: 10px 20px;
  //position: absolute;
  //bottom: 0;
  width: 100%;
`;

const CommentSection = styled.View`
  margin-top: 30px;
`;
