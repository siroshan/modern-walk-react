import './styles/app.scss';
import './styles/globals.scss';
import { NavBar } from './components/Organisms/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Templates/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
