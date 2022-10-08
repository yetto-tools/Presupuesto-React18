import React,{Suspense} from "react";
import {toLocalCurrency, toLocaleDateString} from '../utils/utilities'
// const iconAhorro = React.lazy(()=>import ('../assets/img/icono_ahorro.svg'))



// const Icon = (props) => {
//     const src = React.lazy(() => import('../assets/img' + props.src + '.svg'));
//     return (
//         <Suspense fallback={<p>loading...</p>}><img src={src} /></Suspense>
//     );
// };

export const Expense = ({expense}) => {
    const {id, name, quantity, category, date} = expense
    return ( 
        <div className="bg-white my-2 p-4 w-full rounded-lg border overflow-hidden shadow-xl justify-start">
            <p className="font-semibold text-zinc-600 capitalize text-xs p-1">{toLocaleDateString(date)}</p>
            <div className="flex">
                <div className="flex-2 text-start">
                <img 
                //    src= {
                //         <Suspense>
                //             {iconAhorro}
                //         </Suspense>
                //     }
                />

                </div>
                <div className="flex-1 text-start">
                    <p className="font-bold text-zinc-500 uppercase text-xs">{category}</p>
                    <p className="font-semibold text-zinc-700 capitalize text-lg">{name}</p>
                </div>
                <div className="flex-2 inline text-lg font-bold py-2">
                    {toLocalCurrency(quantity)}
                </div>
            </div>
        </div>

    )
}
