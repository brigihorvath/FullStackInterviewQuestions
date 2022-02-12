import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getQuestionCategory } from '../../api';
import { useEffect } from 'react';

import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import QuestionList from '../../components/Questions/QuestionList';
import { HeaderImage } from '../../components/UI/HeaderImage';

const CategoryPage = () => {
  const { category } = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuestions,
    error,
  } = useHttp(getQuestionCategory, true);

  useEffect(() => {
    sendRequest(category);
  }, [sendRequest, category]);

  console.log(status, loadedQuestions, error);
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

  if (!loadedQuestions.data.length) {
    return (
      <div>
        <HeaderImage title={category} />
        <p>No Questions found</p>
      </div>
    );
  }

  return (
    <div>
      <HeaderImage title={category} />
      <QuestionList questions={loadedQuestions.data} />
    </div>
  );
};

export default CategoryPage;
