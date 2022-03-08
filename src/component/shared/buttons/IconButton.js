import React from 'react';
import styled from '@emotion/native';

function IconButton({children, noSpacing, ...props}) {
  return (
    <ButtonWrap noSpacing={noSpacing} {...props}>
      {children}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.TouchableOpacity`
  height: ${props => (props.noSpacing ? 'auto' : '46px')};
  width: ${props => (props.noSpacing ? 'auto' : '46px')};
  border-radius: 23px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export default IconButton;
