import React from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import './TextEditor.css';

const ReadOnlyEditor = (props) => {
  const readOnlyEditorState = EditorState.createWithContent(
    convertFromRaw(JSON.parse(localStorage.getItem('editorData')))
  );

  return (
    <div className="RichEditor-root">
      <div className="RichEditor-editor">
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={readOnlyEditorState}
          readOnly={true}
          placeholder="Tell a story..."
          spellCheck={true}
        />
      </div>
    </div>
  );
};

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

export default ReadOnlyEditor;
