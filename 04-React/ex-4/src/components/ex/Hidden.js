import React, {useState} from 'react';

const Hidden = ()=>{
    const [btn, setBtn] = useState('사라져라');
    const [text, setText] = useState('안녕하세요');

    const toggleFunction = ()=>{
        if(btn === '사라져라'){
            setBtn('보여라');
            setText('');
        }else{
            setBtn('사라져라');
            setText('안녕하세요');
        }
    }

    return(
        <>
            <button onClick={toggleFunction}>{btn}</button>
            <h1>{text}</h1>
        </>
    )
}

export default Hidden;