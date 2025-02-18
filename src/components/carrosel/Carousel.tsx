
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Ícones de navegação
import familia from '../../assets/image.png';
import comemoracao from '../../assets/comemoracao.png';
import rapel from '../../assets/rapel.png';
import casamento from '../../assets/casamento.png';
import treinamento from '../../assets/treinamento.png';
import petrobras from '../../assets/petrobras.png';
import dcg from '../../assets/dcg.png';
import blackfriday from '../../assets/blackFriday.png';
import agile from '../../assets/agile.png';
import apresentacao from '../../assets/apresentacao.png';
import timeEscola from '../../assets/timeEscola.png';
import comemorar from '../../assets/comemorar.png';
import sebrae from '../../assets/sebrae.png';
import ucs from '../../assets/escolaInovacaoUcs.png';
import mentor from '../../assets/mentor.png';
import { useState } from 'react';

const images = [
    {
        src: apresentacao,
        caption: 'Apresentando um projeto na Escola da Inovação, onde cada ideia trazia um aprendizado novo.',
    },

    {
        src: timeEscola,
        caption: 'Nosso time conquistou o segundo lugar no pitch de negócios da Escola da Inovação.',
    },
    {
        src: comemorar,
        caption: 'Celebrando o sucesso com amigos após o evento.',
    },
    {
        src: mentor,
        caption: 'Mentor do projeto de desenvolvimento profissional do movimento Agile Serra Gaucha, onde pude compartilhar conhecimento e experiência.',
    },
    {
        src: sebrae,
        caption: 'Participando de um evento inspirador do Sebrae, onde o empreendedorismo foi o centro das atenções.',
    },
    {
        src: ucs,
        caption: 'Um momento especial em um evento de inovação na Universidade de Caxias do Sul (UCS).',
    },
    {
        src: familia,
        caption: 'Reunido com a família para uma noite de Natal cheia de amor e memórias.',
    },
    {
        src: comemoracao,
        caption: 'Comemorando uma conquista importante com amigos que sempre apoiam.',
    },
    {
        src: rapel,
        caption: 'Aventura na natureza: uma das minhas atividades favoritas para recarregar as energias.',
    },
    {
        src: casamento,
        caption: 'Compartilhando a alegria de um casamento inesquecível com amigos queridos.',
    },
    {
        src: treinamento,
        caption: 'Treinamento de combate a incêndio com os novos bombeiros, transmitindo o que aprendi no Corpo de Bombeiros.',
    },
    {
        src: petrobras,
        caption: 'Dois anos de experiências valiosas no posto de refino da Petrobras durante meu tempo no Corpo de Bombeiros.',
    },
    {
        src: dcg,
        caption: 'Orgulhoso por fazer parte da Digital Commerce Grendene, onde tecnologia e inovação caminham juntas.',
    },
    {
        src: blackfriday,
        caption: 'Black Friday na Grendene: garantindo que a infraestrutura de TI estivesse pronta para um dos maiores eventos de vendas.',
    },
    {
        src: agile,
        caption: 'Palestrando sobre minha transição de carreira e a importância das metodologias ágeis no desenvolvimento.',
    },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setTimeout(() => setIsTransitioning(false), 500); // Duração da transição
        }
    };

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-16">
            {/* Contêiner da imagem com transição */}
            <div className="relative w-full max-w-[800px] mx-auto aspect-[16/9] overflow-hidden flex justify-center items-center rounded-lg shadow-md">
                <img
                    src={images[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                />
            </div>

            {/* Legenda da imagem */}
            <div className="bg-gray-800 bg-opacity-75 text-white text-center py-2 px-4 rounded-lg mt-4">
                <p className="text-lg">{images[currentIndex].caption}</p>
            </div>

            {/* Botões de navegação */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-3 transition-all"
            >
                <AiOutlineLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-3 transition-all"
            >
                <AiOutlineRight size={24} />
            </button>

            {/* Indicador de progresso */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
