import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllStudent from './components/AllStudent';
import UpdateStudent from './components/UpdateStudent';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />       
        
        <Routes>
          <Route path="/add" exact Component={AddStudent} />
        </Routes>

        <Routes>
          <Route path='/update/:id' exact Component={UpdateStudent} />
        </Routes>

        <Routes>
          <Route path="/" exact Component={AllStudent} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
