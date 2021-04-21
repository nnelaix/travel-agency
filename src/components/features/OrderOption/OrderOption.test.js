import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';


describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='text' name='name'/>);
    expect(component).toBeTruthy();
  });
});


it('should return empty object if called without required props', () => {
  const component = shallow(<OrderOption />);
  expect(component).toEqual({});
});

it('should render correct name in title', () => {
  const expectedName = 'title';
  const component = shallow(<OrderOption name={expectedName} type='text' />);

  const renderedName = component.find('h3').text();
  expect(renderedName).toEqual(expectedName);
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
// const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {mockSetOrderOption = jest.fn();
      component = shallow(<OrderOption type={type} setOrderOption={mockSetOrderOption} {...mockProps}
        {...mockPropsForType[type]} /> );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
        
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);
        
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains div with class icon', () => {
          const div = renderedSubcomponent.find('.icon');
          expect(div.length).toBe(4); 

          {/* const emptyIcon = div.find('.icon').find(Icon[name="times-circle"]).length;
          expect(emptyIcon).toBe(1);

          const options = div.find('.icon').not(Icon[name="times-circle"]);
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        */}
        });
        break;
      }

      // ** 
      case 'checkboxes': {
        it('contains div with class checkboxes and input checkbox', () => {
          const div = renderedSubcomponent.find('checkboxes');
          expect(div.length).toBe(1);

          // const input = div.find('input');
        });
        break;
      }

      case 'number': {
        it('contains div with class number and inputSmall', () => {
          const div = renderedSubcomponent.find('number');
          expect(div.length).toBe(1);
        
          const input = div.find('input[type="number"]').length;
          expect(input.length).toBe(1);
          expect(input.at(0).prop('type')).toBe('number');

          // expect(input.at(0).prop('min')).toBe();
        });

        it('should render setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'date': {
        it('contains DatePicker', () => {
          const datePicker = renderedSubcomponent.find(DatePicker);
          expect(datePicker.length).toBe(1);
        });

        it('should render setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'text': {
        it('contains div and input', () => {
          const text = text.find('type[text=""]').length;
          expect(text.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input[type="text"]').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      
    }
  });
}
