import React from 'react';
import styled from '@emotion/native';
import {TextSm} from '../text/Text';

const Tab = ({index, label, onChange, value}) => {
  const active = index === value;
  const handleChange = () => {
    onChange(value);
  };
  return (
    <Holder onPress={handleChange}>
      <TextSm>{label}</TextSm>
      {active ? <Border /> : null}
    </Holder>
  );
};

export default Tab;

const Holder = styled.TouchableOpacity`
  height: 36px;
  position: relative;
  align-items: center;
  justify-content: center;
  //padding-horizontal: 20px;
  margin-horizontal: 10px;
`;

const Border = styled.View`
  position: absolute;
  background-color: #979797;
  width: 100%;
  flex: 1;
  bottom: 0;
  left: 0;
  height: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
