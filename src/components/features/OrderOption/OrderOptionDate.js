import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({currentValue, setOptionValue}) => {
  <div>
    <DatePicker className={styles.input} selected={currentValue} onChange={setOptionValue} />
  </div>;
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,

};

export default OrderOptionDate;