import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectSpecificRef } from '../../actions';

import './ref-list.scss';

const RefList = ({ refs }) => {
  const dispatch = useDispatch();
  console.log('refs');

  return (
    <div className='ref-list'>
      {
        refs.map((ref, index) => {
          return (<Link key={index} className='ref-link' onClick={() => {dispatch(selectSpecificRef(ref))}} to='/specific'>{ref}</Link>)
        })
      }
    </div>
  )
};

export default RefList;
