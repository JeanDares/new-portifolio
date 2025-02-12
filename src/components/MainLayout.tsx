import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function MainLayout({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar fixa no topo */}
            <nav className="w-full fixed left-0 bg-white p-4 flex items-center justify-between z-50 h-16 md:h-20 px-8 lg:px-50">
                <h1 className="text-[18px] font-serif italic text-gray-dark pl-10">Jean Borges</h1>

                {/* Menu para desktop */}
                <ul className="hidden md:flex space-x-8 text-lg text-gray-500">
                    <li><Link to="/" className="text-gray-dark hover:text-black transition">Início</Link></li>
                    <li><Link to="/about" className="text-gray-dark hover:text-black transition">Sobre</Link></li>
                    <li><Link to="/professional" className="text-gray-dark hover:text-black transition">Profissional</Link></li>
                    <li><Link to="/projects" className="text-gray-dark hover:text-black transition">Projetos</Link></li>
                    <li><Link to="/experiences" className="text-gray-dark hover:text-black transition">Certificados</Link></li>
                    <li><Link to="/contact" className="text-gray-dark hover:text-black transition">Contato</Link></li>
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
            <div
                className={`fixed inset-0 bg-gray-100 z-40 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg text-gray-700">
                    <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black transition">Início</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-black transition">Sobre</Link></li>
                    <li><Link to="/professional" onClick={() => setMenuOpen(false)} className="hover:text-black transition">Profissional</Link></li>
                    <li><Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-black transition">Projetos</Link></li>
                    <li><Link to="/formation" onClick={() => setMenuOpen(false)} className="hover:text-black transition">Formação</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-black transition">Contato</Link></li>
                </ul>
            </div>

            {/* Conteúdo principal */}
            <main className="flex-grow justify-center">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
