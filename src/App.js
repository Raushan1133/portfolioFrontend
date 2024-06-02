import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css';
import './index.css';
import '../src/Styles/HomeStyle.css'
import Home from './Pages/Home/Home';
import Skills from './Pages/Home/Skills';


function App() {

  return (
    <>
     <Router>
    <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/skills' element={<Skills/>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
