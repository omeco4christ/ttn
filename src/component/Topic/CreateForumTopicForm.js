import React, {createRef, useRef} from 'react';
import styled from '@emotion/native';
import BackIconButton from '../shared/buttons/BackIconButton';
import {TextLg, TextNorm} from '../shared/text/Text';
import Input from '../shared/input/Input';
import Editor from '../shared/richEditor/Editor';
import EditorToolbar from '../shared/richEditor/EditorToolbar';
import {
  COLOR_DARK,
  COLOR_INPUT,
  COLOR_SECONDARY,
  FONT_WEIGHT_BOLD,
} from '../../constants/styles';
import Button from '../shared/buttons/Button';
import withForumTopicForm from '../../hoc/forumTopic/withForumTopicForm';
import useGetForumNameIDFromRoute from '../../hooks/forum/useGetForumNameIDFromRoute';

const CreateForumTopicForm = props => {
  const {
    titleProps,
    descriptionProps,
    onChange,
    onSubmit,
    onBlur,
    errors,
    touched,
    serverError,
    loading,
  } = props;
  const editorRef = createRef() || useRef();

  const {forumName} = useGetForumNameIDFromRoute();

  return (
    <Holder>
      <BodySection>
        <BackIconButton />
        <HeaderSection>
          <TextLg weight={FONT_WEIGHT_BOLD}>Create A Post</TextLg>
          <Button title={'Post'} onPress={onSubmit} loading={loading} />
        </HeaderSection>
        <ForumNameSection>
          <TextNorm color={COLOR_SECONDARY}>
            Post To: {forumName} Forum
          </TextNorm>
        </ForumNameSection>
        <Input
          name={'title'}
          onChangeText={onChange('title')}
          onBlur={onBlur('title')}
          value={titleProps.value}
          error={touched.title && errors.title}
          placeholder={'Enter your title here...'}
        />
        <EditorHolder error={touched.description && errors.description}>
          <Editor
            ref={editorRef}
            onChange={onChange('description')}
            onBlur={onBlur('description')}
            name={'description'}
          />
        </EditorHolder>
      </BodySection>
      <ToolbarHolder>
        <EditorToolbar editorRef={editorRef} />
      </ToolbarHolder>
    </Holder>
  );
};

export default withForumTopicForm(CreateForumTopicForm);

const Holder = styled.View`
  flex: 1;
`;

const BodySection = styled.View`
  padding: 20px;
`;

const HeaderSection = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  justify-content: space-between;
`;

const ForumNameSection = styled.View`
  background-color: ${COLOR_DARK};
  margin-bottom: 15px;
  padding-horizontal: 20px;
  padding-vertical: 5px;
`;

const EditorHolder = styled.View`
  border-color: ${props => (props.error ? COLOR_SECONDARY : COLOR_INPUT)};
  border-width: 1px;
  background-color: ${COLOR_INPUT};
  padding: 10px;
  margin-top: 10px;
  display: flex;
  border-radius: 20px;
`;

const ToolbarHolder = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${COLOR_DARK};
  width: 100%;
  flex: 1;
`;
