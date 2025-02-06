

function Professional() {
    return (
        <div className="min-h-screen bg-white py-24 px-8 lg:px-50 space-y-16">
            {/* Título Principal */}
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-800 leading-tight">
                <br />
                <span className="text-2xl md:text-3xl text-gray-500">Desenvolvedor Fullstack pleno</span>
            </h1>

            {/* Introdução */}
            <section>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Minha jornada como desenvolvedor fullstack me proporcionou a oportunidade de trabalhar em projetos diversos, desde sistemas internos robustos até aplicativos interativos. Combinando <strong>Node.js</strong> no backend e <strong>React</strong>/<strong>React Native</strong> no frontend, busco sempre entregar soluções modernas, escaláveis e eficientes.
                </p>
            </section>

            {/* Experiência Profissional */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Experiência Profissional</h2>
                <ul className="mt-4 space-y-6">
                    <li>
                        <h3 className="text-lg font-bold text-gray-800">Desenvolvedor de sistema 2 – Grendene (2024 - Presente)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            - Atuação fullstack, com foco no desenvolvimento de APIs robustas usando <strong>Node.js</strong> e integração com bancos de dados **PostgreSQL**.<br />
                            - Desenvolvimento de interfaces dinâmicas e responsivas com **React** e suporte a aplicações mobile usando **React Native**.<br />
                            - Implementação de integrações utilizando **Hasura** e **GraphQL** para otimização de endpoints e escalabilidade.<br />
                            - Deploy e gestão de microsserviços na **GCP**, utilizando **Docker** e automação de pipelines via **GitLab CI/CD**.
                        </p>
                    </li>

                    <li>
                        <h3 className="text-lg font-bold text-gray-800"> Desenvolvedor Fullstack – LogiDados Informática (2022 - 2024)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            - Atuação em projetos fullstack, desenvolvendo APIs REST eficientes com **Node.js** e otimizando consultas em **PostgreSQL**.<br />
                            - Desenvolvimento de aplicações web e mobile usando **React** e **React Native**, aplicando boas práticas de clean code.<br />
                            - Integração com APIs externas e desenvolvimento de funcionalidades customizadas para atender requisitos específicos de clientes.<br />
                            - Configuração e deploy contínuo através de pipelines automatizados no **GitLab CI/CD**.
                        </p>
                    </li>
                </ul>
            </section>

            {/* Hard Skills */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Hard Skills</h2>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
                    <li><strong>Backend:</strong> Node.js, Express.js, arquitetura de microsserviços</li>
                    <li><strong>Frontend:</strong> React.js, React Native, TypeScript</li>
                    <li><strong>Banco de Dados:</strong> PostgreSQL, SQL otimizado</li>
                    <li><strong>Infraestrutura:</strong> GCP, Docker, Portainer</li>
                    <li><strong>Versionamento:</strong> GitLab, GitHub, CI/CD</li>
                    <li><strong>Práticas de Desenvolvimento:</strong> Clean code, testes automatizados</li>
                </ul>
            </section>

            {/* Projetos Notáveis */}
            {/* <section>
                <h2 className="text-2xl font-semibold text-gray-800">Projetos Notáveis</h2>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
                    <li>
                        <strong>Sistema de Quiosques Internos:</strong> Desenvolvimento de uma solução integrada usando **React Native** para interfaces de quiosques e **Node.js** no backend, garantindo uma experiência simplificada para usuários internos.
                    </li>
                    <li>
                        <strong>Notificações Segmentadas:</strong> Implementação de notificações personalizadas com **GraphQL** e **Hasura**, melhorando a eficiência da comunicação interna.
                    </li>
                </ul>
            </section> */}
        </div>
    );
}

export default Professional;
