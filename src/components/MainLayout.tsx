import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function MainLayout({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar fixa no topo */}
            <nav className="w-full fixed  left-0 bg-white  p-4 flex items-center justify-between z-50 h-16 md:h-20 px-8 lg:px-50">
                <h1 className="text-[18px] font-serif italic text-gray-dark pl-10"> Jean Borges</h1>

                {/* Menu para desktop */}
                <ul className="hidden md:flex space-x-8 text-lg text-gray-500">
                    <li><Link to="/" className="text-gray-dark hover:text-black transition">Home</Link></li>
                    <li><Link to="/about" className="text-gray-dark hover:text-black transition">Me</Link></li>
                    <li><Link to="/projects" className="text-gray-dark hover:text-black transition">Projects</Link></li>
                    <li><Link to="/formation" className="text-gray-dark hover:text-black transition">Training</Link></li>
                    <li><Link to="/contact" className="text-gray-dark hover:text-black transition">Contact</Link></li>
                </ul>

                {/* Botão de menu mobile */}
                <button
                    className="md:hidden text-gray-dark text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </nav>

            {/* Menu mobile */}
            {menuOpen && (
                <ul className="flex flex-col items-center mt-16 space-y-4 bg-gray-light p-4 md:hidden">
                    <li><Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-dark hover:text-black transition">Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-dark hover:text-black transition">Quem sou eu</Link></li>
                    <li><Link to="/projects" onClick={() => setMenuOpen(false)} className="text-gray-dark hover:text-black transition">Projetos</Link></li>
                    <li><Link to="/formation" onClick={() => setMenuOpen(false)} className="text-gray-dark hover:text-black transition">Formação</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-dark hover:text-black transition">Contato</Link></li>
                </ul>
            )}

            {/* Conteúdo principal sem scroll */}
            <main className="flex-grow  justify-center">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
