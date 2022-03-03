import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getQuestionCategory } from '../../api';
import { useEffect, useState } from 'react';

import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import QuestionList from '../../components/Questions/QuestionList';
import { HeaderImage } from '../../components/UI/HeaderImage';

import Search from '../../components/Questions/Search';

const CategoryPage = () => {
  const { category } = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuestions,
    error,
  } = useHttp(getQuestionCategory, true);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

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

  if (!loadedQuestions) {
    return <p>No Questions found</p>;
  }

  // console.log(loadedQuestions);
  const searchQuestion = (searchTerm) => {
    setIsChanged(true);
    console.log(
      loadedQuestions.data.filter((question) =>
        question.question.includes(searchTerm)
      )
    );
    if (searchTerm.length) {
      setFilteredQuestions(
        loadedQuestions.data.filter((question) =>
          question.question.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredQuestions(loadedQuestions.data);
    }
  };

  return (
    <div>
      <HeaderImage title={category} />
      <Search searchQuestion={searchQuestion} />

      <QuestionList
        questions={isChanged ? filteredQuestions : loadedQuestions.data}
      />
    </div>
  );
};

export default CategoryPage;
