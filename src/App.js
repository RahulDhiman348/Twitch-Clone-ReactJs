import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
    <Header />
    <div className="app-main">
    <Sidebar />
    <Body />
    </div>
    </div>
  );
}

export default App;
