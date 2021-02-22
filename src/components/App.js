import React from 'react';
import Header from './Header';


// functional component as it won't need helper methods or component level state
export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* Hi, i am the app */}
    </div>
  )
}