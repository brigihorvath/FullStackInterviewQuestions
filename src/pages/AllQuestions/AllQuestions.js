import useHttp from '../../hooks/use-http';
import { getQuestions } from '../../api';
import { useEffect } from 'react';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import QuestionList from '../../components/Questions/QuestionList';
import { HeaderImage } from '../../components/UI/HeaderImage';

const AllQuestions = () => {
  const {
    sendRequest,
    status,
    data: loadedQuestions,
    error,
  } = useHttp(getQuestions, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (!loadedQuestions) {
    return <p>No Questions found</p>;
  }
  //   console.log(loadedQuestions.data);

  return (
    <div>
      <HeaderImage title={'All questions'} />

      <QuestionList questions={loadedQuestions.data} />
    </div>
  );
};

export default AllQuestions;
