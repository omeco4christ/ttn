import {useIsMutating} from 'react-query';
import {ActivityIndicator} from 'react-native';
import styled from '@emotion/native';
import {COLOR_SECONDARY} from '../../../constants/styles';
import React from 'react';

export const LoadingIndicatorMutation = () => {
  const isMutating = useIsMutating();
  return isMutating ? (
    <Holder>
      <ActivityIndicator size="large" color={COLOR_SECONDARY} />
    </Holder>
  ) : null;
};

const Holder = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
