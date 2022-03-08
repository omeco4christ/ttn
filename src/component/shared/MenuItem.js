import React from 'react';
import styled from '@emotion/native';
import {COLOR_WHITE} from '../../constants/styles';
import {TextSm} from './text/Text';
import PropType from 'prop-types';

const MenuItem = props => {
  const {bottomBorder} = props;
  return (
    <MenuItemHolder {...props} bottomBorder={bottomBorder}>
      <TextSm>{props.children}</TextSm>
    </MenuItemHolder>
  );
};

MenuItem.defaultProps = {
  bottomBorder: true,
};
MenuItem.propTypes = {
  bottomBorder: PropType.bool,
};

const MenuItemHolder = styled.TouchableOpacity`
  border-bottom-width: ${props => (props.bottomBorder ? '1px' : 0)};
  padding: 20px;
  border-color: ${COLOR_WHITE};
`;

export default MenuItem;
