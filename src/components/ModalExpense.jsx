import React from 'react'
import { useState, useEffect } from 'react'
import { Message } from './Message'
import {uuidV4} from '../utils/utilities'


export  function Modal({withLaunchButton, showExpense, setShowExpense, handleNewExpense}) {

  const [showModal, setShowModal] = useState(false);

  
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  const [message, setMessage] = useState('')
  const handleCloseModal = () =>{
    setShowModal(false)
    setShowExpense(false)
    setName('')
    setQuantity('')
    setCategory('')
  }

  const handleAddExpense = () =>{

    if([name, quantity, category].includes("") || quantity<=0){  
      setMessage("Se Requienen Todos los campos")
      setQuantity('')
      setTimeout(()=>{
        setMessage('')
      }, 3500)
      return
    }else{
      let id = uuidV4()
      let date = Date.now()
      handleNewExpense({id, name, quantity, category ,date})
      handleCloseModal()
    }
    
  }



  const handleShowModal = () =>{
    setShowModal(true)
    setShowExpense(showModal)
  }
  useEffect(()=>{
    if(showExpense){
      handleShowModal();
    }
  },[showExpense])


  return (
    <>
      {withLaunchButton ? ( <button
        className='bg-sky-500 text-white hover:bg-sky-400 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={handleShowModal}
      >  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      
      </button> ) : null}
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
          >
            <div className='relative w-2/5 my-6 mx-auto max-w-6xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none '>
                {/*header*/}
                <div className='flex items-start justify-between px-4 py-4 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>
                    Gastos
                  </h3>
                  <button
                    className='mt-4 text-red-400 font-bold rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:outline-red-700 transition-all'
                    onClick={handleCloseModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className='w-full m-auto max-w-md p-4'>
                  <div className='mb-4'>
                      <label className='flex text-blue-500 text-sm font-semibold mb-2 leading-relaxed' htmlFor='expense-name'>
                        Nombre del Gasto
                      </label>
                      <input className='flex items-center border-b border-rose-500 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:bg-rose-50 focus:outline-none'
                        id='expense-name' name='expense-name' type='text' placeholder='Añade el Nombre del Gasto' 
                        value = {name}
                        onChange={(e)=>{setName(e.target.value)}}
                      />
                  </div>
                  <div className='mb-4'>
                      <label className='flex text-blue-500 text-sm font-semibold mb-2' htmlFor='quantity'>
                        Cantidad
                      </label>
                      <input className='flex items-center border-b border-rose-500 appearance-none 
                        bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:bg-rose-50 focus:outline-none'
                        id='quantity' name='quantity' type='number' placeholder='Añadir la Canidad del Gasto. ej. 300' 
                        value={quantity}
                        onChange={(e)=>{setQuantity(e.target.value)}}
                      />
                  </div>
                  <div className='mb-10'>
                      <label className='flex text-blue-500 text-sm font-semibold mb-2' htmlFor='quantity'>
                        Categoria de Gasto
                      </label>
                      <select className='w-5/6 items-stretch border-b border-rose-500  appearance-none bg-transparent text-gray-700 
                        py-1 px-2 leading-tight  focus:outline-none focus:ring-offset-1 focus:ring focus:ring-rose-200 focus:ring-inset'
                        id='category' name='category' type='number' placeholder='Añadir la Canidad del Gasto. ej. 300'
                        onChange={(e)=>setCategory(e.target.value)}
                      >
                        <option className='checked:bg-rose-400 checked:font-semibold' value=''>-- Selecione --</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Ahorros'>Ahorros</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Comida'>Comida</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Diversion'>Diversion</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Extras'>Extras</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Imprevistos'>Imprevistos</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Salud'>Salud</option>
                        <option className='checked:bg-rose-400 checked:font-semibold' value='Transporte'>Transporte</option>
                      </select>
                      <label htmlFor='category' className='font-bold'>&#8964;</label>
                  </div>
                  {message && <Message colorAlert="bg-red-100 text-red-700 font-semibold">{message}</Message>}
                </div>
                {/*footer*/}
                <div className='flex items-center justify-center p-4 border-t border-solid border-slate-200 rounded-b'>
                  {/* <button
                    className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type='button'
                    onClick={handleCloseModal}
                    tabIndex={-1}
                  >
                    Close
                  </button> */}
                  <button
                    className="flex-shrink-0 bg-rose-500 hover:bg-rose-700 border-rose-500 hover:border-rose-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-red-700"
                    type='button'
                    onClick={handleAddExpense}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-60 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}