import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
  // convertFromRaw,
} from 'draft-js';
import './TextEditor.css';
import axios from 'axios';
import Button from '../UI/Button';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      redirect: false,
      questionId: 0,
      selectOptions: [],
    };

    // this.readOnlyEditorState = EditorState.createWithContent(
    //   convertFromRaw(JSON.parse(localStorage.getItem('editorData')))
    // );

    // this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
      // const raw = convertToRaw(editorState.getCurrentContent());
      // Save raw js object to local storage
      // this.saveEditorContent(raw);
      this.setState({ editorState });
    };

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    // this.readOnlyEditorChange = this._readOnlyEditorChange.bind(this);
    this.submitQuestionToDatabase = this.submitQuestionToDatabase.bind(this);
    // this.selectChange = this.selectChange.bind(this);
  }

  submitQuestionToDatabase() {
    console.log(this.state.selectOptions);

    const sendData = async () => {
      try {
        const content = JSON.stringify(
          convertToRaw(this.state.editorState.getCurrentContent())
        );
        // const baseUrl = 'http://localhost:8080/api';
        // const baseUrl = 'https://full-stack-interview-questions.herokuapp.com/api';
        const url = this.props.question
          ? `/questions/create-question`
          : `/answers/create-answer?questionId=${this.props.questionId}`;

        const api = axios.create({
          baseURL: process.env.REACT_APP_API_URL,
          withCredentials: true,
        });

        const response = await api.post(url, {
          content,
          category: this.state.selectOptions,
        });
        console.log(response);
        if (response.data.status === 'success' && this.props.question) {
          this.setState({
            editorState: EditorState.createEmpty(),
            redirect: true,
            questionId: response.data.data.content._id,
          });
        } else if (response.data.status === 'success') {
          this.setState({
            editorState: EditorState.createEmpty(),
          });
          this.props.reloadPage();
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    sendData();
  }

  selectChange = (e) => {
    let target = e.target;
    let name = target.name;
    //here
    let value = Array.from(target.selectedOptions, (option) => option.value);
    this.setState({
      [name]: value,
    });
  };

  // _readOnlyEditorChange() {
  //   this.readOnlyEditorState = EditorState.createWithContent(
  //     convertFromRaw(JSON.parse(localStorage.getItem('editorData')))
  //   );
  // }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  componentDidMount() {
    // console.log(this.props);
    // Load editor data (raw js object) from local storage
    // const rawEditorData = this.getSavedEditorData();
    // if (rawEditorData !== null) {
    //   const contentState = convertFromRaw(rawEditorData);
    //   this.setState({
    //     editorState: EditorState.createWithContent(contentState),
    //   });
    // }
  }

  // saveEditorContent(data) {
  //   localStorage.setItem('editorData', JSON.stringify(data));
  // }

  // getSavedEditorData() {
  //   const savedData = localStorage.getItem('editorData');

  //   return savedData ? JSON.parse(savedData) : null;
  // }

  renderContentAsRawJs() {
    const contentState = this.state.editorState.getCurrentContent();
    const raw = convertToRaw(contentState);

    return JSON.stringify(raw, null, 2);
  }

  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    if (this.state.redirect) {
      return <Redirect to={`/questions/${this.state.questionId}`} />;
    } else {
      return (
        <>
          <div className="RichEditor-root">
            <BlockStyleControls
              editorState={editorState}
              onToggle={this.toggleBlockType}
            />
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
            <div className={className} onClick={this.focus}>
              <Editor
                blockStyleFn={getBlockStyle}
                customStyleMap={styleMap}
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                keyBindingFn={this.mapKeyToEditorCommand}
                onChange={this.onChange}
                placeholder={
                  this.props.question
                    ? 'Write the question here...'
                    : 'Write your answer here...'
                }
                ref="editor"
                spellCheck={true}
              />
            </div>
          </div>
          {this.props.question && (
            <div>
              <label htmlFor="categories">Choose a category:</label>
              <select
                name="selectOptions"
                id="categories"
                // multiple={true}
                onChange={this.selectChange}
                value={this.state.selectOptions}
              >
                <option value="Basics">Basics</option>
                <option value="Number">Number</option>
                <option value="Functions">Functions</option>
                <option value="Variables">Variables</option>
                <option value="Strings">Strings</option>
                <option value="Date">Date</option>
                <option value="OOP">OOP</option>
                <option value="Closures">Closures</option>
                <option value="Arrays">Arrays</option>
                <option value="DOM">DOM</option>
                <option value="Promises">Promises</option>
              </select>
            </div>
          )}
          <Button onClick={this.submitQuestionToDatabase}>Submit</Button>
        </>
      );
    }
  }
}

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

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div>
      <div className="RichEditor-controls">
        {INLINE_STYLES.map((type) => (
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        ))}
      </div>
    </div>
  );
};

export default TextEditor;
