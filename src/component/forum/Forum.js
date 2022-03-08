import React from 'react';
import styled from '@emotion/native';
import BackIconButton from '../shared/buttons/BackIconButton';
import ActionAvatar from '../shared/actionAvatar/ActionAvatar';
import {TextMd, TextSm, TextXs} from '../shared/text/Text';
import {
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
  FONT_WEIGHT_BOLD,
} from '../../constants/styles';
import ChipButton from '../shared/buttons/ChipButton';
import useGetForumTopics from '../../hooks/forumTopic/useGetForumTopics';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  URL_CREATE_FORUM_POST,
  URL_FORUM_ID,
  URL_FORUM_NAME,
} from '../../constants/navigations';
import ForumTopicList from '../shared/list/ForumTopicList';

const Forum = props => {
  const {data = {}} = props;
  const {id, cover_image, description, icon_url, name, topic_count} = data;

  const navigation = useNavigation();

  const {data: topics} = useGetForumTopics(id);

  return (
    <VerticalScroll>
      <CoverImage source={{uri: cover_image}} />
      <Header>
        <HeaderAction>
          <BackIconButton />
          <ChipButton
            title={'POST'}
            icon={<Icon name={'add'} size={24} color={COLOR_WHITE} />}
            onPress={() =>
              navigation.navigate(URL_CREATE_FORUM_POST, {
                [URL_FORUM_ID]: id,
                [URL_FORUM_NAME]: name,
              })
            }
          />
        </HeaderAction>
        <HeaderName>
          <ActionAvatar image={icon_url} />
          <TextMd style={{marginLeft: 20}} weight={FONT_WEIGHT_BOLD}>
            {name}
          </TextMd>
        </HeaderName>
      </Header>
      <BodySection>
        <Counter count={topic_count} label={'Posts'} />

        <DescriptionSection>
          <TextSm>{description}</TextSm>
        </DescriptionSection>
        <ForumTopicList data={topics} />
      </BodySection>
    </VerticalScroll>
  );
};

export default Forum;

const Header = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  height: 250px;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

const HeaderAction = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderName = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 250px;
  position: absolute;
`;

const BodySection = styled.View`
  padding: 15px;
`;

const Counter = ({count, label}) => {
  return (
    <CounterHolder>
      <TextSm weight={FONT_WEIGHT_BOLD}>{count}</TextSm>
      <TextXs color={COLOR_TEXT_SECONDARY}>{label}</TextXs>
    </CounterHolder>
  );
};

const CounterHolder = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 30px;
`;

const DescriptionSection = styled.View`
  padding-vertical: 20px;
`;
