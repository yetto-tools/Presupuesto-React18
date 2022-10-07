import React from "react"
import { ModalExpense } from './ModalExpense'

export const ControlBudget = ({budget, setModal}) => {
    const toLocalCurrency = (value) =>{
        return  new Intl.NumberFormat('es-GT', { 
            style: 'currency', currency: 'GTQ' 
        }).format(value)
      }
      

    return (
        <div className="bg-white mx-auto max-w-sm rounded-lg border overflow-hidden shadow-xl">
            <div className="container p-20">
                <div>
                    <div>Grafica</div>
                </div>
                <div className="">
                    <p><span className="font-semibold text-sky-600 p-2">Presupuesto:</span>{toLocalCurrency(budget)}</p>
                    <p><span className="font-semibold text-sky-600 p-2">Presupuesto:</span>{toLocalCurrency(budget)}</p>
                    <p><span className="font-semibold text-sky-600 p-2">Presupuesto:</span>{toLocalCurrency(budget)}</p>
                </div>
                
<button type="button" className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<ModalExpense setModal={setModal} />
            </div>
        </div>


    )
}