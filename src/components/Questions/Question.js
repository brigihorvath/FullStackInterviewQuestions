import { useEffect } from 'react';
import classes from './Question.module.css';
import Button from '../UI/Button';
import { LoadingSpinner } from '../UI/LoadingSpinner';
import { addToFavourites, removeFromFavourites } from '../../api';
// import { getFavourites } from '../../api';
import useHttp from '../../hooks/use-http';
import { useAuth } from '../../context/AuthContext/AuthContext';

const Question = (props) => {
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

  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData]);
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

  const addToFavouritesHandler = () => {
    console.log('Add to Favourites');
    sendRequest({ questionId: questionId });
  };

  const removeFavouritesHandler = () => {
    console.log('Remove From Favourites');
    sendRequest({ questionId: questionId });
  };

  const removeQuestionHandler = () => {
    console.log('props', props);
    console.log('user details', userDetails);
  };

  return (
    <div className={classes.questionContainer}>
      <div className={classes.statistics}></div>
      <div className={classes.question}>{props.children}</div>
      {!props.isAnswer && !isQuestionFav && (
        <Button onClick={addToFavouritesHandler}>Add to Favourites</Button>
      )}
      {!props.isAnswer && isQuestionFav && (
        <Button onClick={removeFavouritesHandler}>
          Remove From Favourites
        </Button>
      )}
      {userDetails?.user?.role === 'admin' && (
        <Button onClick={removeQuestionHandler}>Remove Question</Button>
      )}
    </div>
  );
};

export default Question;
