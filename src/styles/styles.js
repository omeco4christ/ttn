import {css} from '@emotion/native';
import {
  COLOR_INPUT,
  COLOR_TEXT_PRIMARY,
  MAIN_HORIZONTAL_SPACING,
} from '../constants/styles';
import {StyleSheet} from 'react-native';

export const CSS_MINI_CONTAINER = css`
  padding: 0 ${MAIN_HORIZONTAL_SPACING};
`;

export const CSS_INPUT = css`
  background-color: ${COLOR_INPUT};
  color: ${COLOR_TEXT_PRIMARY};
  padding-horizontal: 20px;
  border-width: 1px;
`;

const styles = StyleSheet.create({
  shadow_holder: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
  },
});

export const {shadow_holder: CSS_STYLE_SHADOW_HOLDER} = styles;
