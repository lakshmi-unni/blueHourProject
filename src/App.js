
import './App.css'
import Navcomponent from './Components/Navcomponent';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Userform from './Components/Userform';

function App() {
  return (
    <Router>
      <Navcomponent/>
      <main className='py-3'>
          <Routes>
              <Route path ='/' element={<Home/>} />
              <Route path='/adduser' element={<Userform/>} />

          </Routes>
      </main>
    </Router>
  );
}

export default App;
