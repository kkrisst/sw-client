import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectSpecificRef } from '../../actions';

import './ref-list.scss';

const RefList = ({ refs }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        refs.map((ref, index) => {
          return (<Link key={index} className='' onClick={() => {dispatch(selectSpecificRef(ref))}} to='/specific'>{ref}</Link>)
        })
      }
    </div>
  )
};

export default RefList;

