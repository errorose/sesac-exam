import { useSelector, useDispatch } from "react-redux";

function App() {
  const money = useSelector((state) => state.money);
  console.log('money >> ', money); // {money: 0}
  
  return (
    <div className="App">
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money.money} 원</h2>
      <input 
          type="number"
          onChange={(e) => e.target.value} 
      />
      <button>입금</button>
      <button>출금</button>
    </div>
  );
}

export default App;
