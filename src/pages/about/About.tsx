import Carousel from '../../components/carrosel/Carousel';

function About() {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row items-start bg-white py-24 md:py-16 px-8 lg:px-50 space-y-8 lg:space-y-0">
                {/* Seção de Texto */}
                <div className="lg:w-1/2 space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-800 leading-tight">
                        <br />
                        <span className="text-2xl md:text-3xl text-gray-500">Uma jornada de desafios, crescimento e transformação</span>
                    </h1>

                    {/* Infância no futebol */}
                    <section>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Aos 10 anos, minha vida parecia traçada para o futebol. Jogava como goleiro e fui descoberto por um olheiro do Grêmio durante um torneio. O reconhecimento me levou à base do time, onde vivi uma experiência incrível e morei em Porto Alegre por quase dois anos. Contudo, minha trajetória no esporte foi interrompida quando precisei voltar para casa para cuidar da minha mãe, que estava doente. Sem um retorno financeiro imediato no futebol, a prioridade passou a ser o bem-estar da minha família.
                        </p>
                    </section>

                    {/* Trabalho na adolescência */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Aprendendo o valor do trabalho</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Desde cedo, tive que buscar oportunidades. Com apenas 12 anos, já trabalhava no turno inverso da escola para ajudar em casa. Meu primeiro emprego foi na indústria calçadista de Três Coroas, onde atuei como desenhista técnico de calçados femininos. Essa experiência me ensinou a importância do esforço e da evolução contínua.
                        </p>
                    </section>

                    {/* Corpo de Bombeiros */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Uma década servindo como bombeiro</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Aos 18 anos, passei no concurso para o Corpo de Bombeiros, onde servi por oito anos. Durante esse período, aprendi valores que carrego até hoje: disciplina, resiliência, trabalho em equipe e liderança. No entanto, em 2017, comecei a perceber que aquilo não era mais para mim. Lidar diariamente com tragédias e momentos difíceis das pessoas começou a me afetar profundamente. Eu precisava de uma mudança.
                        </p>
                    </section>

                    {/* Transição de Carreira */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">O salto para a tecnologia</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Decidi mudar de cidade e fui para Caxias do Sul-RS, onde teria mais oportunidades de estudo e trabalho na área de tecnologia. Iniciei a faculdade de Engenharia de Software enquanto ainda trabalhava como bombeiro, preparando-me financeiramente para a transição. Busquei conhecimento, participei de eventos, fiz networking e me aprofundei em diferentes áreas da tecnologia.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Em 2022, dei um passo definitivo na minha mudança de carreira. Saí dos bombeiros e comecei a trabalhar com tecnologia, iniciando como estagiário e absorvendo conhecimento em diversas áreas do desenvolvimento de software.
                        </p>
                    </section>

                    {/* Soft Skills */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800">Minhas Soft Skills</h2>
                        <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                            <li><strong>Trabalho em Equipe:</strong> Gosto de colaborar e aprender com colegas, fortalecendo a troca de conhecimento.</li>
                            <li><strong>Resiliência:</strong> Minha trajetória me ensinou a enfrentar desafios e encontrar soluções, independentemente das dificuldades.</li>
                            <li><strong>Comunicação:</strong> Prezo pela clareza e objetividade ao compartilhar ideias e feedbacks.</li>
                            <li><strong>Adaptabilidade:</strong> Sempre disposto a aprender novas tecnologias e metodologias para acompanhar o mercado.</li>
                            <li><strong>Gestão de Tempo:</strong> Organizo minhas tarefas para ser produtivo e garantir entregas de qualidade.</li>
                            <li><strong>Proatividade:</strong> Não espero as coisas acontecerem, busco antecipar problemas e propor melhorias.</li>
                        </ul>
                    </section>
                </div>

                {/* Seção de Imagem */}
                <div className="lg:w-1/2 flex justify-center pt-32">
                    <div className="lg:w-1/2 flex justify-center pt-32">
                        <img
                            src="/image_profile_2.jpg"
                            alt="Jean Borges"
                            className="w-full max-w-md rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Mensagem antes do carrossel */}
            <div className="w-full text-center py-8">
                <h2 className="text-3xl font-semibold text-gray-800">Explorando Minha Jornada</h2>
                <p className="mt-4 text-lg text-gray-600 px-4 lg:px-50">
                    Aqui estão alguns dos momentos que definem quem eu sou: minha vida pessoal, conquistas,
                    amigos e aventuras. Através dessas fotos, você verá um pouco mais da minha jornada
                    além do trabalho.
                </p>
            </div>

            {/* Carrossel fora do container */}
            <div className="w-full py-12 px-4">
                <Carousel />
            </div>
        </>
    );
}

export default About;
