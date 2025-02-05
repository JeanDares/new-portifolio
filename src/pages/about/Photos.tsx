import React from 'react';

function Photos() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">Minhas Fotos</h1>
            <p className="text-lg mb-6">Aqui estão algumas fotos que contam um pouco sobre mim.</p>

            {/* Exemplo de galeria de imagens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src="https://via.placeholder.com/300" alt="Foto 1" className="rounded shadow" />
                <img src="https://via.placeholder.com/300" alt="Foto 2" className="rounded shadow" />
                <img src="https://via.placeholder.com/300" alt="Foto 3" className="rounded shadow" />
            </div>
        </div>
    );
}

export default Photos;
