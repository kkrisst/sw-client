import React from 'react'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ResourceOverview from './resource-overview.jsx'

describe('Testing the ResourceOverview component', () => {

  const initialState = {};
  const mockStore = configureStore();


  it('expect to render ResourceOverview component', () => {
    const store = mockStore(initialState);
    expect(shallow(<Provider store={store}><ResourceOverview /></Provider>)).toMatchSnapshot()
  })
})
