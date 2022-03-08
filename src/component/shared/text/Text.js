import styled from '@emotion/native';
import PropType from 'prop-types';
import {COLOR_TEXT_PRIMARY} from '../../../constants/styles';

const fontWeight = {
  400: 'AvenirLTStd-Roman',
  700: 'AvenirLTStd-Black',
};

export const TextExLg = styled.Text`
  font-size: 34px;
  font-family: ${props =>
    props.weight ? fontWeight[props.weight] : fontWeight['400']};
  color: ${props => props.color || COLOR_TEXT_PRIMARY};
`;

export const TextLg = styled.Text`
  font-size: 28px;
  font-family: ${props =>
    props.weight ? fontWeight[props.weight] : fontWeight['400']};
  color: ${props => props.color || COLOR_TEXT_PRIMARY};
`;

export const TextMd = styled.Text`
  font-size: 22px;
  font-family: ${props =>
    props.weight ? fontWeight[props.weight] : fontWeight['400']};
  color: ${props => props.color || COLOR_TEXT_PRIMARY};
`;

export const TextNorm = styled.Text`
  font-size: 17px;
  font-family: ${props =>
    props.weight ? fontWeight[props.weight] : fontWeight['400']};
  color: ${props => props.color || COLOR_TEXT_PRIMARY};
`;

export const TextSm = styled.Text`
  font-size: 15px;
  font-family: ${props =>
    props.weight ? fontWeight[props.weight] : fontWeight['400']};
  color: ${props => props.color || COLOR_TEXT_PRIMARY};
  line-height: 24px;
  text-align: ${props => props.textAlign || 'left'};
`;

export const TextXs = styled.Text`
  font-size: 13px;
  font-family: ${props =>
    props.weight ? fontWeight[props.weight] : fontWeight['400']};
  color: ${props => props.color || COLOR_TEXT_PRIMARY};
  line-height: 24px;
`;

TextExLg.propTypes = {
  color: PropType.string,
  weight: PropType.string,
};
TextLg.propTypes = {
  color: PropType.string,
  weight: PropType.string,
};

TextMd.propTypes = {
  color: PropType.string,
  weight: PropType.string,
};

TextSm.propTypes = {
  color: PropType.string,
  weight: PropType.string,
};
TextXs.propTypes = {
  color: PropType.string,
  weight: PropType.string,
};
