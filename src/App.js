import React, { useState } from 'react';
import './App.css';
import LeftDiv from './components/LeftDiv';
import RightDiv from './components/RightDiv';
import Context from './components/context';

function App() {
const [jsondata, setjsondata] = useState([]);


return (
<Context.Provider value={{jsondata, setjsondata}}>

  <div className='maincontainer'>

    <LeftDiv/>
    <RightDiv/>

  </div>

</Context.Provider>
    
    
  )
}

export default App;
