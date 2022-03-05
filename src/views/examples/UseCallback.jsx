import React, { useCallback } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {

    const [count, setCount] = useState(0);

    const inc = useCallback(function inc(delta) {
        setCount(current => current + delta);
    },[setCount]);


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text red">{count}</span>
                <UseCallbackButtons inc={inc}/> 
            </div>
        </div>
    )
}

export default UseCallback;
