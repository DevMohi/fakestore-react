import React, { useState } from 'react';

const Test = (props) => {
    
    const [count,setCount] = useState(0);

    const minus = () =>{
        if(count>0){
            setCount(count-1);
        }
    }
    
    const plus = () =>{
        setCount(count+1);
    }

    console.log(count)

    return (
        <div>

            <div className="count mt-5">
                <h1>{count}</h1>
                <button onClick={plus} className='ms-3 p-3'>+</button>
                <button onClick={minus} className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;