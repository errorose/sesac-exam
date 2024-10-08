import React, { useState } from "react";

export default function Board(){
    const [posts, setPosts] = useState([]);
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [searchOption, setSearchOption] = useState('writer');
    const [searchText, setSearchText] = useState(''); // 검색 내용
    const [searchFilter, setSearchFilter] =  useState([]); // 검색 결과

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

    // 조건 검색    
    const handleSearch = ()=>{
        if(searchText.trim().length === 0) return;

        const filtered = posts.filter((post) => {
            if(searchOption === 'writer'){
                return post.writer.includes(searchText);
            }else if(searchOption === 'title'){
                return post.title.includes(searchText);
            }else{
                return false;
            }
        });
        setSearchFilter(filtered);
        setSearchText('');
    }

    // 전체 검색 
    const handleSearchAll = ()=>{
        setSearchFilter(posts)
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
                <select
                    value={searchOption}
                    onChange={(e) => {
                        setSearchOption(e.target.value);
                    }}    
                >
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input 
                    type="text" 
                    placeholder="검색어"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button onClick={handleSearch}>검색</button>
                <button onClick={handleSearchAll}>전체</button>
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
            <hr />
            <div>
                <p>검색결과</p>
                {searchFilter.length === 0 ? (<p>검색 결과가 없습니다...</p>) : (<div className="result">
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
                            searchFilter.map((post)=>{
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
            </div>)}
            </div>
        </>
    )
}