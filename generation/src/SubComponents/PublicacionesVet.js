import React from "react";
import '../hojasDeEstilo/PublicacionesVet.css';

const PublicacionesVet = () => {
    return (
        <div className="contenedorInfoVet">
            <img
                className="imagenVet"
                height={194}
                src={require('../image/beagle-3.jpg')}
                alt='imagenVeterinaria' />
            <p className="NombreVeterinaria">Veterinaria Los Pillines</p>
            <p className="DireccionVeterinaria">...</p>
            <p className="InformacionVeterinaria">awawa</p>

        </div>

    );
};

export default PublicacionesVet;