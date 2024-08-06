import './App.css';
import Book from './Book';
import Food from './Food';
import Text from './Text';

function App() {
  return (
    <div className="App">
      <Food food="초밥"/>
      <Food />
      <hr />

      <Book 
        title="곰돌이 푸, 행복한 일은 매일 있어" 
        author="곰돌이 푸"
        price="13,320"
        type="캐릭터에세이"
      />
      <hr />

      <Text text="text props" valid="콘솔 띄우기 성공!"/>
    </div>
  );
}

export default App;
