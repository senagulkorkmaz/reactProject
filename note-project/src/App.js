import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Navi from "./layouts/NaviLayout/Navi";
import { Container } from 'semantic-ui-react'
import Login from "./layouts/Login"

function App() {
  return (
    <div className="App">
       <div className="App">
      <Navi />
      <Container className="main">
      </Container>
       <Login/>
    </div>
    </div>
  );
}

export default App;
