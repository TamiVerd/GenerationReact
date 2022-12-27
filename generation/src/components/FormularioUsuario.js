import React, { useState, useEffect } from "react";

const initialUsuario = {
    name: "",
    lastName: "",
    correo: "",
    id: ""
}

const FormUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { name, lastName, correo, id } = usuario

    //para ver si ya existe un usuario con las caracteristivas (mostrarlo) o mostrar que datos estan ingresados
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario(
                {
                    name: "",
                    lastName: "",
                    correo: "",
                    id: ""
                }
            )
        }
    }, [usuarioEditado]);

    //para boton editar
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

                {/* con esto el titulo del formurario es dinamico */}
                {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}

                <div class="col-md-3">
                    <label for="inputrut" class="form-label">Id</label>
                    <input type="Id" class="form-control" id="Rut" name="id" value={id} onChange={handleInputChange} disabled />
                </div>

                <div class="col-md-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="name" class="form-control" id="name" name="name" value={name} onChange={handleInputChange} />
                </div>

                <div class="col-md-3">
                    <label for="inputApellido" class="form-label">Apellido</label>
                    <input type="Apellido" class="form-control" id="Apellido" name="lastName" value={lastName} onChange={handleInputChange} />
                </div>
                <div class="col-md-2">
                    <label for="inputCorreo" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="Correo" placeholder="aa@bb.cc" name="correo" value={correo} onChange={handleInputChange} />
                </div>

                

                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                {/* BOTONES ++esta parte tengo que repasarla++ */}
                {/* tener mucho cuidado con los nombres, tienen que ser lo mismo en home, aqui y en la tabla? */}
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