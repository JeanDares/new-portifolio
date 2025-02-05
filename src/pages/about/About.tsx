
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="p-30">
            <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
            <p className="text-lg mb-4">
                Sou Jean Borges, desenvolvedor fullstack com foco em React e Node.js. Apaixonado por criar aplicações funcionais e bem estruturadas.
            </p>
            <p className="text-lg mb-4">Aqui você encontrará informações sobre minha trajetória profissional, experiências e projetos.</p>

            {/* Link para a subpágina de fotos */}
            <Link to="/about/photos" className="text-blue-500 hover:underline">
                Ver minhas fotos
            </Link>
        </div>
    );
}

export default About;
