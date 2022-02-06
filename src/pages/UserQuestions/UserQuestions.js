import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';

import classes from './UserQuestions.module.css';

import { HeaderImage } from '../../components/UI/HeaderImage';
import QuestionList from '../../components/Questions/QuestionList';

const UserQuestions = () => {
  const { getLoggedInUserData, userDetails } = useAuth();
  useEffect(() => {
    getLoggedInUserData();
  }, [getLoggedInUserData]);
  console.log(userDetails);
  return (
    <div>
      <HeaderImage title={'The Questions you have created'} />
      <QuestionList questions={userDetails.user.questions} />
    </div>
  );
};

export default UserQuestions;
