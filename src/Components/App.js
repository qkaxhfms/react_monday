import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
// import Header from './Header';

class App extends React.Component {
  render(){
      return (
        <>
          <Router />
          <GlobalStyles />
        </>
      );
  }
}

export default App;
