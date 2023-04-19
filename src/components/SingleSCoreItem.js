const SingleScoreItem = ( {number, score1, score2 }) => {
    return(
<div className="single-score">
            <div className="single-score-item">{ number }</div>
            <div className="single-score-item">{ score1 }</div>
            <div className="single-score-item">{ score2 }</div>
        </div>

    )
}