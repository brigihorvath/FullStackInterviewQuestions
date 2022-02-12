import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';

// import classes from './FavouriteQuestions.module.css';
import { HeaderImage } from '../../components/UI/HeaderImage';
import QuestionList from '../../components/Questions/QuestionList';

const FavouriteQuestions = (props) => {
  const { getLoggedInUserData, userDetails } = useAuth();

  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData]);
  console.log(userDetails);
  return (
    <div>
      <HeaderImage title={'Your Favourite Questions'} />
      <QuestionList questions={userDetails.user.favourites} />
    </div>
  );
};

export default FavouriteQuestions;
