import React, {createRef, useRef} from 'react';
import {COLOR_PRIMARY, COLOR_TEXT_PRIMARY} from '../../../constants/styles';
import {RichEditor} from './rich-text-editor-raw';

const EditorRenderHTML = ({html}) => {
  const ref = createRef() || useRef();
  return (
    <RichEditor
      ref={ref}
      initialContentHTML={html}
      editorStyle={{
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_TEXT_PRIMARY,
      }}
      disabled={true}
    />
  );
};

export default EditorRenderHTML;
