import './App.css';

function App() {
  const name = '쿠로미';
  const animal = '고양이';
  const underlineStyle = {textDecoration: 'underline'};
  const a = 5;
  const b = 2;
  const title = 'Hello World';

  return (
    <div className="App">
      <h1>[JSX 실습]</h1>
      <h2>
        제 반려 동물의 이름은 <span style={underlineStyle}>{name}</span>입니다.<br />
        <span style={underlineStyle}>{name}</span>는 <span style={underlineStyle}>{animal}</span>입니다.
      </h2>
      <h2>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!' }</h2>
      <h2>{a > b && <span>a가 b보다 큽니다</span>}</h2>
      <div>
        <h2 className='title'>{title}</h2>
        <div>
          <label htmlFor="id">아이디: </label>
          <input type="text" id="id" />
        </div>
        <br />
        <div>
          <label htmlFor="pw">비밀번호: </label>
          <input type="text" id="pw" />
        </div>
      </div>
    </div>
  );
}

export default App;
