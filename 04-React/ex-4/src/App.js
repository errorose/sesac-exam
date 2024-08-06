import './App.css';
import ChangeColor from './components/ex/ChangeColor';
import HandlerEx from './components/ex/HandlerEx';
import Hidden from './components/ex/Hidden';

function App() {
  return (
    <div className="App">
      <HandlerEx />
      <hr />

      <ChangeColor />
      <hr />

      <Hidden />
    </div>
  );
}

export default App;
