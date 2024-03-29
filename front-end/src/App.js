import { Alimente } from './pages/Alimente';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="app-title">No Waste App</div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/alimente" element={<Alimente/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;