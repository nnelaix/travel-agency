import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <div>
      <DatePicker className={styles.input} selected={currentValue} onChange={setOptionValue} />
    </div>
  );
};
OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;