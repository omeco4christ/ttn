import React from 'react';
import styled, {css} from '@emotion/native';
import {Modal} from 'react-native';
import {COLOR_PRIMARY} from '../../constants/styles';
import PropType from 'prop-types';

const Popover = ({
  animationType = 'slide',
  open,
  onClose,
  modalType,
  children,
  style,
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <ModalHolder onPress={onClose}>
        <ModalBody modalType={modalType} style={style}>
          {children}
        </ModalBody>
      </ModalHolder>
    </Modal>
  );
};

export default Popover;

Popover.propTypes = {
  modalType: PropType.oneOf(['center', 'bottom']),
};

const ModalHolder = styled.TouchableOpacity`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: center;
  justify-content: center;
  flex: 1;
`;

const ModalBody = styled.View`
  background-color: ${COLOR_PRIMARY};
  ${props => (props.modalType === 'center' ? CSS_CENTER_POP : CSS_BOTTOM_POP)};
`;

const CSS_CENTER_POP = css`
  width: 90%;
  align-self: center;
  padding: 10px;
  border-radius: 10px;
`;

const CSS_BOTTOM_POP = css`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
