import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='cost' days={1} tags={['tag']} />);
    expect(component).toBeTruthy();
  });

  it('should generate the correct link', () => {
    const expectedLink = 'abc';
    const linkId = '/trip/abc';
    const component = shallow(<TripSummary id={expectedLink} />);

    expect(component.find('.link').prop('to')).toEqual(linkId);
  });

  it('should render correct image "src" and "alt" ', () => {
    const expectedImageSrc = 'image';
    const expectedAlt = 'alt';

    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedAlt} />);
  
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 1;


    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component.find('h3').text()).toEqual(expectedName);
    expect(component.find('span').at(1).text()).toEqual('from ' + expectedCost);
    expect(component.find('span').at(0).text()).toEqual(expectedDays + ' days');
  });
  
  it('should render correct tag', () => {
    const expectedTags = ['1', '2', '3'];

    const component = shallow(<TripSummary tags={expectedTags} />);

    const renderTag = component.find('.tag').at(1);
    expect(renderTag.text()).toEqual(expectedTags[1]);

  });

  it('should show error without tags in div', () => {
    const component = shallow(<TripSummary tags={[]} />);
    const checkedDiv = component.find('.tags').exists();

    expect(checkedDiv).toEqual(false);
  });
});