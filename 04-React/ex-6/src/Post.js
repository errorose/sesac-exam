import React, { useState } from "react";

export default function Board(){
    const [posts, setPosts] = useState([]);

    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');

    // 작성글 추가
    const addPost = (e)=>{
        e.preventDefault();

        if(writer.trim().length === 0 || title.trim().length === 0){
            return;  
        } 

        const newPosts = posts.concat({
            id: posts.length + 1,
            writer,
            title,
        })
        setPosts(newPosts);
        setWriter('');
        setTitle('');
    }
    
    return(
        <>
            <form className="write">
                작성자: 
                <input 
                    type="text" 
                    value={writer}
                    onChange={(e)=>{
                        setWriter(e.target.value);
                    }}
                />
                제목: 
                <input 
                    type="text" 
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                />
                <button onClick={addPost}>작성</button>
            </form>
            <div className="search">
                <select>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input type="text" placeholder="검색어"/>
                <button>검색</button>
            </div>
            <div className="result">
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>작성자</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post)=>{
                                return(
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.writer}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}