import profileImage from '../../../public/image_profile_2.jpg';
import Carousel from '../../components/carrosel/Carousel';

function About() {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row items-start bg-white py-24 md:py-16 px-8 lg:px-50 space-y-8 lg:space-y-0">
                {/* Seção de Texto */}
                <div className="lg:w-1/2 space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-800 leading-tight">
                        <br />
                        <span className="text-2xl md:text-3xl text-gray-500">Uma jornada de resiliência e propósito</span>
                    </h1>

                    {/* Introdução profunda */}
                    <section>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Eu sou o que chamam de “sobrevivente da persistência”. Cresci no interior do Rio Grande do Sul, cercado por desafios que poderiam ter me derrubado, mas que, na verdade, moldaram quem eu sou hoje. Quando minha mãe ficou doente, a responsabilidade bateu à minha porta cedo. Comecei a trabalhar ainda jovem, entendendo rapidamente o significado de sacrifício, mas também de propósito.
                        </p>
                    </section>

                    {/* Corpo de Bombeiros e o aprendizado de disciplina */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Disciplinado pela vida</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Aprendi o valor do trabalho em equipe, da disciplina e da resiliência. Cada missão de resgate era um lembrete de que as pequenas ações podem ter grandes impactos. Mas também foi ali que percebi que eu queria explorar novos caminhos.
                        </p>
                    </section>

                    {/* Transição de Carreira */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Mudar para crescer</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Decidi dar um salto de fé. Em vez de me contentar com uma carreira segura, escolhi a tecnologia como meu novo horizonte. Sem garantias, mas com muita determinação, aprendi a programar, iniciei formações externas e me joguei de cabeça em projetos desafiadores. Os primeiros códigos podem não ter sido perfeitos, mas o progresso era visível a cada tentativa.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Hoje, trabalho como desenvolvedor fullstack, criando soluções digitais no backend com <strong>Node.js</strong> e no frontend com <strong>React</strong>. Também aprimorei minhas habilidades em bancos de dados <strong>PostgreSQL</strong> e infraestrutura na <strong>GCP</strong>, sempre aplicando boas práticas como clean code e documentação técnica.
                        </p>
                    </section>

                    {/* Soft Skills e Valores */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">O que me define</h2>
                        <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                            <li><strong>Resiliência:</strong> Encaro desafios de frente, sabendo que cada um deles me ensina algo novo.</li>
                            <li><strong>Colaboração:</strong> Valorizo o trabalho em equipe e sei que as melhores soluções nascem da troca de ideias.</li>
                            <li><strong>Disciplina:</strong> A experiência no Corpo de Bombeiros me deu a base que aplico no meu dia a dia profissional.</li>
                            <li><strong>Empatia:</strong> Ouvir as pessoas me permite entender melhor os problemas e criar soluções significativas.</li>
                        </ul>
                    </section>

                    {/* Conexão com a comunidade */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Raízes que nunca esqueço</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Mesmo com a transição de carreira, nunca deixei de lado minhas raízes. Continuo como voluntário no Corpo de Bombeiros da minha cidade natal. Esse vínculo me lembra constantemente da importância de contribuir para a comunidade e de que, não importa até onde eu vá, é essencial lembrar de onde eu vim.
                        </p>
                    </section>

                    {/* Hard Skills Técnicas */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Hard Skills Técnicas</h2>
                        <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                            <li><strong>Backend:</strong> Node.js, Express.js, arquitetura de microserviços</li>
                            <li><strong>Frontend:</strong> React.js, React Native</li>
                            <li><strong>Banco de Dados:</strong> PostgreSQL, SQL otimizado</li>
                            <li><strong>Infraestrutura:</strong> GCP, Docker, Portainer</li>
                            <li><strong>Versionamento:</strong> GitLab, GitHub, CI/CD</li>
                            <li><strong>Práticas de Desenvolvimento:</strong> Clean code, testes automatizados</li>
                        </ul>
                    </section>
                </div>

                {/* Seção de Imagem */}
                <div className="lg:w-1/2 flex justify-center pt-32">
                    <img
                        src={profileImage}
                        alt="Jean Borges"
                        className="w-full max-w-md rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Carrossel fora do container */}
            <div className="w-full py-12 px-4">
                <Carousel />
            </div>
        </>
    );
}

export default About;
