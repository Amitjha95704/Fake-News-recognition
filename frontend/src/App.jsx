import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VerifyPage from './pages/VerifyPage';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        {/* Deep background glows for premium look */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<VerifyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;