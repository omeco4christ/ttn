import React from 'react';
import styled from '@emotion/native';
import {TextMd, TextXs} from '../shared/text/Text';
import {
  COLOR_SECONDARY,
  COLOR_TEXT_PRIMARY,
  FONT_WEIGHT_BOLD,
} from '../../constants/styles';

const PostListButton = ({label, onPress, comingSoon}) => {
  return (
    <Holder onPress={onPress}>
      <TextMd weight={FONT_WEIGHT_BOLD}>{label}</TextMd>
      {comingSoon && <TextXs>coming soon!</TextXs>}
    </Holder>
  );
};

export default PostListButton;

const Holder = styled.TouchableOpacity`
  height: 100px;
  margin-bottom: 20px;
  //border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  // border-bottom-color: ${COLOR_TEXT_PRIMARY};
  background-color: ${COLOR_SECONDARY};
`;
