import React from 'react';
import {Collection} from '../Collection/Collection'
export const Collections = (props) => {
  const {data} = props
  
  const collectionItems = data?.map((collection, i) => <Collection {...collection} key={collection.group_id + i}/>)

  return (
    <div>
    {collectionItems}
    </div>
  )
}