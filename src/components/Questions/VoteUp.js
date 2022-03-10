import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import { upvoteAnswer } from '../../api';
import classes from './VoteContainer.module.css';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const VoteUp = (props) => {
  const {
    sendRequest: sendUpvoteRequest,
    status: upVoteStatus,
    data: upVoteData,
    error: upVoteError,
  } = useHttp(upvoteAnswer, false);

  useEffect(() => {
    props.updateVotes(upVoteData?.data?.data?.content?.votes);
  }, [upVoteData, props]);

  const upVoteHandler = (event) => {
    event.preventDefault();
    sendUpvoteRequest(props.answerId);
  };

  return (
    <BsFillArrowUpSquareFill
      className={classes.arrowIcon}
      onClick={upVoteHandler}
    />
  );
};

export default VoteUp;
