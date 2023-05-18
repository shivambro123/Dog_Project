
import './App.css';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import HomePage from './Component/HomePage';
import ContextApi from './Component/ContextApi';
import ContextComp from './Component/ContextComp';
import NavbarComponent from './Component/NavbarComponent';

function App() {
  return (
    <div className="App">
      <ContextComp>
      <Router>  
       <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Dog_Project/" element={<HomePage/>}/>
        </Routes>
      </Router>
      </ContextComp>
    </div>
  );
}

export default App;
