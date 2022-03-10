import { useState, useCallback } from 'react';
import VoteUp from './VoteUp';
import VoteDown from './VoteDown';

import classes from './VoteContainer.module.css';

const VoteContainer = (props) => {
  const [votes, setVotes] = useState(props.votes);

  const onVoteHandler = useCallback((voteNum) => {
    setVotes((votes) => (voteNum === 0 || voteNum ? voteNum : votes));
  }, []);

  return (
    <div className={classes.voteContainer}>
      <VoteUp answerId={props.answerId} updateVotes={onVoteHandler} />
      <p className={classes.voteCount}>{votes}</p>
      <VoteDown answerId={props.answerId} updateVotes={onVoteHandler} />
    </div>
  );
};

export default VoteContainer;
