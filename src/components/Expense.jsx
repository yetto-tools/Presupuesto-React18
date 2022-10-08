import React,{Suspense} from "react";
import {toLocalCurrency, toLocaleDateString} from '../utils/utilities'
import ahorro from './../assets/img/icono_salud.svg'


// const iconAhorro = React.lazy(()=>import ('../assets/img/icono_ahorro.svg'))

const Icon = (props) => {
    const { src } = './../assets/img/' + props + '.svg';

    return (
        <img src={src}  />
    );
};

// const Icon = (props) => {
//     const src = React.lazy(() => import('./../assets/img/' + props.src + '.svg'));
//     return (
//         <Suspense fallback={<p>loading...</p>}><img className="py-3 mr-3" width={32} height={32} src={console.log(src)} /></Suspense>
//     );
// };


// const Icon = props => {
//     const [image, setImage] = useState()

//     useEffect(() => {
//         import("./../assets/img/" + props.src + ".svg").then(setImage)
//     }, [props.src])
//     return image ? <img src={image} /> : 'Loading...'
// }
export const Expense = ({expense}) => {
    const {id, name, quantity, category, date} = expense
    return ( 
        <div className="bg-white my-2 p-4 w-full rounded-lg border overflow-hidden shadow-xl justify-start">
            <p className="font-semibold text-zinc-600 capitalize text-xs p-1">{toLocaleDateString(date)}</p>
            <div className="flex">
                <div className="flex-2 text-start">
                {/* <img className="py-3 mr-3" width={32} height={32}
                    //src={ahorro}
                    alt={"icon"}
                   src= {''}
                /> */}
                {
                    <Suspense>
                        {Icon("icono_salud")}
                    </Suspense>
                }

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
