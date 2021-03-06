import { useEffect, useState } from 'react';
import classes from './Question.module.css';
import Button from '../UI/Button';
import { LoadingSpinner } from '../UI/LoadingSpinner';
import VoteContainer from './VoteContainer';
import { Redirect } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';

import {
  addToFavourites,
  removeFromFavourites,
  deleteQuestion,
} from '../../api';
// import { getFavourites } from '../../api';
import useHttp from '../../hooks/use-http';
import { useAuth } from '../../context/AuthContext/AuthContext';

const Question = (props) => {
  const [reload, setReload] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { getLoggedInUserData, userDetails } = useAuth();

  let isQuestionFav = false;
  if (
    userDetails?.user?.favourites?.filter((el) => el._id === props.id).length
  ) {
    console.log('true');
    isQuestionFav = true;
  }

  const { sendRequest, status, error } = useHttp(
    !isQuestionFav ? addToFavourites : removeFromFavourites,
    false
  );
  const {
    sendRequest: sendRemoveRequest,
    status: removeStatus,
    error: removeError,
  } = useHttp(deleteQuestion, false);

  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData, reload]);
  // console.log(userDetails.user.favourites);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }
  const questionId = props.id;

  const addToFavouritesHandler = (event) => {
    console.log('Add to Favourites');
    sendRequest({ questionId: questionId });
    getLoggedInUserData();
    setReload((reload) => !reload);
  };

  const removeFavouritesHandler = (event) => {
    console.log('Remove From Favourites');
    sendRequest({ questionId: questionId });
    getLoggedInUserData();
    setReload((reload) => !reload);
  };

  const removeQuestionHandler = async () => {
    console.log('props', props);
    console.log('user details', userDetails);
    await sendRemoveRequest(questionId);
    setRedirect(true);
  };
  // console.log(props.likes);
  return redirect ? (
    <Redirect to={'/questions'} />
  ) : (
    <div
      className={`${classes.questionContainer} ${
        props.isAnswer ? classes.answer : ''
      }`}
    >
      {props.isAnswer && (
        <VoteContainer answerId={questionId} votes={props.votes} />
      )}
      {!props.isAnswer && (
        <div className={classes.likeContainer}>
          <p>{props.likes}</p>
          <BsFillSuitHeartFill />
        </div>
      )}
      <div className={classes.statistics}></div>
      <div className={classes.question}>{props.children}</div>
      {!props.isAnswer && !isQuestionFav && userDetails.user && (
        <Button onClick={addToFavouritesHandler}>Add to Favourites</Button>
      )}
      {!props.isAnswer && isQuestionFav && (
        <Button onClick={removeFavouritesHandler}>
          Remove From Favourites
        </Button>
      )}
      {userDetails?.user?.role === 'admin' && !props.isAnswer && (
        <Button onClick={removeQuestionHandler}>Remove Question</Button>
      )}
    </div>
  );
};

export default Question;
