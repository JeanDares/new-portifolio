

function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-black px-8 lg:px-50">
            {/* Texto principal centralizado */}
            <main className="flex-grow flex items-center">
                <div className="space-y-6 max-w-4xl">
                    <p className="text-2xl sm:text-4xl  font-serif leading-tight text-gray-700">
                        Inspirado em modelos minimalistas, <br />
                        este portfólio busca destacar o essencial: <br /> <br />
                        projetos, <br />
                        experiências,  <br />
                        e minha trajetória. <br /> <br />
                        Obrigado por
                        dedicar seu tempo para explorá-lo. Espero que goste...
                    </p>

                </div>
            </main>

            {/* Rodapé com redes sociais em texto */}
            <footer className="flex justify-between items-center py-4">
                <div className="space-x-6 text-gray-400 text-sm md:text-base">
                    <a href="https://www.instagram.com/borges_jean/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/jean-borges-9a0b201b5/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        Linkedin
                    </a>
                    <a href="https://github.com/JeanDares" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        Github
                    </a>
                    <a href="mailto:jeanborgesdares@gmail.com" className="hover:text-black">Mail</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
