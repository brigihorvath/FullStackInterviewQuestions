import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { Link } from 'react-router-dom';
import Question from '../components/Questions/Question';

const useEditor = (questionList) => {
  const questionArr = questionList.map((draftText) => {
    const contentState = convertFromRaw(JSON.parse(draftText.question));
    const editorState = EditorState.createWithContent(contentState);

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

    return (
      <Link to={`/questions/${draftText.id}`} key={draftText.id}>
        <Question>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            readOnly={true}
            placeholder="Tell a story..."
            spellCheck={true}
          />
        </Question>
      </Link>
    );
  });
  return questionArr;
};

export default useEditor;
