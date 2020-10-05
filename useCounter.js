import { useState } from 'react';


export const useCounter = ( initialState = '01001' ) => {

    const [ counter, setCounter ] = useState(initialState);

    const increment = () => {
        const toNum = parseInt(counter) +  1;
        const toStr = ('0' + toNum).slice(-5);
        setCounter( toStr );
    };

    const decrement = () => {
        const toNum = parseInt(counter) -  1;
        const toStr = ('0' + toNum).slice(-5);
        setCounter( toStr );
    };

    const reset = () => setCounter( initialState );

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}
