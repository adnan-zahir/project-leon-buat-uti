import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import LastPage from './pages/LastPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maaf lama yaa, selamat lebaran utiii</h1>
      </header>
      <main>
        <div className="form-container">
          <Router>
            <Route path="/" exact component={Login} />
            <Route path="/1" component={Question1} />
            <Route path="/2" component={Question2} />
            <Route path="/3" component={LastPage} />
          </Router>
        </div>
        <div id="alertBox"></div>
      </main>
    </div>
  );
}

export default App;
