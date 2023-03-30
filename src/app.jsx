import { useContext } from 'react';
import { When } from 'react-if';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import HeaderComponent from './Components/Header';
import SettingsForm from './Components/Settings-Form'; 
import Todo from './Components/Todo';
import { AuthContext } from './Context/Auth';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <When condition={isLoggedIn}>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </When>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;