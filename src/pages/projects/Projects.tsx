
import CardProject from '../../components/CardProject';
import Modal from '../../components/Modal';

import bookmatch from '../../assets/bookmatch.png';
import calculadora from '../../assets/calculadora.png';
import forms from '../../assets/forms.png';
import logidados from '../../assets/logidados.png';
import autenticacao from '../../assets/autenticacao.png';
import uploadImage from '../../assets/uploadImage.png';
import solid1 from '../../assets/solid1.png';
import { useState } from 'react';

// Definindo o tipo dos projetos
interface Project {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    githubLinkfront?: string;
    githublinkback?: string;
    liveDemoLink?: string;
    type?: 'Frontend' | 'Backend' | 'Fullstack'; // CORRETO
}


const projects: Project[] = [
    {
        "image": autenticacao,
        "title": "Projeto Back - Sistema Autenticador de Usuários",
        "description": "Um sistema de autenticação de usuários desenvolvido com Node.js e PostgreSQL. Permite o cadastro de novos usuários, login e logout, além de verificar a autenticidade das credenciais. As senhas são criptografadas antes de serem armazenadas no banco de dados.",
        "technologies": ["Node.js", "PostgreSQL"],
        "githublinkback": "https://github.com/JeanDares/bkn_auth/tree/main",
        "type": "Backend",
    },
    {
        image: solid1,
        title: "API SOLID - Arquitetura Limpa e Escalável em Node.js",
        description: "Uma API desenvolvida com Node.js, seguindo os princípios SOLID para garantir um código modular, reutilizável e de fácil manutenção. O projeto implementa Inversão de Dependência, Segregação de Interfaces e Responsabilidade Única, organizando as responsabilidades entre casos de uso, repositórios, provedores e controladores.",
        technologies: ["Node.js", "PostgreSQL",],
        githublinkback: "https://github.com/JeanDares/princ-pios_solid_api_rest/tree/main",
        type: "Backend", // Aqui indicamos o tipo do projeto
    },
    {
        image: bookmatch,
        title: "BookMatch - Recomendações Inteligentes de Livros",
        description: "Uma plataforma que sugere livros personalizados com base nos gostos do usuário. Utiliza a API do Google Books para obter dados detalhados das obras.",
        technologies: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "google"],
        githubLinkfront: "https://github.com/JeanDares/frn_bookMatch-",
        githublinkback: "https://github.com/JeanDares/bkn_bookMatch",
        liveDemoLink: "https://frn-book-match.vercel.app/",
        type: "Fullstack", // Aqui indicamos o tipo do projeto
    },
    {
        "image": forms,
        "title": "Formulários Dinâmicos - React e Nest.js",
        "description": "Um sistema completo para criação e gerenciamento de formulários personalizados. Desenvolvido com React no frontend e Nest.js no backend, permite adicionar, editar e remover campos dinamicamente. As respostas dos formulários são armazenadas no backend, hospedado no Render, enquanto o frontend está disponível na Vercel.",
        "technologies": ["React.js", "Node.js", "PostgreSQL"],
        "githubLinkfront": "https://github.com/JeanDares/frontAgencia",
        "githublinkback": "https://github.com/JeanDares/apiAgencia",
        "type": "Fullstack",
        "liveDemoLink": "https://front-agencia.vercel.app/"
    },
    {
        "image": uploadImage,
        "title": "Upload de Imagens - Armazenamento em Memória",
        "description": "Projeto simples para upload, armazenamento e manipulação de imagens. Utiliza Multer com MemoryStorage no backend, permitindo testar diferentes opções de upload e armazenar as imagens em um banco PostgreSQL.",
        "technologies": ["Node.js", "PostgreSQL", "Docker"],
        "githublinkback": "https://github.com/JeanDares/bkn-uploadImg",
        "githubLinkfront": "https://github.com/JeanDares/frn-uploadimg",
        "liveDemoLink": "https://frn-uploadimg.onrender.com/",
        "type": "Fullstack",
    },
    {
        "image": logidados,
        "title": "LogiDados - Apresentação da Plataforma ERP",
        "description": "Um site institucional desenvolvido para a empresa LogiDados, apresentando sua solução ERP de forma clara e profissional. Construído como um site estático em React, o projeto destaca os principais recursos da plataforma e seus benefícios para a gestão empresarial.",
        "technologies": ["Angular", "HTML"],
        "githubLinkfront": "https://github.com/JeanDares/logidados",
        "liveDemoLink": "https://site.logidados.com.br/",
        "type": "Frontend",
    },




    {
        "image": calculadora,
        "title": "Calculadora Simples - Primeiros Passos com Angular",
        "description": "Uma calculadora básica desenvolvida como um projeto introdutório ao Angular. Com uma interface intuitiva, permite realizar operações matemáticas simples, como soma, subtração, multiplicação e divisão.",
        "technologies": ["Angular"],
        "githubLinkfront": "https://github.com/JeanDares/calculadora_angular",
        "type": "Frontend",
        "liveDemoLink": "https://calculadora-angular-jet.vercel.app/"
    },
];


function ProfessionalProjects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-white py-24 px-8 lg:px-50">

            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-800 leading-tight mb-10 ">
                <br />
                <span className="text-2xl md:text-3xl text-gray-500">Alguns projetos</span>
            </h1>


            {/* Introdução */}
            <section className=' mb-10'>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed text-start">
                    Ao longo da minha trajetória como desenvolvedor, busco constantemente aprimorar meus métodos e escrever códigos mais eficientes, organizados e escaláveis.
                    Cada projeto reflete essa evolução, desde a estruturação da arquitetura até a otimização do desempenho e da usabilidade.
                    Aqui estão alguns exemplos do meu trabalho, onde aplico boas práticas, novas tecnologias e melhorias contínuas a cada desafio.
                </p>


            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <div key={index} onClick={() => handleProjectClick(project)} className="cursor-pointer">
                        <CardProject image={project.image} title={project.title} technologies={project.technologies} type={project.type} />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Modal
                    title={selectedProject.title}
                    description={selectedProject.description}
                    image={selectedProject.image}
                    technologies={selectedProject.technologies}
                    githubLinkFront={selectedProject.githubLinkfront} // Correto
                    githubLinkBack={selectedProject.githublinkback} // Correto
                    liveDemoLink={selectedProject.liveDemoLink}
                    onClose={handleCloseModal}
                />
            )}

        </div>
    );
}

export default ProfessionalProjects;
