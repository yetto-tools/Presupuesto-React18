import React, { useState } from 'react'
import { Header } from './components/Header'
import { Budget } from './components/Bugdet'
import { ControlBudget } from './components/ControlBudget'
import IconNewExpense from './assets/img/nuevo-gasto.svg'
import { ListExpenses } from './components/ListExpenses'


function App() {
  
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget]  = useState(false)
  const [showExpense, setShowExpense] = useState(false)
  const [expenses, setExpenses] = useState([])
  
  const handleShowNewExpense = () =>{
      setShowExpense(true)
  }

  const handleNewExpense = (expense) =>{  
    setExpenses([...expenses,expense])   
  }
  expenses.map((g)=>{ console.log("handler new Costo", g)})
  return (
    <div>
     <div className='bg-blue-700 flex justify-center'><Header></Header></div> 
      <div className='container mb-auto mx-auto mt-5 text-center'>
        <div className=''>

          { isValidBudget ? (
            <ControlBudget budget={budget}
              showExpense={showExpense}  
              setShowExpense={setShowExpense}
              handleNewExpense = {handleNewExpense}
              expenses = {expenses}
            />
          ) : ( 

          <Budget budget={budget} 
            setBudget={setBudget} 
            isValidBudget={isValidBudget}
            setIsValidBudget={setIsValidBudget}
            showExpense={showExpense}  
            setShowExpense={setShowExpense}

          />
          )  }

            
          { isValidBudget ? (
              
            <div className='mt-20'>
              <main className='flex justify-center'>  
                <ListExpenses expenses={expenses} />
              </main>

              <div className='flex justify-end'>
                <img className='hover:cursor-pointer transition' 
                src={IconNewExpense} 
                alt='Nuevo Gasto' width={48} height={48} 
                onClick={handleShowNewExpense}
                />
              </div>
            </div>
          ): null}

        
        </div>
      </div>
    </div>
  )
}

export default App
