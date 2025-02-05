import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Navbar lateral */}
      <nav className="w-64 bg-blue-500 text-white h-screen flex flex-col items-start p-6 fixed">
        <h1 className="text-2xl font-bold mb-8">Jean Borges</h1>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
              <AiOutlineHome size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 hover:text-gray-300">
              <AiOutlineUser size={20} /> Sobre
            </Link>
          </li>
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <div className="ml-64 p-10 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
