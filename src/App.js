import logo from './logo.svg';
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => {
          var xhr = new XMLHttpRequest()

          xhr.addEventListener('load', () => {
            alert(xhr.responseText)
            console.log(xhr.responseText)
          })
          xhr.withCredentials = true;
          xhr.open('GET', 'http://localhost:8090/')
          xhr.send()
        }}>SEND REQUEST</button>
        <button onClick={() => {
          document.cookie = 'first_name=seth'
        }}>STORE COOKIE</button>
      </header>
    </div>
  );
}

export default App;
