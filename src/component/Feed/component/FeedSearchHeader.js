import React from 'react';
import styled from '@emotion/native';
import {CSS_MINI_CONTAINER} from '../../../styles/styles';
import SearchInput from '../../shared/search/SearchInput';
import IconButton from '../../shared/buttons/IconButton';
import Icon from 'react-native-vector-icons/Feather';
import {COLOR_TEXT_SECONDARY} from '../../../constants/styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const FeedSearchHeader = ({postButton}) => {
  const navigation = useNavigation();
  return (
    <Holder>
      <IconButton
        noSpacing
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Icon name={'grid'} color={COLOR_TEXT_SECONDARY} size={24} />
      </IconButton>
      <SearchWrapper>
        <SearchInput placeholder={'Search...'} />
      </SearchWrapper>
      {postButton}
    </Holder>
  );
};

export default FeedSearchHeader;

const Holder = styled.View`
  ${CSS_MINI_CONTAINER};
  flex-direction: row;
  margin-vertical: 20px;
`;

const SearchWrapper = styled.View`
  flex: 1;
  margin-horizontal: 10px;
`;
