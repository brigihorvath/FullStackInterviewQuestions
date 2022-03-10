import { useEffect } from 'react';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import classes from './VoteContainer.module.css';
import useHttp from '../../hooks/use-http';
import { downvoteAnswer } from '../../api';

const VoteDown = (props) => {
  const {
    sendRequest: sendDownvoteRequest,
    status: downVoteStatus,
    data: downVoteData,
    error: downVoteError,
  } = useHttp(downvoteAnswer, false);

  useEffect(() => {
    props.updateVotes(downVoteData?.data?.data?.content?.votes);
  }, [downVoteData, props]);

  const downVoteHandler = (event) => {
    event.preventDefault();
    sendDownvoteRequest(props.answerId);
  };

  return (
    <BsFillArrowDownSquareFill
      className={classes.arrowIcon}
      onClick={downVoteHandler}
    />
  );
};

export default VoteDown;
