import React, {useState} from 'react';

const ChangeColor = ()=>{
    const [text, setText] = useState('검정색');
    const [color, setColor] = useState('black');

    const redText = ()=>{
        setText('빨간색')
        setColor('red')
    }

    const blueText = ()=>{
        setText('파란색')
        setColor('blue')
    }

    return(
        <>
            <h1 style={{color: color}}>{text} 글씨</h1>
            <button onClick={redText}>빨간색</button>
            <button onClick={blueText}>파란색</button>
        </>
    )
}

export default ChangeColor;