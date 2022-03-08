import React from 'react';
import useGetSpaceList from '../hooks/useGetSpaceList';
import styled from '@emotion/native';
import SpaceListHeader from '../component/space/SpaceListHeader';
import SpaceList from '../component/shared/list/SpaceList';
import {TextSm} from '../component/shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../constants/styles';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';

const SpaceListScreen = () => {
  const [data] = useGetSpaceList();
  return (
    <VerticalScroll>
      <Holder>
        <SpaceListHeader />
        <TitleSection>
          <TextSm weight={FONT_WEIGHT_BOLD}>Space you might like</TextSm>
        </TitleSection>
        <ListSection>
          <SpaceList data={data} />
        </ListSection>
      </Holder>
    </VerticalScroll>
  );
};

export default SpaceListScreen;

const Holder = styled.View``;

const TitleSection = styled.View`
  padding: 20px 10px;
`;
const ListSection = styled.View`
  padding: 10px;
`;
