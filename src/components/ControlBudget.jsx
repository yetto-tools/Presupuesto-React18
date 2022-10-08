import React from "react"
import {Modal} from './ModalExpense';
import {toLocalCurrency} from '../utils/utilities'

export const ControlBudget = ({budget, expenses,showExpense, setShowExpense, handleNewExpense, setExpenses}) => {      

    return (
        <div className="bg-white mx-auto max-w-sm rounded-lg border overflow-hidden shadow-xl">
            <div className="container p-20">
                <div>
                    <div>Grafica</div>
                </div>
                <div className="">
                    <p><span className="font-semibold text-sky-600 p-2">Presupuesto:</span>{toLocalCurrency(budget)}</p>
                    <p><span className="font-semibold text-sky-600 p-2">Disponible:</span>{toLocalCurrency(0)}</p>
                    <p><span className="font-semibold text-sky-600 p-2">Gastado:</span>{toLocalCurrency(0)}</p>
                </div>        

            </div>
            <Modal withLaunchButton={false}
                showExpense={showExpense} 
                setShowExpense={setShowExpense} 
                handleNewExpense={handleNewExpense}
                expenses={expenses}
                setExpenses={setExpenses}
            />
        </div>


    )
}