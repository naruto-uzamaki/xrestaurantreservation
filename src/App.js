
import { CssBaseline } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router';
import DownloadApp from './components/Sections/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
