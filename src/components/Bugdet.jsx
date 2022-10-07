import React, { useState } from 'react'
import { Message } from '../components/Message'

export const Budget = ({budget, setBudget, 
    isvalidBudget, setIsValidBudget}) => {

    const [mensaje, setMesaje] = useState('')
    
    const handlerInputBudget = (e)=>{
        e.preventDefault();
        if(!budget || budget<0 ){
            return setMesaje('No es Un tipo Valido');
        }
        setMesaje('')
        setIsValidBudget(true)


    };

    return (
        <div className='bg-white mx-auto max-w-sm rounded-lg border overflow-hidden shadow-xl'>
            <div className='w-full'>
                <div className='px-6 py-4'>
                    <form className='w-full max-w-sm'>
                        <label className='text-sky-500 font-semibold'>Definir Presupuesto</label>
                        <div className='flex items-center border-b border-rose-500 py-2'>
                            
                            <input className='appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
                                type='number' placeholder='Añadir tu Presupuesto' aria-label='Añade Tu Presupuesto'
                                onChange= {(e)=>{setBudget(e.target.value)} }
                            />
                            <button className='flex-shrink-0 bg-rose-500 hover:bg-rose-700 border-rose-500 hover:border-rose-700 text-sm border-4 text-white py-1 px-2 rounded' 
                                type='button'
                                onClick={handlerInputBudget}
                            > 
                                Añadir
                            </button>
                            {/* <button className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded' type='button'>
                            Cancel
                            </button> */}
                        </div>
                        <div>
                            {mensaje && <Message colorAlert="bg-red-100 text-red-700 font-semibold">{mensaje}</Message>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}   