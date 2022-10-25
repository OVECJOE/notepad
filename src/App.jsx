import './App.css';
import MenuBar from './components/MenuBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Outlet />
    </div>
  );
}

export default App;
