import React from 'react';
import DaysToSummer from './DaysToSummer';
import {shallow} from 'enzyme';


const select = {
  description: '.description',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);

    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    const component = shallow(<DaysToSummer />);

    expect(component.exists(select.description)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (day, expectedDescription) => {
  it(`should show correct ${day}`, () => {
    global.Date = mockDate(`${day}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDescription = component.find(select.description).text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2021-06-20', '1 day to summer!');
  checkDescriptionAtDate('2021-06-19', '2 days to summer!');
  checkDescriptionAtDate('2021-03-01', '111 days to summer!');


  checkDescriptionAtDate('2021-06-21', '');
  checkDescriptionAtDate('2021-07-03', '');
  checkDescriptionAtDate('2021-09-23', '');
});