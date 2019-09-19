import React from 'react';

import { useSelector } from 'react-redux';
import RefList from '../ref-list/ref-list.jsx';

import './resource-details.scss';

const ResourceDetails = ({ item, hidden }) => {
  const itemProps = Object.keys(item);

  return (
    <div className={`resource-details ${hidden ? 'hidden' : ''}`}>
      {
        itemProps.map((prop, index) => {
          if(item[prop] !== null) {
            
            if (Array.isArray(item[prop])) {
              return (
                <div key={index} className='reflist-wrapper'>
                  <div className='name'>{prop}:</div>
                  <RefList refs={item[prop]} />
                </div>
                )
            } else if (item[prop].toString().startsWith("https://swapi.co/api/")) {
              return (
                <div key={index} className='reflist-wrapper'>
                  <div className='name'>{prop}:</div>
                  <RefList refs={[item[prop]]} />
                </div>
                )
            }

            return (
              <div key={index} className='prop-line'>
                <div className='name'>{prop}:</div>
                <div className='value'>{item[prop]}</div>
              </div>
            )
          }
        })
      }
    </div>
  );
}

export default ResourceDetails;