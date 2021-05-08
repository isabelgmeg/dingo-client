import { Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm'


import './App.css';


function App() {
  return (
    <div className="App">
      <p>
        hola
      </p>
      <Route path="/register">
      <RegisterForm/>
      </Route>
    </div>
  );
}

export default App;
