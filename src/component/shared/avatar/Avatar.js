import React from 'react';
import styled from '@emotion/native';

const Avatar = ({uri}) => {
  let image = uri ? {uri} : require('../../../assets/images/user.jpg');
  return <Holder source={image}/>;
};

export default Avatar;

const Holder = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
