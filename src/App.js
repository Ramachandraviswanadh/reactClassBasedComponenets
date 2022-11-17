import React from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';
import Count from './components/Count'
class App extends React.Component{
  render(){
    return (
      <div className="App">
        
        <ChildComponent/>
        <Count/>
      </div>
    );
  }
}



export default App;
