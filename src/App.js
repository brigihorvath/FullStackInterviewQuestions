// import { Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom';

import './App.css';
// import zenbook from '../src/assets/images/zenbook.jpg';
// import Header from './components/Header';
// import QuestionList from './components/Questions/QuestionList';
// import CreateQuestion from './components/Questions/CreateQuestion';
// import ReadOnlyEditor from './components/Questions/ReadOnlyEditor';
import { AppRouter } from './router';

function App() {
  return (
    // <Fragment>
    //   <Header />
    //   <Switch>
    //     <Route path="/" exact>
    //       <div className="main-bgr-img">
    //         <h1 className="main-header">JavaScript Interview Questions</h1>
    //         <p>Learn, write answers, evaluate others answers...</p>
    //       </div>
    //       <QuestionList />
    //       {/* <ReadOnlyEditor /> */}
    //     </Route>
    //     <Route path="/create-question" exact>
    //       <CreateQuestion />
    //     </Route>
    //   </Switch>
    // </Fragment>

    <AppRouter />
  );
}

export default App;
