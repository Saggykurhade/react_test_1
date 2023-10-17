import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import UseReducer from './components/UseReducer';
import Todos from './components/Todos';
import Register from './components/Register';
import UseMemo from './components/UseMemo';
// import GlobalContext from './components/Context/GlobalContext';

function App() {
  return (
    <Routes>
      <Route path='' element={<Homepage />} />
      <Route exact path='/UseMemo' element={<UseMemo />} />
      <Route exact path='/Todos' element={<Todos />} />
      <Route exact path='/UseReducer' element={<UseReducer />} />
      <Route exact path='/Register' element={<Register />} />
      {/* <Route exact path='/GlobalContext' element={<GlobalContext />} /> */}
    </Routes>
  );
}

export default App;
