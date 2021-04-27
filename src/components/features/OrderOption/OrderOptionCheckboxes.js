import React from 'react';
import PropTypes from 'prop-types';
import styles from './../OrderOption/OrderOption.scss';
import {formatPrice} from './../../../utils/formatPrice';


const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  
  <div className={styles.checkboxes}>  
    {values.map(value => (
      <label key={value.id}> 
        <input type='checkbox' 
          checked={currentValue.includes(value.id) ? true : false }         
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
          value={value.id}
        />
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);


OrderOptionCheckboxes.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.array,
};



export default OrderOptionCheckboxes;