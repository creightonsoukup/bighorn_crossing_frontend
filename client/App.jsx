import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

export default class App extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
