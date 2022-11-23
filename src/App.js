import logo from './logo.svg';
import './App.css';

function App() {

  const namesArray = ["Alice","Bob","Charlie"]
  const int = Math.floor(Math.random() * 3)

  const returnNumber = ()=>{
    const numArray = [1,2,3]
    const result = Math.floor(Math.random()*3)
    return numArray[result]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
          <p>Hello {namesArray[int]}</p>
          <p>Hi {returnNumber()}</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
