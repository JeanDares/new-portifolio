
import CardProject from '../../components/CardProject';
import Modal from '../../components/Modal';

import angular from '../../assets/angular.png';
import js_dinamico from '../../assets/js_dinamico.png';
import js_dom from '../../assets/js_dom.png';
import js_funao from '../../assets/js_funcao.png';
import js_navegador from '../../assets/js_navegador.png';
import scrum from '../../assets/scrum.png';
import swagger from '../../assets/swagger.png';
import amazon_nuvem from '../../assets/amazon_nuvem.png';
import PipelineDockerGithubActions from '../../assets/PipelineDockerGithubActions.png';
import nest from '../../assets/nest.png';
import desing from '../../assets/desing.png';

import { useState } from 'react';

// Definindo o tipo dos projetos
interface Project {
    image: string;
    title: string;
    description: string;
    technologies?: string[];
    githubLinkfront?: string;
    githublinkback?: string;
    liveDemoLink?: string;
    type?: 'Frontend' | 'Backend' | 'Fullstack'; // CORRETO
}


const projects: Project[] = [
    {
        "image": desing,
        "title": "Certificação em UI Design - Melhorando a Experiência com UI Patterns",
        "description": "Certificação que comprova conhecimentos em UI Design, focando na melhoria da experiência do usuário através de UI Patterns. Inclui abordagens para navegação intuitiva, hierarquia visual, acessibilidade, usabilidade e criação de interfaces modernas e responsivas."
    },

    {
        "image": nest,
        "title": "Certificação em NestJS - Persistência de Dados com TypeORM e PostgreSQL",
        "description": "Certificação que comprova conhecimentos em NestJS, abordando a persistência de dados com TypeORM e PostgreSQL. Inclui modelagem de entidades, criação de repositórios, migrations, relações entre tabelas e otimização de consultas."
    },

    {
        "image": PipelineDockerGithubActions,
        "title": "Pipeline com Docker e GitHub Actions",
        "description": "Certificação que atesta conhecimentos avançados em CI/CD com Docker e GitHub Actions, abordando a criação de pipelines automatizadas para testes, build, deploy e monitoramento de aplicações."
    },
    {
        "image": swagger,
        "title": "Certificação em Swagger",
        "description": "Certificação que atesta conhecimentos avançados em Swagger, abordando documentação de APIs, geração de código, validação de requisições, testes automatizados e integração com ferramentas de CI/CD."
    },
    {
        "image": amazon_nuvem,
        "title": "Certificação em Amazon Web Services",
        "description": "Certificação que comprova conhecimentos avançados em Amazon Web Services, abordando serviços de computação, armazenamento, banco de dados, redes, segurança, monitoramento e escalabilidade na nuvem."
    },
    {
        "image": angular,
        "title": "Certificação em Angular 14",
        "description": "Certificação que comprova conhecimentos avançados no framework Angular 14, abordando desenvolvimento de aplicações escaláveis, componentização, gerenciamento de estado e integração com APIs."
    },
    {
        "image": js_dinamico,
        "title": "Certificação em JavaScript Dinâmico",
        "description": "Certificação que atesta conhecimentos avançados em JavaScript, abordando conceitos de programação funcional, assíncrona, orientação a objetos, manipulação do DOM e integração com APIs."
    },
    {
        "image": js_dom,
        "title": "Certificação em Manipulação do DOM",
        "description": "Certificação que comprova conhecimentos avançados em manipulação do DOM com JavaScript, abordando técnicas de criação, remoção, atualização e manipulação de elementos HTML de forma dinâmica."
    },
    {
        "image": js_funao,
        "title": "Certificação em Funções JavaScript",
        "description": "Certificação que atesta conhecimentos avançados em funções JavaScript, abordando conceitos de escopo, hoisting, closures, callbacks, promises, async/await e arrow functions."
    },
    {
        "image": js_navegador,
        "title": "Certificação em JavaScript no Navegador",
        "description": "Certificação que comprova conhecimentos avançados em JavaScript no navegador, abordando manipulação de eventos, validação de formulários, consumo de APIs, armazenamento local e otimização de performance."
    },
    {
        "image": scrum,
        "title": "Certificação em Scrum Master",
        "description": "Certificação que atesta conhecimentos avançados em Scrum, abordando práticas ágeis, gestão de projetos, liderança de equipes, resolução de conflitos e melhoria contínua."
    }


];


function Certificates() {
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
                <span className="text-2xl md:text-3xl text-gray-500">Meus Certificados</span>
            </h1>

            {/* Introdução */}
            <section className='mb-10'>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed text-start">
                    Ao longo da minha jornada profissional, busco constantemente aprimorar minhas habilidades e expandir meus conhecimentos por meio de certificações reconhecidas.
                    Cada certificado representa um passo a mais na minha evolução como desenvolvedor, consolidando boas práticas, novas tecnologias e aprofundando conceitos essenciais.
                    Aqui estão algumas das certificações que obtive, evidenciando meu compromisso com o aprendizado contínuo e a excelência técnica.
                </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <div key={index} onClick={() => handleProjectClick(project)} className="cursor-pointer">
                        <CardProject image={project.image} title={project.title} type={project.type} />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Modal
                    title={selectedProject.title}
                    description={selectedProject.description}
                    image={selectedProject.image}
                    githubLinkFront={selectedProject.githubLinkfront} // Correto
                    githubLinkBack={selectedProject.githublinkback} // Correto
                    liveDemoLink={selectedProject.liveDemoLink}
                    onClose={handleCloseModal}
                />
            )}

        </div>
    );
}

export default Certificates;
