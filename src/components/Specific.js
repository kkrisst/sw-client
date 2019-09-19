import React from 'react';
import { useSelector } from 'react-redux';

import ResourceDetails from './resource-details/resource-details.jsx';

const Specific = () => {
  const specific = useSelector(state => state.specific.payload);

  return (
    <div>
      {
        specific && (<ResourceDetails item={specific} hidden={false}/>)
      }
    </div>
  );

};

export default Specific;