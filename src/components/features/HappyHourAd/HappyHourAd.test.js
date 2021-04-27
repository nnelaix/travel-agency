import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

describe('Component HappyHourAd', () => {

  const select = {
    title: '.title',
    promoDescription: '.promoDescription',
  };

  const mockProps = {
    title: 'Happy Hour', 
    promoDescription: 'It is your time! Take advantage of Happy Hour! All offers 20% off!',
  };

  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });


  it('should render correct title and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderTitle = component.find(select.title).text();
    expect(renderTitle).toEqual(mockProps.title);
  });
});