import './Book.css';
import bookImg from './book.jpg';

const Book = (props)=>{
    console.log('Book props >> ', props);
    
    const title = props.title;
    const author = props.author;
    const price = props.price;
    const type = props.type;

    return(
        <div className="bg">
            <h1 className="title">이번주 베스트셀러</h1>
            <img className="book-img" src={bookImg} alt="책 이미지"/>
            <div>
                <h2>{title}</h2>
                <p>저자: {author}</p>
                <p>판매가: {price}원</p>
                <p>구분: {type}</p>
            </div>
        </div>

    )
}

export default Book;