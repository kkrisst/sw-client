import React from 'react'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Resource from './resource.jsx'

describe('Testing the Resource component', () => {

  const initialState = {};
  const mockStore = configureStore();


  it('expect to render Resource component', () => {
    const store = mockStore(initialState);

    
    expect(shallow(<Provider store={store}><Resource /></Provider>)).toMatchSnapshot()
  })
})
