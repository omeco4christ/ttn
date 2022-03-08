import React from 'react';
import {TextSm} from '../text/Text';
import {COLOR_SECONDARY, COLOR_TEXT_SECONDARY} from '../../../constants/styles';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReactionButtons = ({onToggleReaction, isToggled, toggledType}) => {
  return (
    <Holder>
      <Button
        label={'Like'}
        icon={MaterialIcons}
        color={isToggled && COLOR_SECONDARY}
        name={isToggled ? 'thumb-up' : 'thumb-up-off-alt'}
        onPress={onToggleReaction}
      />
      <Button label={'Comment'} icon={Icon2} name={'message1'} />
      <Button label={'Share'} icon={Icon} name={'return-up-forward'} />
      <Button label={'Send'} icon={Icon4} name={'send'} />
    </Holder>
  );
};

export default ReactionButtons;

const Holder = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = ({icon: Component, label, color, name, onPress}) => {
  return (
    <ButtonHolder onPress={onPress}>
      <Component name={name} size={28} color={color || COLOR_TEXT_SECONDARY} />
      <TextSm>{label}</TextSm>
    </ButtonHolder>
  );
};

const ButtonHolder = styled.TouchableOpacity`
  align-items: center;
`;
