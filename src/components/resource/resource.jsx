import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import ResourceDetails from '../resource-details/resource-details.jsx';

import './resource.scss';

const Resource = ({ item }) => {
  const dispatch = useDispatch();
  
  const [showDetails, setShowDetails] = useState(false);

  const itemProps = Object.keys(item);
  let mainProp = '';
  if (itemProps.includes('name')) mainProp = 'name';
  else if (itemProps.includes('title')) mainProp = 'title';
  
  return (
    <div className='resource'>
      {
        mainProp === ''
        ? ''
        : (
            <div
              className='main-prop'
              onClick={() => {
                setShowDetails(!showDetails)}
              }  
            >
              <div className='main-prop'>
                {item[mainProp]}
              </div>
              <ResourceDetails item={item} hidden={!showDetails}/>
              
            </div>
          )
      }
    </div>
  );
};

export default Resource;