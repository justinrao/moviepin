import React from 'react';
import HeaderBar from './HeaderBar';
import {shallow} from 'enzyme';


describe('HeaderBar', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<HeaderBar
      onSearchChanged={() => {}}
    />);
  });

  it('search text is displayed', () => {

    const value = 'mock value';

    const wrapper = shallow(<HeaderBar
      search={value}
      onSearchChanged={() => {}}
    />);


    expect(wrapper.find('SearchField').props().value).toEqual(value);
  });

  it('onSearchChanged handler is called when search value changes', () => {

    const handleSearchChanged = jest.fn();

    const wrapper = shallow(<HeaderBar
      onSearchChanged={handleSearchChanged}
    />);

    const value = 'mock value2';

    wrapper.find('#searchField').simulate('change', {value});

    expect(handleSearchChanged).toHaveBeenCalledWith(value);

  });

});
