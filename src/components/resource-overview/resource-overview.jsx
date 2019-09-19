import React, { useEffect } from 'react';

import { fetchRoot } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

import './resource-overview.scss';

const ResourceOverview = ({ rootId }) => {
  const dispatch = useDispatch();

  const resources = useSelector(state => state.resources.payload[rootId]);

  useEffect(() => {
		dispatch(fetchRoot(rootId));
  }, [dispatch]);
  
  const resourceTtems = (resources || []);

  return (
    <div>
      <div>
        {resources && (
          resourceTtems.results.map( (item, index) => {
            return (
              <div key={index}>{item.name}</div>
            )
          })
        )}
      </div>
      {
        resources && resources.next
        ? (
          <div>
          Load more
          </div>
        )
        : ''
      }
      
    </div>
  );
};

export default ResourceOverview;