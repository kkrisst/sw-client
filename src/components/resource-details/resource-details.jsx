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
              return (<div key={index}>{prop}:<RefList refs={item[prop]} /></div>)
            } else if (item[prop].toString().startsWith("https://swapi.co/api/")) {
              return (<div key={index}>{prop}:<RefList refs={[item[prop]]} /></div>)
            }
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