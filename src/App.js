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
import Orders from './pages/Orders';
import Thanks from './Components/Thanks';
import SingleOrder from "./pages/SingleOrder"

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
        <Route path="/orders/:id" component={SingleOrder}/>
        <Route path="/books" component={Books}/>
        <Route path="/registration" component={Registration}/>
        {user && <Route path="/userpanel" component={UserPanel}/>}
        <Route path="/cart" component={Cart}/>
        <Route path="/thank" component={Thanks}/>
        {user && <Route path="/orders" component={Orders}/>}
        <Route path="/" component={Front}/>
    </Switch>
   </Router>

  );
}

export default App;
