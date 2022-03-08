import React from 'react';
import SpaceCard from '../card/SpaceCard';
import styled from '@emotion/native';

const SpaceList = ({data = []}) => {
  return data.map(space => (
    <Holder key={space.id}>
      <SpaceCard {...space} />
    </Holder>
  ));
};

export default SpaceList;

const Holder = styled.TouchableOpacity`
  margin-bottom: 10px;
`;
