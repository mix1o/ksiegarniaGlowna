import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleBook from './pages/SingleBook';
import Books from './pages/Books';
import Front from "./pages/Front";
import Sign from "./pages/Sign";
import Registration from "./pages/Registration"
import UserPanel from './pages/UserPanel';
import Category from './pages/Category';
import {useCookies} from 'react-cookie';


function App() {
  const [cookies] = useCookies({});
  const {user} = cookies;
  return (
     <Router>  
    <Switch>
        <Route path="/sign" exact component={Sign} /> 
        <Route path="/categories/:id" component={Category}/>
        <Route path="/books/:id" component={SingleBook}/>
        <Route path="/books" component={Books}/>
        <Route path="/registration" component={Registration}/>
        {user && <Route path="/userpanel" component={UserPanel}/>}
        <Route path="/" component={Front}/>
    </Switch>
   </Router>

  );
}

export default App;
