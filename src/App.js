
import { CssBaseline } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Outlet />
    </div>
  );
}

export default App;
