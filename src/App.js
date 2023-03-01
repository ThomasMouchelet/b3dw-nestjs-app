import logo from './logo.svg';
import './App.css';

function App() {
  const handleSignup = async () => {
    const randomEmail = Math.random().toString(36).substring(7);
    console.log(randomEmail);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${randomEmail}@gmail.com`,
        password: "password"
      })
    })
    const data = await response.json()
    console.log("response signup", data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={handleSignup}
        >
          Signup
        </button>
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
