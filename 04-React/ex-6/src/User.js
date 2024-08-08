import React, { useState } from 'react'

export default function User() {
    const [user, setUser] = useState([
        {
            id: 1,
            name: '코디',
            email: 'codi@gmail.com',
        },
        {
            id: 2,
            name: '쿠로미',
            email: 'kuromi@gmail.com',
        }
    ])

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    // 추가
    const addUser = ()=>{
        if(inputName.trim().length !== 0 && inputEmail.trim().length !== 0){
            const newUser = user.concat({
                id: user.length + 1,
                name: inputName,
                email: inputEmail,
            })
            setUser(newUser);
            setInputName('');
            setInputEmail('');
        }
    }

    // 키보드 이벤트
    const handleKeyDown = (e)=>{
        console.log('keyDown e >> ', e);

        if(e.keyCode === 13){
            addUser();
        }
    }

    // 더블클릭시 삭제
    const deleteUser = (targetId)=>{
        console.log('targetId >> ', targetId);

        const newUser = user.filter((user)=>{
            return user.id !== targetId;
        })
        console.log('newUser >> ', newUser);
        setUser(newUser);
    }

    return(
        <>
            <input 
                type='text' 
                placeholder='이름' 
                value={inputName}
                onChange={(e)=>{
                    setInputName(e.target.value);
                }}
            />
            <input 
                type='email' 
                placeholder='이메일' 
                value={inputEmail}
                onChange={(e)=>{
                    setInputEmail(e.target.value);
                }}
                onKeyDown={(e)=>{
                    handleKeyDown(e);
                }}
            />
            <button onClick={addUser}>등록</button>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {user.map((value)=>{
                        return (
                            <li 
                                key={value.id}
                                onDoubleClick={()=>{
                                    deleteUser(value.id);
                                }}
                            >
                                {value.name}: {value.email}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
