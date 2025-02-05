import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

function Home() {
    return (
        <div className="bg-gray-100 relative min-h-screen md:h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-4">
            {/* Card minimalista */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-4">
                    Bem-vindo ao meu portfólio
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                    Inspirado em modelos minimalistas, este portfólio busca destacar o essencial: projetos,
                    experiências e minha trajetória. Obrigado por dedicar seu tempo para explorá-lo. Espero que encontre algo inspirador.
                </p>
            </div>

            {/* Redes sociais no canto inferior esquerdo */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex space-x-4">
                <a
                    href="https://www.instagram.com/borges_jean/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-2xl hover:text-gray-800 transition"
                >
                    <AiOutlineInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/jean-borges-9a0b201b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-2xl hover:text-gray-800 transition"
                >
                    <AiOutlineLinkedin />
                </a>
                <a
                    href="https://github.com/JeanDares"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-2xl hover:text-gray-800 transition"
                >
                    <AiOutlineGithub />
                </a>
            </div>

            {/* Citação no canto inferior direito */}
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-right">
                <blockquote className="text-sm sm:text-base md:text-lg font-serif italic text-gray-700 leading-relaxed">
                    "Conheça todas as teorias, <br />
                    domine todas as técnicas, <br />
                    mas ao tocar uma alma humana, <br />
                    seja outra alma humana."
                    <footer className="mt-2 text-xs sm:text-sm md:text-base text-gray-500">
                        — Carl G. Jung
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}

export default Home;
