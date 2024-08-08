import React, { useState } from 'react';

export default function Cat(){
    const [cat, setCat] = useState('cat3.png');
    const [bgColor, setBgColor] = useState('black');
    const [color, setColor] = useState('white');
    const [text, setText] = useState('');

    const typing = (e)=>{
        // console.log(e.target.value);
        setText(e.target.value);
    }

    const catChange = (e)=>{
        // console.log(e.target.value);
        setCat(e.target.value);
    }

    const bgColorChange = (e)=>{
        setBgColor(e.target.value);
    }

    const colorChange = (e)=>{
        setColor(e.target.value);
    }

    return(
        <>
            <div>
                고양이:
                <select onChange={catChange}>
                    <option value="cat3.png">고양이1</option>    
                    <option value="cat2.png">고양이2</option>    
                    <option value="cat1.png">고양이3</option>    
                </select> 
                배경색:
                <select onChange={bgColorChange}>
                    <option value="black">검정</option>
                    <option value="pink">분홍</option>
                    <option value="skyblue">하늘</option>
                </select>
                글자색:
                <select onChange={colorChange}>
                    <option value="white">하양</option>
                    <option value="black">검정</option>
                    <option value="red">빨강</option>
                </select>
            </div>
            <div>
                내용: <input type='text' onChange={typing}></input>
            </div>
            <div>
                <img src={cat} alt='고양이' width={200} height={200}></img>
            </div>
            <div style={{backgroundColor: bgColor, color: color}}>
                {text}
            </div>
        </>
    )
}