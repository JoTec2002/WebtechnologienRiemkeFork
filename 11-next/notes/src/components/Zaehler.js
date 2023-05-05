import { useState } from 'react';

export default function Zaehler(){
    const [count, setCount] = useState(0);
    const add = (anzahl) =>{
        setCount(count + anzahl);
    }
return(
    <div>
        <h1> Anzahl</h1>
        <div>{count}</div>
        <button onClick={()=>add(1)}>mehr</button>
        <button onClick={()=>add(-1)}>weniger</button>
    </div>
 )
}