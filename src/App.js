import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {/*Header */}
      <Router>
        {!user ? (
          <Login/>
        ): (

          //Fragment
          <>

          <Header/>
         <div className="app__body">

      {/*Sidebar */}
      <Sidebar/>
      <Switch>
        <Route path = "/room/:roomId">
          <Chat/>
        </Route>
        <Route path = "/">
          <h1>Welcome</h1>
        </Route>
      </Switch>
      {/*React Router -> Chat Screen */}
         </div>
      </>
      )}
      </Router>
    </div>
  );
}

export default App;
