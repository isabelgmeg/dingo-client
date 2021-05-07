import { Route, Switch } from 'react-router-dom';
import Register from './components/RegisterForm/Register'


import './App.css';


function App() {
  return (
    <div className="App">
      <p>
        hola
      </p>
      <Route path="/register">
      <Register/>
      </Route>
    </div>
  );
}

export default App;
