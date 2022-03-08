import React from 'react';
import {TextLg} from '../shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../../constants/styles';
import BackIconButton from '../../component/shared/buttons/BackIconButton';

import styled from '@emotion/native';
import SearchInput from '../../component/shared/search/SearchInput';
import ForumListItem from './ForumListItem';
import ForumListRenderer from './ForumListRenderer';

const ForumList = props => {
  const {data = []} = props;
  return (
    <Holder>
      <Header>
        <BackIconButton />
        <SearchInput placeholder={'Search...'} />
      </Header>
      <TextLg weight={FONT_WEIGHT_BOLD}>Forum List</TextLg>
      <ForumListRenderer data={data}>
        {forum => (
          <ForumListItem
            id={forum.id}
            name={forum.name}
            count={forum.topic_count}
            image={forum.icon_url}
          />
        )}
      </ForumListRenderer>
    </Holder>
  );
};

export default ForumList;

const Holder = styled.View`
  padding: 15px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const ListSection = styled.View`
  margin-top: 20px;
`;

const ListItemHolder = styled.View`
  margin-bottom: 10px;
`;
