import React from 'react';
import styled from '@emotion/native';
import {FlatList} from 'react-native';
import useGetQuestionTips from '../../hooks/useGetQuestionTips';
import {TextSm} from '../shared/text/Text';
import {COLOR_WHITE} from '../../constants/styles';

const QuestionTips = () => {
  const [data] = useGetQuestionTips();
  return (
    <Holder>
      <FlatList data={data} renderItem={({item}) => <Item tip={item.tip} />} />
    </Holder>
  );
};

export default QuestionTips;

const Holder = styled.View``;

const Item = ({tip}) => {
  return (
    <ItemHolder>
      <Dot />
      <TextSm>{tip}</TextSm>
    </ItemHolder>
  );
};

const ItemHolder = styled.View`
  flex-direction: row;
`;

const Dot = styled.View`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: ${COLOR_WHITE};
  margin-right: 15px;
  margin-top: 8px;
`;
