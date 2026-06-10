import logo from './logo.svg';
import './App.css';
import React from 'react';
import HookCounter from './compnonent/HookCounter';
import HookCounterTwo from './compnonent/HookCounterTwo';
import HookCounterThree from './compnonent/HookCounterThree';
import HookCounterFour from './compnonent/HookCounterFour';
import Hookuseeffectcount from './compnonent/Hookuseeffectcount';
import Hookuseeffectcountone from './compnonent/Hookuseeffectcountone';
import Hookuseeffectcounttwo from './compnonent/Hookuseeffectcounttwo'
import Hookuseeffectcountthree from './compnonent/Hookuseeffectcountthree';
import Hookuseeffectcountfour from './compnonent/Hookuseeffectcountfour';
import DataFetching from './compnonent/DataFetching';
import DataFetchingone from './compnonent/DataFetchingone'
import DataFetchingtwo from './compnonent/DataFetchingtwo'
import ComponentParent from './compnonent/ComponentParent'
import HookReducer from './compnonent/HookReducer'
import HookReducertwo from './compnonent/HookReducertwo'
import DataFetchingthree from './compnonent/DataFetchingthree'
import DataFetchingfour from './compnonent/DataFetchingfour'
import Usememo from './compnonent/Usememo'
import Usereffun from './compnonent/Usereffun'

export const UserContext = React.createContext()

function App() {
  return (
    // <HookCounter/>
    // <HookCounterTwo />
    // <HookCounterThree />
    // <HookCounterFour />
    // <Hookuseeffectcount />
    // <Hookuseeffectcountone />
    // <Hookuseeffectcounttwo />
    // <Hookuseeffectcountthree /> 
    // <Hookuseeffectcountfour />
    // <DataFetching />
    // <DataFetchingone />
    //<DataFetchingtwo />
    /* <UserContext.Provider value={'ved'}>
          <ComponentParent />
    </UserContext.Provider>
    */
    //<HookReducer />
    // <HookReducertwo />
   // <DataFetchingthree />
   // <DataFetchingfour />
   // <Usememo />
   <Usereffun />
  );
}

export default App;
