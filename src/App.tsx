import './styles/app.scss';
import './styles/globals.scss';
import { NavBar } from './components/Organisms/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Templates/Home';
import Categories from './components/Templates/Categories/Categories.component';

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
