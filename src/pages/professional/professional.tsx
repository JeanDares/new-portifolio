function Professional() {
    return (
        <div className="min-h-screen bg-white py-24 px-8 lg:px-50 space-y-16">
            {/* Título Principal */}
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-800 leading-tight">
                <br />
                <span className="text-2xl md:text-3xl text-gray-500">Desenvolvedor Fullstack Pleno</span>
            </h1>

            {/* Sobre Mim */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Sobre Mim</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Como desenvolvedor fullstack pleno, adquiri experiência prática e abrangente em diversas tecnologias e processos do desenvolvimento de software. Tenho vivência diária no uso de <strong>Node.js</strong> no backend e <strong>React</strong>/<strong>React Native</strong> no frontend, sempre buscando entregar soluções modernas e escaláveis.
                </p>
            </section>

            {/* Habilidades e Conhecimentos */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Habilidades e Conhecimentos</h2>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
                    <li>Tenho domínio em <strong>Git</strong>, sei resolver conflitos entre branches, usar stash, patches e trabalhar com diferentes fluxos como Git Flow e Trunk-Based Development.</li>
                    <li>Utilizo o terminal com facilidade para navegação em diretórios, execução de comandos e gerenciamento de pacotes.</li>
                    <li>Possuo conhecimento sólido em <strong>estruturas de dados</strong> como Heap, Stack, Queue (FIFO, LIFO), HashTables e Listas Encadeadas.</li>
                    <li>Tenho experiência com <strong>API REST</strong>, WebSockets e GraphQL, compreendendo suas diferenças e aplicabilidades.</li>
                    <li>Minha principal linguagem é <strong>JavaScript/TypeScript</strong>, mas também tenho experiência com outras tecnologias conforme a necessidade do projeto.</li>
                    <li>Trabalho com bancos de dados relacionais e NoSQL, utilizando <strong>PostgreSQL</strong>, MongoDB e Redis.</li>
                    <li>Entendo a importância dos testes automatizados e aplico <strong>TDD</strong> e <strong>mocking</strong> em projetos para garantir qualidade e robustez.</li>
                    <li>Gerencio dependências e bibliotecas com eficiência, garantindo o bom funcionamento e manutenção do código.</li>
                    <li>Tenho experiência com padrões de arquitetura como <strong>MVC, MVP e MVVM</strong>, sabendo quando aplicar cada um.</li>
                    <li>Estou acostumado a desenhar e estruturar funcionalidades desde o planejamento até a implementação.</li>
                    <li>Participo ativamente de <strong>code reviews</strong>, documentação de projetos e proponho melhorias em processos e metodologias.</li>
                    <li>Tenho vivência em <strong>metodologias ágeis</strong> como Scrum e Kanban, facilitando a organização e entrega de tarefas.</li>
                </ul>
            </section>

            {/* Ferramentas que Utilizo */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Ferramentas que Utilizo</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-lg text-gray-700">
                    <div className="flex items-center space-x-2"><span>🟨</span><span>JavaScript</span></div>
                    <div className="flex items-center space-x-2"><span>🟦</span><span>TypeScript</span></div>
                    <div className="flex items-center space-x-2"><span>🟩</span><span>Node.js</span></div>
                    <div className="flex items-center space-x-2"><span>🔵</span><span>React</span></div>
                    <div className="flex items-center space-x-2"><span>📱</span><span>React Native</span></div>
                    <div className="flex items-center space-x-2"><span>🛠️</span><span>Docker</span></div>
                    <div className="flex items-center space-x-2"><span>☁️</span><span>GCP</span></div>
                    <div className="flex items-center space-x-2"><span>🐘</span><span>PostgreSQL</span></div>
                    <div className="flex items-center space-x-2"><span>⚡</span><span>Hasura</span></div>
                    <div className="flex items-center space-x-2"><span>🌐</span><span>GraphQL</span></div>
                    <div className="flex items-center space-x-2"><span>🔗</span><span>API REST</span></div>
                    <div className="flex items-center space-x-2"><span>🖥️</span><span>Portainer</span></div>
                </div>
            </section>

            {/* Experiência Profissional */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Experiência Profissional</h2>
                <ul className="mt-4 space-y-6">
                    <li>
                        <h3 className="text-lg font-bold text-gray-800">Desenvolvedor de Sistema 2 – Grendene (2024 - Presente)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            - Atuo como desenvolvedor fullstack, trabalhando com <strong>Node.js</strong> no backend e <strong>React/React Native</strong> no frontend.<br />
                            - Desenvolvo APIs robustas e escaláveis com <strong>PostgreSQL</strong>, <strong>Hasura</strong> e <strong>GraphQL</strong>.<br />
                            - Faço deploy de microsserviços na <strong>GCP</strong>, utilizando <strong>Docker</strong> e automação via <strong>GitLab CI/CD</strong>.
                        </p>
                    </li>

                    <li>
                        <h3 className="text-lg font-bold text-gray-800">Desenvolvedor Fullstack – LogiDados Informática (2022 - 2024)</h3>
                        <p className="text-gray-700 leading-relaxed">
                            - Desenvolvi APIs REST eficientes com <strong>Node.js</strong> e otimizei consultas em <strong>PostgreSQL</strong>.<br />
                            - Trabalhei no desenvolvimento de aplicações web e mobile usando <strong>React</strong> e <strong>React Native</strong>.<br />
                            - Realizei integrações com APIs externas e automatizei processos via <strong>GitLab CI/CD</strong>.
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Professional;