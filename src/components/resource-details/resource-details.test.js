import React from 'react'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import ResourceDetails from './resource-details.jsx'

describe('Testing the ResourceDetails component', () => {

  const initialState = {};
  const mockStore = configureStore();


  it('expect to render ResourceDetails component', () => {
    const store = mockStore(initialState);

    
    expect(shallow(<Provider store={store}><ResourceDetails /></Provider>)).toMatchSnapshot()
  })
})
