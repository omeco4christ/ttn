import React from 'react';
import {actions, RichToolbar} from './rich-text-editor-raw';
import Icon from 'react-native-vector-icons/Feather';
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from '../../../constants/styles';
import useEditorToolbar from './hook/useEditorToolbar';

const EditorToolbar = ({editorRef}) => {
  const {handleAddImage} = useEditorToolbar({editorRef});

  return (
    <RichToolbar
      editor={editorRef}
      actions={[
        actions.setBold,
        actions.setItalic,
        actions.insertBulletsList,
        actions.insertOrderedList,
        actions.insertImage,
        'customAction',
      ]}
      iconMap={{
        customAction: <Icon name={'x'} />,
      }}
      iconSize={24}
      selectedIconTint={COLOR_TEXT_PRIMARY}
      disabledIconTint={COLOR_TEXT_SECONDARY}
      style={{
        backgroundColor: 'transparent',
        padding: 0,
        alignItems: 'flex-start',
        height: 50,
      }}
      onPressAddImage={handleAddImage}
    />
  );
};

export default EditorToolbar;
