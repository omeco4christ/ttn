import React from 'react';
import styled from '@emotion/native';
import {
  MAIN_HORIZONTAL_SPACING,
  MAIN_VERTICAL_SPACING,
} from '../../../constants/styles';
import TrendingList from '../../shared/list/TrendingList';
import HorizontalScroll from '../../shared/scroll/HorizontalScroll';

const SlidePost = ({data = []}) => {
  return (
    <Holder>
      <HorizontalScroll>
        <ListContent>
          {data.map(list => (
            <ListHolder key={list.id}>
              <TrendingList
                primary={list.primary}
                secondary={list.secondary}
                url={list.url}
              />
            </ListHolder>
          ))}
        </ListContent>
      </HorizontalScroll>
    </Holder>
  );
};

export default SlidePost;

const Holder = styled.View``;

const ListContent = styled.View`
  flex-direction: row;
  margin-top: ${MAIN_VERTICAL_SPACING};
`;

const ListHolder = styled.View`
  margin-left: ${MAIN_HORIZONTAL_SPACING};
`;
