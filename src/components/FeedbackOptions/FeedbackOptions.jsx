import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.btnGrp}>
      {options.map(option => (
        <button
          key={option}
          className="btn"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
