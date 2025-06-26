import PropTypes from 'prop-types';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div className="stat-grp">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div className="calcstats-grp">
        <p>Total feedback: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
