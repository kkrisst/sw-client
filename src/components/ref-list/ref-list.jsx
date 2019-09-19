import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const RefList = ({ refs }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        refs.map((ref, index) => {
          return (<Link key={index} className='' to='/specific'>{ref}</Link>)
        })
      }
    </div>
  )
};

export default RefList;

