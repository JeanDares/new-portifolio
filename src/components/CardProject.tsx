import React from 'react';
import { techIcons } from '../utils/icons'; // Importe os ícones

interface CardProjectProps {
    image: string;
    title: string;
    technologies: string[];
    type?: 'Frontend' | 'Backend' | 'Fullstack'; // Agora é opcional
}

const typeColors: { [key: string]: string } = {
    Frontend: "bg-gray-100 text-gray-700 border border-gray-300",
    Backend: "bg-gray-100 text-gray-700 border border-gray-300",
    Fullstack: "bg-gray-100 text-gray-700 border border-gray-300",
};

const CardProject: React.FC<CardProjectProps> = ({ image, title, technologies, type }) => {
    return (
        <div className="relative rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-gray-200 p-3 
                        hover:shadow-lg hover:border-gray-300 hover:scale-[1.02]">

            {/* Flag indicando o tipo do projeto (Agora com cores neutras) */}
            {type && (
                <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-md ${typeColors[type]}`}>
                    {type}
                </div>
            )}

            {/* Container da imagem */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-md">
                <img
                    src={image}
                    alt={title}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Conteúdo do card */}
            <div className="p-4">
                <h2 className="text-[12px] font-semibold text-gray-800 mb-2">{title}</h2>
                <div className="flex gap-2 flex-wrap">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex items-center text-gray-600 text-lg">
                            {techIcons[tech] || <span className="text-xs">{tech}</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardProject;
