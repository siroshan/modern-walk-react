import './styles/app.scss';
import './styles/globals.scss';
import { NavBar } from './components/Organisms/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Templates/Pages/Home';
import { Categories } from './components/Templates/Pages/Categories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:cat' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
