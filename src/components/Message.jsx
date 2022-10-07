import React from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Message = ({children, colorAlert}) =>{

    return (
        
        <div className={`${colorAlert}`}>{children}</div>
    )
}