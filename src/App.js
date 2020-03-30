import React,{Component} from 'react';
import Login from './component/Login/Login'
import './App.css'
import Users from './component/Users/Users'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component{
  render(){
  return (
    <Router>
    
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/users" component={Users} />
    </div>
    
    </Router>
  );
}
}

export default App;
