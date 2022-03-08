import React from 'react';
import {StyleSheet} from 'react-native';
import styled from '@emotion/native';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  MAIN_HORIZONTAL_SPACING,
} from '../../../constants/styles';
import AvatarUsernameTime from '../user/AvatarUsernameTime';
import {TextMd, TextSm} from '../text/Text';
import ReactionContainer from '../reaction/ReactionContainer';
import {useNavigation} from '@react-navigation/native';
import {URL_TOPIC} from '../../../constants/navigations';
import {htmlToText} from '../../../utils/helper';

const ForumTopicCard = ({
  topicID,
  body,
  username,
  time,
  title,
  reactionCount,
  commentCount,
  viewCount,
  forumName,
  forumID,
  isReactionToggled,
  reactionToggledType,
}) => {
  const navigation = useNavigation();
  return (
    <Holder
      style={styles.holder}
      onPress={() => navigation.navigate(URL_TOPIC, {id: topicID})}>
      <HeaderHolder>
        <AvatarUsernameTime name={username} time={time} />
      </HeaderHolder>
      <TextContent>
        <TextMd color={COLOR_SECONDARY}>{title}</TextMd>
        <HeroImage source={require('./../../../assets/images/topic.jpg')} />
        <TextSm ellipsizeMode="tail" numberOfLines={3}>
          {htmlToText(body)}
        </TextSm>
      </TextContent>

      <ReactionContainer
        reactionCount={reactionCount}
        commentCount={commentCount}
        viewCount={viewCount}
        forumName={forumName}
        forumID={forumID}
        topicID={topicID}
        isReactionToggled={isReactionToggled}
        reactionToggledType={reactionToggledType}
      />
    </Holder>
  );
};

export default ForumTopicCard;

const styles = StyleSheet.create({
  holder: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
  },
});
const Holder = styled.TouchableOpacity`
  background-color: ${COLOR_PRIMARY};
  padding: ${MAIN_HORIZONTAL_SPACING};
`;

const HeaderHolder = styled.View`
  flex-direction: row;
`;

const TextContent = styled.View`
  margin-vertical: ${MAIN_HORIZONTAL_SPACING};
  position: relative;
`;

const HeroImage = styled.Image`
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 150px;
`;
