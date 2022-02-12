import { useEffect } from 'react';
import classes from './Question.module.css';
import Button from '../UI/Button';
import { LoadingSpinner } from '../UI/LoadingSpinner';
import { addToFavourites } from '../../api';
// import { getFavourites } from '../../api';
import useHttp from '../../hooks/use-http';
import { useAuth } from '../../context/AuthContext/AuthContext';

const Question = (props) => {
  const {
    sendRequest,
    status,
    // data: loadedQuestion,
    error,
  } = useHttp(addToFavourites, false);
  // const [isQuestionFav, setIsQuestionFav] = useState(false);

  const { getLoggedInUserData, userDetails } = useAuth();

  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData]);
  // console.log(userDetails.user.favourites);

  let isQuestionFav = false;
  if (
    userDetails?.user?.favourites?.filter((el) => el._id === props.id).length
  ) {
    console.log('true');
    // setIsQuestionFav(true);
    isQuestionFav = true;
  }

  // useEffect(() => {
  //   async function getFavArr() {
  //     const favArr = await getFavourites();
  //     if (favArr.data.data.content.favourites.includes(props.id)) {
  //       setIsQuestionFav(true);
  //     }
  //     // console.log(favArr.data.data.content.favourites);
  //   }
  //   getFavArr();
  // }, [props.id]);

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

  return (
    <div className={classes.questionContainer}>
      <div className={classes.statistics}></div>
      <div className={classes.question}>{props.children}</div>
      {!props.isAnswer && !isQuestionFav && (
        <Button onClick={addToFavouritesHandler}>Add to Favourites</Button>
      )}
    </div>
  );
};

export default Question;
