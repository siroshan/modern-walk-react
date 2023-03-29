import './styles/app.scss';
import './styles/globals.scss';
import { NavBarTemplate } from './components/Templates/NavBarTemplate';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Templates/Pages/HomePage';
import { Categories } from './components/Templates/Pages/Categories';

function App() {
  return (
    <>
      <NavBarTemplate />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories/:cat' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
