import React, { useState } from 'react'

export default function User() {
    const [user, setUser] = useState([
        {
            id: 1,
            name: '코디',
            email: 'codi@gmail.com',
        }
    ]);

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState(''); 

    const addUser = ()=>{
        const newUser = user.concat({
            id: user.length + 1,
            name: inputName,
            email: inputEmail,
        })
        setUser(newUser);
    }

  return (
    <div>
        <input 
            type="text" 
            placeholder='이름'
            value={inputName}
            onChange={(e)=>{
                setInputName(e.target.value);
            }}
            />
        <input 
            type="email" 
            placeholder='이메일'
            value={inputEmail}
            onChange={(e)=>{
                setInputEmail(e.target.value);
            }}
            />
        <button onClick={addUser}>등록</button>

        <h2>
            {user.map((user)=>{
                return <li key={user.id}>{user.name} : {user.email}</li>
            })}
        </h2>
    </div>
  )
}
