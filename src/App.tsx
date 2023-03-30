import './styles/app.scss';
import './styles/globals.scss';
import { NavBarTemplate } from './components/Templates/NavBarTemplate';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Templates/Pages/HomePage';
import { CategortPage } from './components/Templates/Pages/CategoryPage';
import { SignUpPage } from './components/Templates/Pages/SignUpPage';

function App() {
  return (
    <>
      <NavBarTemplate />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/categories/:cat' element={<CategortPage />} />
      </Routes>
    </>
  );
}

export default App;
