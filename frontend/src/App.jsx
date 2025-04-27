// client/src/App.jsx
import { CssBaseline, ThemeProvider,  } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#6366f1',
//     },
//     secondary: {
//       main: '#ec4899',
//     },
//     background: {
//       default: '#0f172a',
//       paper: '#1e293b',
//     },
//   },
//   typography: {
//     fontFamily: "'Poppins', sans-serif",
//   },
// });

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <div className="app">
        <Sidebar />
          <main className="content">
            <Topbar /> 
            <Routes>

            <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;