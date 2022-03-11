import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { Link } from 'react-router-dom';
import Question from '../components/Questions/Question';

const useEditor = (questionList) => {
  const questionArr = questionList.map((draftText) => {
    const contentState = convertFromRaw(JSON.parse(draftText.question));
    const editorState = EditorState.createWithContent(contentState);

    const styleMap = {
      CODE: {
        backgroundColor: 'rgba(100, 100, 100, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 12,
        padding: 5,
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
    console.log(draftText);
    return (
      <Link
        to={!draftText.isAnswer ? `/questions/${draftText.id}` : '#'}
        key={draftText.id}
      >
        <Question
          id={draftText.id}
          isAnswer={draftText.isAnswer}
          votes={draftText.votes}
          likes={draftText.likes}
        >
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            readOnly={true}
            placeholder="You can write below here.."
            spellCheck={true}
          />
        </Question>
      </Link>
    );
  });
  return questionArr;
};

export default useEditor;
