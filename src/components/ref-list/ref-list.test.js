import React from 'react'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import RefList from './ref-list.jsx'

describe('Testing the RefList component', () => {

  const initialState = {};
  const mockStore = configureStore();


  it('expect to render RefList component', () => {
    const store = mockStore(initialState);
    expect(shallow(<Provider store={store}><RefList /></Provider>)).toMatchSnapshot()
  })

  it('expect to render RefList component', () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<Provider store={store}><RefList refs={['a', 'b', 'c']} /></Provider>);
    const linkElement = wrapper.find('.ref-list')
    expect(linkElement.length).toEqual(3)
  })

})