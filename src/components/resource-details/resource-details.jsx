import React from 'react';

import { useSelector } from 'react-redux';

import './resource-details.scss';

const ResourceDetails = ({ item, hidden }) => {
  const itemProps = Object.keys(item);

  return (
    <div className={`resource-details ${hidden ? 'hidden' : ''}`}>
      {
        itemProps.map((prop, index) => {
          if(item[prop] !== null) {
            
            return (
              <div key={index}>{prop}: {item[prop]}</div>
            )
          }
        })
      }
    </div>
    );
}

export default ResourceDetails;