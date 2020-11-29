import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <h1>Let's build the Slack Clone</h1>
      {/*Header */}

      <Header/>
      {/*Sidebar */}
      <Sidebar/>

      {/*React Router -> Chat Screen */}
    </div>
  );
}

export default App;
