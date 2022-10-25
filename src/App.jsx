import './App.css';
import MenuBar from './components/MenuBar';
import { Outlet } from 'react-router-dom';
import NotesContextProvider from './contexts/NotesContext';

function App() {
  return (
    <div className="App">
      <NotesContextProvider>
        <MenuBar />
        <Outlet />
      </NotesContextProvider>
    </div>
  );
}

export default App;
