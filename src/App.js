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
import {useCookies} from 'react-cookie';
import Cart from "./pages/Cart";
import Order from './pages/Order';
import Thanks from './Components/Thanks';

function App() {
  const [cookies] = useCookies({});
  const {user} = cookies;
  return (
     <Router>  
    <Switch>
        {user && <Route path="/sign" component={UserPanel}/>}
        <Route path="/sign" exact component={Sign} /> 
        <Route path="/categories/:id" component={Books}/>
        <Route path="/books/:id" component={SingleBook}/>
        <Route path="/books" component={Books}/>
        <Route path="/registration" component={Registration}/>
        {user && <Route path="/userpanel" component={UserPanel}/>}
        <Route path="/cart" component={Cart}/>
        <Route path="/" component={Front}/>
    </Switch>
   </Router>

  );
}

export default App;
