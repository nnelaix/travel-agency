import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from './../../../utils/calculateTotal';
import {formatPrice} from './../../../../src/utils/formatPrice';


const OrderSummary = ({tripCost, options}) => {
  return (
    <h2 className={styles.component}> Total: <strong> {formatPrice(calculateTotal(tripCost, options))} </strong> </h2> 
  );
};

OrderSummary.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};


export default OrderSummary;