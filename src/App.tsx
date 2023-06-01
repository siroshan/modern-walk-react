import './styles/globals.css';
import { NavBarTemplate } from './ui-core/templates/NavBarTemplate';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './ui-core/pages/HomePage';
import { CategortPage } from './ui-core/pages/CategoryPage';
import { SignUpPage } from './ui-core/pages/SignUpPage';
import { SignInPage } from './ui-core/pages/SignInPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <NavBarTemplate />
              <HomePage />
            </>
          }
        />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route
          path='/categories/:cat'
          element={
            <>
              <NavBarTemplate />
              <CategortPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
