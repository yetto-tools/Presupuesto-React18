import React, { useState } from 'react'
import { Header } from './components/Header'
import { Budget } from './components/Bugdet'
import { ControlBudget } from './components/ControlBudget'
import IconNewExpense from './assets/img/nuevo-gasto.svg'


function App() {
  
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget]  = useState(false)
  const [modal, setModal] = useState(false)

  const handleNewExpense = () =>{
    console.log("Asdfasf")
    setModal(true)

  }
  return (
    <div>
     <div className='bg-blue-700 flex justify-center'><Header></Header></div> 
      <div className='container mb-auto <mx-auto mt-5 text-center'>
        <div className='flex flex-col h-96 justify-between'>

          { isValidBudget ? (
            <ControlBudget budget={budget}/>
          ) : ( 

          <Budget budget={budget} 
            setBudget={setBudget} 
            isValidBudget={isValidBudget}
            setIsValidBudget={setIsValidBudget}
            setModal={setModal}
          />
          )  }

          {isValidBudget ? (
            <div className='flex justify-end mr-20'>
              <img className='hover:cursor-pointer' 
              src={IconNewExpense} 
              alt='Nuevo Gasto' width={48} height={48} 
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              onClick={handleNewExpense}
              />
            </div>
          ) : null}

        
        </div>
      </div>
    </div>
  )
}

export default App
