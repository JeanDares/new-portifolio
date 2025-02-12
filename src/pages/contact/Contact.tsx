import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await emailjs.send(
                'service_70imy2x',
                'template_7jla7up',
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                },
                'FuVnTpJsuYOIjk3iY'
            );

            alert("Mensagem enviada com sucesso!");
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 py-6 bg-gray-50">
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 leading-tight text-center mb-4">
                <br />
                <span className="text-xl md:text-2xl text-gray-500">Entre em Contato</span>
            </h1>

            <p className="text-sm md:text-md text-gray-600 text-center max-w-3xl mb-4">
                Se quiser bater um papo, discutir um projeto ou apenas dizer olá, estou à disposição!
            </p>

            {/* Informações de Contato */}
            <div className="bg-white p-5 shadow-md rounded-xl w-full max-w-full sm:max-w-lg md:max-w-2xl text-center mb-4">
                <p className="text-gray-700 font-medium flex items-center justify-center space-x-2">
                    <FaMapMarkerAlt className="text-gray-600" />
                    <span>Caxias do Sul - RS</span>
                </p>
                <p className="text-gray-700 font-medium flex items-center justify-center space-x-2 mt-2">
                    <FaWhatsapp className="text-green-500" />
                    <a
                        href="https://wa.me/554999066186"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition"
                    >
                        (54) 99906-6186
                    </a>
                </p>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-white p-5 shadow-md rounded-xl w-full max-w-full sm:max-w-lg md:max-w-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    <div>
                        <label className="text-gray-700 font-semibold text-sm md:text-md">Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                            placeholder="Seu nome"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 font-semibold text-sm md:text-md">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                            placeholder="seuemail@exemplo.com"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 font-semibold text-sm md:text-md">Mensagem</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none h-32"
                            placeholder="Escreva sua mensagem aqui..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>

            {/* Redes Sociais */}
            <div className="flex space-x-6 text-gray-500 text-lg mt-6">
                <a href="https://www.instagram.com/borges_jean/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                    <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/jean-borges-9a0b201b5/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/JeanDares" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                    <FaGithub size={20} />
                </a>
                <a href="mailto:jeanborgesdares@gmail.com" className="hover:text-black transition">
                    <FaEnvelope size={20} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
