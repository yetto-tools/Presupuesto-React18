import React, { useEffect } from "react";   
import {Expense} from './Expense'

export const ListExpenses = ({expenses}) => {


    return (
        <div className="w-3/5 md:w-1/3">
            <h4 className="font-bold text-zinc-700 text-2xl mb-4">
                { expenses.length ? "Gastos" : "Lista Vacia" }
            </h4>
            {
                expenses.map( expense=>(
                    <Expense  key={expense.id} expense={expense}/>
                ))
            }
            
        </div>
    )
}