import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Message = ({children, colorAlert}) =>{

    return (
        <div role='alert'>
        <div class={`bg-${colorAlert}-500 text-white font-bold rounded-t px-4 py-2`}>
            Danger
        </div>
        <div class={`border border-t-0 border-${colorAlert}-400 rounded-b bg-${colorAlert}-100 px-4 py-3 text-${colorAlert}-700`}>
            <p>{children}</p>
        </div>
        </div>        
    )
}