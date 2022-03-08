import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {CSS_INPUT} from '../../../styles/styles';
import {
  COLOR_SECONDARY,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
} from '../../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from '../../shared/buttons/IconButton';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Feather';
import withForumTopicCommentForm from '../../../hoc/forumTopic/withForumTopicCommentForm';

const CommentForm = props => {
  const {commentProps, onChange, onBlur, onSubmit, resetForm, serverSuccess} =
    props;

  useEffect(() => {
    if (serverSuccess) {
      resetForm();
    }
  }, [serverSuccess]);

  return (
    <Holder>
      <FormSection>
        <InputSection
          name={commentProps.name}
          onChangeText={onChange('comment')}
          value={commentProps.value}
          onBlur={onBlur('comment')}
          placeholderTextColor={COLOR_WHITE}
          placeholder={'Write a comment'}
        />

        <ButtonSection>
          <IconButton>
            <Icon3 name={'camera'} color={COLOR_TEXT_SECONDARY} size={24} />
          </IconButton>
          <IconButton>
            <Icon2 name={'mention'} color={COLOR_TEXT_SECONDARY} size={24} />
          </IconButton>
        </ButtonSection>
      </FormSection>

      <IconButton onPress={onSubmit}>
        <Icon name={'send'} color={COLOR_SECONDARY} size={20} />
      </IconButton>
    </Holder>
  );
};

export default withForumTopicCommentForm(CommentForm);

const Holder = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const FormSection = styled.View`
  flex: 1;
`;
const InputSection = styled.TextInput`
  ${CSS_INPUT};
  height: 36px;
  border-radius: 18px;
  margin-right: 8px;
`;

const ButtonSection = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;
