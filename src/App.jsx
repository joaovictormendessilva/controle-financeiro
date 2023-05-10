// Global CSS
import './global.css'

// Components
import { Header } from './components/Header/Header';
// Pages
import { Dashboard } from './pages/Dashboard/Dashboard';

export function App(){
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};