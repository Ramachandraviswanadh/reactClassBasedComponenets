import React from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        hi
        <ChildComponent/>
      </div>
    );
  }
}



export default App;
