import React from 'react';
import { UserContext } from '../App';

function ComponentChild() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user =>{
                return <div>User context value is : {user}</div>
            }
        }
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentChild;
