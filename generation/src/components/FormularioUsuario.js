import React, { useState, useEffect } from "react";

const initialUsuario = {
    nombre: "",
    apellido: "",
    correo: "",
    rut: ""
}

const FormUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, apellido, correo, rut } = usuario

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario(
                {
                    nombre: "",
                    apellido: "",
                    correo: "",
                    rut: ""
                }
            )
        }
    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFromValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFromValue);
    }

    return (
        <div>
            <form class="row g-3">

                {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}

                <div class="col-md-3">
                    <label for="inputNombre" class="form-label">Nombre</label>
                    <input type="Nombre" class="form-control" id="inputNombre" name="nombre" value={nombre} onChange={handleInputChange} />
                </div>

                <div class="col-md-3">
                    <label for="inputApellido" class="form-label">Apellido</label>
                    <input type="Apellido" class="form-control" id="inputApellido" name="apellido" value={apellido} onChange={handleInputChange} />
                </div>
                <div class="col-md-2">
                    <label for="inputCorreo" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="inputCorreo" placeholder="aa@bb.cc" name="correo" value={correo} onChange={handleInputChange} />
                </div>

                <div class="col-md-3">
                    <label for="inputrut" class="form-label">Rut</label>
                    <input type="Rut" class="form-control" id="inputRut" name="rut" value={rut} onChange={handleInputChange} />
                </div>

                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>

                <div class="col-12">
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userAdd(usuario)}
                        >
                            Ingresar usuario
                        </button>
                    )}

                    {usuarioEditado !== null ? (<button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => setUsuarioEditado(null)}
                    >
                        Cancelar
                    </button>
                    ) : (
                        <></>)}

                </div>
            </form>
        </div>
    );
};

export default FormUsuario;