import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from './../OrderSummary/OrderSummary';
import pricing from './../../../data/pricing.json';
import OrderOption from './../OrderOption/OrderOption';
import PageTitle from './../../common/PageTitle/PageTitle';
import Button from './../../common/Button/Button';
import {formatPrice} from './../../../utils/formatPrice';
import {calculateTotal} from './../../../utils/calculateTotal';
import settings from './../../../data/settings';


const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if (options.name < 3 || options.name === '') {
    alert('Your name is too short');
    return;
  }
  if (options.contact < 2 || options.contact === '') {
    alert('Enter your contact detail correctly');
    return;
  }

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
}; 

const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName, countryCode}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}> 
        <OrderOption {...option}  currentValue={options[option.id]} setOrderOption={setOrderOption} />
      </Col>
    ))}
    
    <Col xs={12}>

      <PageTitle text='Order summary' /> 
      <OrderSummary options={options} tripCost={tripCost} />
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>

  </Row>
);


OrderForm.propTypes = { 
  tripCost: PropTypes.string,
  options: PropTypes.func,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};


export default OrderForm;