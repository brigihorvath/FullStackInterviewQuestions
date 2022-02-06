// import QuestionList from '../../components/Questions/QuestionList';
import CategoryList from '../../components/Categories/CategoryList/CategoryList';
import Button from '../../components/UI/Button';
import { MainText } from '../../components/Texts/MainText';

import classes from './Home.module.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.mainBgrImg}>
        <h1 className={classes.mainHeader}>JavaScript Interview Questions</h1>
        <p>Learn, write answers, evaluate others answers...</p>
        <div className={classes.btnContainer}>
          <Link to="/create-question">
            <Button>Submit a Question</Button>
          </Link>
          <Link to="/questions">
            <Button>All Questions</Button>
          </Link>
        </div>
      </div>
      {/* <QuestionList /> */}
      <MainText title={'Do you want to stand out on JavaScript interviews?'}>
        <p>
          The easiest way to learn coding is by doing it, everybody knows
          that...
        </p>
        <p>
          But what if on a job interview you also need to remember the phrases,
          or you are facing some tricky questions that you could never imagine?
        </p>
        <h3>We have some resources here to help!</h3>
        <p>Have a look at our categories or pick a random question!</p>
      </MainText>
      <CategoryList />
    </div>
  );
};

export default Home;
