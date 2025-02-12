import React from 'react';
import { techIcons } from '../utils/icons'; // Importa os ícones

interface ModalProps {
    title: string;
    description: string;
    image: string;
    technologies?: string[];
    onClose: () => void;
    githubLinkFront?: string;
    githubLinkBack?: string;
    liveDemoLink?: string;
}

const Modal: React.FC<ModalProps> = ({
    title,
    description,
    image,
    technologies,
    onClose,
    githubLinkFront,
    githubLinkBack,
    liveDemoLink,
}) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800 transition"
                >
                    ✕
                </button>

                {/* Título e Descrição */}
                <h2 className="text-2xl font-semibold mb-4 flex justify-center text-gray-900">{title}</h2>
                <p className="mb-6 text-gray-700 flex justify-center text-center text-sm">{description}</p>

                {/* Imagem */}
                <img src={image} alt={title} className="w-full h-64 object-contain rounded-lg mb-6" />

                {/* Ícones das Tecnologias */}
                <div className="flex justify-center gap-4 text-xl text-gray-700">
                    {technologies?.map((tech, index) => (
                        <div key={index} className="flex items-center">
                            {techIcons[tech] || <span className="text-xs">{tech}</span>}
                        </div>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6 pt-6 justify-center">
                    {githubLinkFront && (
                        <a
                            href={githubLinkFront}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center bg-gray-100 text-gray-800 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition"
                        >
                            📂 Acessar GitHub Frontend
                        </a>
                    )}
                    {githubLinkBack && (
                        <a
                            href={githubLinkBack}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center bg-gray-200 text-gray-900 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition"
                        >
                            💻 Acessar GitHub Backend
                        </a>
                    )}
                    {liveDemoLink && (
                        <a
                            href={liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center bg-blue-100 text-blue-600 text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-200 transition"
                        >
                            🚀 Ver Aplicação Rodando
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
