import React, { useEffect } from 'react';

import { fetchRoot } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Resource from '../resource/resource.jsx';

import './resource-overview.scss';

const ResourceOverview = ({ rootId }) => {
  const dispatch = useDispatch();

  const resources = useSelector(state => state.resources.payload[rootId]);

  useEffect(() => {
		dispatch(fetchRoot(rootId));
  }, [dispatch]);
  
  const resourceTtems = (resources || []);

  return (
    <div className='resource-overview'>
      <div>
        {resources && (
          resourceTtems.results.map( (item, index) => {
            return (
              <div key={item.url} className='resource-wrapper'>
              {
                <Resource item={item} />
              }
              </div>
            )
          })
        )}
      </div>
      {
        resources && resources.next
        ? (
          <div className='load-button-wrapper'>
            <div className='load-button' onClick={() => {
                const nextRootId = resources.next.split('https://swapi.co/api/')[1];
                dispatch(fetchRoot(nextRootId))
              }
            }>
            Load more
            </div>
          </div>
        )
        : ''
      }
      
    </div>
  );
};

export default ResourceOverview;