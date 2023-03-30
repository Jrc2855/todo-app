import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import HeaderComponent from './Components/Header';
import SettingsForm from './Components/Settings-Form';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}