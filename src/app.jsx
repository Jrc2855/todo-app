import React from 'react';
import Footer from './Components/Footer';
import HeaderComponent from './Components/Header';

import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <>

      <HeaderComponent />
      <Todo />
      <Footer />
      </>
    );
  }
}