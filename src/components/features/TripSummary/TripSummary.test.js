import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='cost' days='{1}' tags={['tag']} />);
    expect(component).toBeTruthy();
  });

  it('should generate correct link', () => {
    const expectedLink = {expectedLink};
    const component = shallow(<TripSummary id={expectedLink} />);
    expect(component.find('.link').prop('to')).toEqual('/trip/{expectedLink}');
  });

  it('should render correct image "src" and "alt" ', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary id='test' src={expectedImage} name={expectedAlt} />);
  
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
    expect(component.find('.image').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = '1';

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    // const renderedName = component.find('.name').at();
    // const renderedCost = component.find('').at();
    // const expectedDays = component.find('').at().

    expect(component.renderedName).toEqual(expectedName);
    expect(component.renderedCost).toEqual({expectedCost});
    expect(component.renderedDays).toEqual({expectedDays});
  });
  
  it('should render correct tag', () => {
    const expectedTags = ['1', '2', '3'];
    const tag = [];
    const component = shallow(<TripSummary tags={['1', '2', '3']} />);

    const renderTag = component.find('tag').at(tag);
    expect(renderTag).toEqual(expectedTags[tag]);

  });

  it('should show error without tags in div', () => {
    const component = shallow(<TripSummary days='{1}' tags={[]} />);
    const checkedDiv = component.find('.tags').exists;

    expect(checkedDiv).toEqual(false);
  });
});