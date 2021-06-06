import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Pages from './components/pages/Pages';
import Navbar from './components/pages/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Pages />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
