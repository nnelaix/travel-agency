import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from './../OrderSummary/OrderSummary';
import pricing from './../../../data/pricing.json';
import OrderOption from './../OrderOption/OrderOption';
import PageTitle from './../../common/PageTitle/PageTitle';

const OrderForm = ({tripCost, options}) => (
  <Row>
    {pricing.map(pricingOption => (
      <Col md={4} key={pricingOption.id}> 
        <OrderOption {...pricingOption} />
      </Col>
    ))}
    
    <Col xs={12}>

      <PageTitle text='Order summary' /> 
      <OrderSummary options={options} tripCost={tripCost} />
        
    </Col>
  </Row>
);


OrderForm.propTypes = { 
  tripCost: PropTypes.string,
  options: PropTypes.object,
};


export default OrderForm;