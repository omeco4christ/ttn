import React from 'react';
import {
  COLOR_INPUT,
  COLOR_TEXT_PRIMARY,
  COLOR_WHITE,
} from '../../../constants/styles';
import {RichEditor} from './rich-text-editor-raw';

const Editor = React.forwardRef((props, ref) => {
  // let fileReader = new FileReader();

  // console.log(fileReader);
  return (
    <RichEditor
      {...props}
      ref={ref}
      placeholder={'Enter your content here...'}
      initialHeight={300}
      maxHeight={300}
      editorStyle={{
        backgroundColor: COLOR_INPUT,
        color: COLOR_TEXT_PRIMARY,
        placeholderColor: COLOR_WHITE,
      }}
    />
  );
});

export default Editor;
