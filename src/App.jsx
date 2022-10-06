import React, { useState } from 'react';
import { Header } from './components/Header'
import { Budget } from './components/Bugdet'
function App() {
  
  const [budget, setBudget] = useState(0);

  return (
    <div>
     <div className='bg-sky-600 flex justify-center'><Header></Header></div> 
      <div className='container mx-auto mt-5 text-center'>
        <div className=''>
          <Budget budget={budget} setBudget={setBudget}/>
        </div>
      </div>
    </div>
  )
}

export default App
