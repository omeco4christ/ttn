import React, {useState} from 'react';
import styled from '@emotion/native';
import ChipButton from '../component/shared/buttons/ChipButton';
import IconButton from '../component/shared/buttons/IconButton';
import Icon from 'react-native-vector-icons/Feather';
import {COLOR_PRIMARY, COLOR_WHITE} from '../constants/styles';
import {TextSm} from '../component/shared/text/Text';
import {useNavigation} from '@react-navigation/native';
import SpaceShareLinkForm from '../component/space/SpaceShareLinkForm';

import SpaceQuestionForm from '../component/space/SpaceQuestionForm';
import Popover from '../component/shared/Popover';
import MenuItem from '../component/shared/MenuItem';

const type = {question: 'Ask Question', share_link: 'Share a link'};
const question = Object.keys(type)[0];
const link = Object.keys(type)[1];

const SpaceShareScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(question);
  const [modal, setModal] = useState(false);
  const handleTypeChange = type => () => {
    setState(type);
    toggleModal();
  };

  const toggleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <Holder>
      <Header>
        <PostTypeSection>
          <IconButton onPress={() => navigation.goBack()}>
            <Icon name={'x'} size={24} color={COLOR_WHITE} />
          </IconButton>

          <TextSm>{type[state]}</TextSm>
          <IconButton onPress={toggleModal}>
            <Icon name={'chevron-down'} size={24} color={COLOR_WHITE} />
          </IconButton>
        </PostTypeSection>
        <ChipButton title={'Add'} />
      </Header>
      <BodySection>
        {state === question && <SpaceQuestionForm />}
        {state === link && <SpaceShareLinkForm />}
      </BodySection>
      <Popover open={modal} onClose={toggleModal} modalType={'bottom'}>
        <MenuItem onPress={handleTypeChange(question)}>
          {type[question]}
        </MenuItem>
        <MenuItem onPress={handleTypeChange(link)}>{type[link]}</MenuItem>
      </Popover>
      {/*<ChangeTypeModal*/}
      {/*  open={modal}*/}
      {/*  onClose={toggleModal}*/}
      {/*  onSelect={handleTypeChange}*/}
      {/*/>*/}
    </Holder>
  );
};

export default SpaceShareScreen;

const Holder = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PostTypeSection = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const BodySection = styled.View`
  margin-top: 20px;
`;

const ChangeTypeModal = ({open, onClose, onSelect}) => {
  const handleSelect = item => () => {
    onSelect(item);
    onClose();
  };
  return (
    <ModalRoot>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={open}
        onRequestClose={onClose}>
        <ModalHolder onPress={onClose}>
          <ModalBody>
            {Object.keys(type).map(item => (
              <ModalItem onPress={handleSelect(item)}>
                <TextSm>{type[item]}</TextSm>
              </ModalItem>
            ))}
          </ModalBody>
        </ModalHolder>
      </Modal>
    </ModalRoot>
  );
};

const ModalRoot = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  flex: 1;
`;

const ModalHolder = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;
`;

const ModalBody = styled.View`
  width: 100%;
  background-color: ${COLOR_PRIMARY};
  position: absolute;
  bottom: 0;
`;

const ModalItem = styled.TouchableOpacity`
  border-bottom-width: 1px;
  padding: 20px;
  border-color: ${COLOR_WHITE};
`;
