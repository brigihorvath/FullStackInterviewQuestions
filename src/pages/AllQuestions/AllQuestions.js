import useHttp from '../../hooks/use-http';
import { getQuestions } from '../../api';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../components/UI/LoadingSpinner';
import QuestionList from '../../components/Questions/QuestionList';
import { HeaderImage } from '../../components/UI/HeaderImage';
import Search from '../../components/Questions/Search';

const AllQuestions = () => {
  const {
    sendRequest,
    status,
    data: loadedQuestions,
    error,
  } = useHttp(getQuestions, true);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  console.log(loadedQuestions);

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

  console.log(filteredQuestions);
  return (
    <div>
      <HeaderImage title={'All questions'} />
      <Search searchQuestion={searchQuestion} />

      <QuestionList
        questions={isChanged ? filteredQuestions : loadedQuestions.data}
      />
      {isChanged && !filteredQuestions.length && (
        <p>No questions found for this search term!</p>
      )}
    </div>
  );
};

export default AllQuestions;
