import { useEffect, useState } from "react";
import calTime from "./helper";

function History({history,fetch,data,clear,ham,setHam}){
    const [temp,setTemp] = useState(0)
    
    

    var currentTime = new Date().getTime()
    console.log(currentTime);

    function addToFetch(city){
        fetch(city)
    }
    
    
    return (
    <div className={`shadow-md fixed md:static p-2 md:translate-[0] ${ham == true ? "translate-x-[0]" : "translate-x-[-120%]"} bg-yellow-100 duration-200 sm:translate-x-0`} 
    
    >
        <span className="font-bold md:hidden" onClick={() => setHam(false)}>X</span>
        <h2 className="font-bold text-3xl text-center">History</h2>
        <hr className="font-bold text-3xl p-2 m-2"/>
        <ul>
            {
                history.map(
                    (d,i) => {
                        return (
                            <>
                            <li className="px-2 py-1 flex justify-between text-xl" style={{cursor : "pointer"}} onClick={() => {addToFetch(d.name);setHam(false)}} key={i}>
                                <span className="self-start">{d.name}</span> 
                                <span className="self-end text-gray-400 text-sm">
                                ({calTime(currentTime-d.timestamp)})
                                </span>
                            </li>
                            <hr />
                            </>
                        )
                    }
                )
            }
        </ul>
        <button onClick={() => clear()}  className="rounded-md text-xl py-2 px-4 bg-blue-900 mt-12 text-white mx-auto block">Clear history</button>

    </div>)
}
export default History;