import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderOptionNumber = ({currentValue, setOptionValue, price, limits}) => {
  return (
    <div className={styles.number}>
      <input className={styles.inputSmall} type='number' value={currentValue} min={limits.min} max={limits.max}  onChange={event => setOptionValue(event.currentTarget.value)} />
      ({formatPrice(price)})
    </div>
  );
};

OrderOptionNumber.propTypes = { 
  currentValue: PropTypes.number, 
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
  limits: PropTypes.value,
};

export default OrderOptionNumber;