import React from "react";

const SingleScoreItem = ({ number, score1, score2, extraClass }) => {
  const classNames = `single-score-item ${extraClass || ''}`;

  return (
    <div className="single-score">
      <div className={classNames}>{number}</div>
      <div className={classNames}>{score1}</div>
      <div className={classNames}>{score2}</div>
    </div>
  );
};

const Score = ({ className, withExtraClass }) => {
  const extraClass = withExtraClass ? 'ingame' : '';

  return (
    <div className={className}>
      <SingleScoreItem number={1} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={2} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={3} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={4} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={5} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={6} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={7} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={8} score1="-" score2="-" extraClass={extraClass} />
      <SingleScoreItem number={9} score1="-" score2="-" extraClass={extraClass} />
    </div>
  );
};

export default Score;
