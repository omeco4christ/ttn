import React from 'react';
import {COLOR_SECONDARY, FONT_WEIGHT_BOLD} from '../../../constants/styles';
import styled from '@emotion/native';
import {CSS_MINI_CONTAINER} from '../../../styles/styles';
import {useNavigation} from '@react-navigation/native';
import GhostButton from '../../shared/buttons/GhostButton';
import {URL_FORUM_LISTS} from '../../../constants/navigations';
import {TextExLg} from '../../shared/text/Text';

const FeedHeader = () => {
  const navigation = useNavigation();
  return (
    <Holder>
      <TextExLg weight={FONT_WEIGHT_BOLD}>Forums</TextExLg>
      <GhostButton
        onPress={() => navigation.navigate(URL_FORUM_LISTS)}
        color={COLOR_SECONDARY}
        title={'View all'}
      />
    </Holder>
  );
};

export default FeedHeader;

const Holder = styled.View`
  ${CSS_MINI_CONTAINER};
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
