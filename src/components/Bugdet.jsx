import React, { useState } from 'react';
import { Message } from 'postcss';

export const Budget = ({budget, setBudget}) => {

    const [mensaje, setMesaje] = useState('')
    const handlerInputBudget = (e)=>{
        e.preventDefault();
        if(!(Number(budget)) || Number(budget)<0 ){
            setMesaje("No es Un tipo Valido");   
        }
        else {
            setMesaje("Todo Correcto!!");   
        }
         

    };

    return (
        <div className='bg-white mx-auto max-w-sm rounded-lg border overflow-hidden shadow-xl'>
            <div className='w-full'>
                <div className='px-6 py-4'>
                    <form className='w-full max-w-sm'>
                        <label className='text-sky-500 font-semibold'>Definir Presupuesto</label>
                        <div className='flex items-center border-b border-rose-500 py-2'>
                            
                            <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                                type='number' placeholder='Añadir tu Presupuesto' aria-label='Añade Tu Presupuesto' min ="0.01" step="1" max="9999999999"
                                onInput = {(e)=>{ console.log(e.target.value)} }
                            />
                            <button className='flex-shrink-0 bg-rose-500 hover:bg-rose-700 border-rose-500 hover:border-rose-700 text-sm border-4 text-white py-1 px-2 rounded' 
                                type='button'
                            > 
                                Añadir
                            </button>
                            {/* <button className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded' type='button'>
                            Cancel
                            </button> */}
                        </div>
                        <div>
                            <Message colorAlert="red">{mensaje}</Message>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}   