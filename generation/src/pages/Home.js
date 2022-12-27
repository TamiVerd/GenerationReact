
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotonComponent, FormUsuario, TableUsuario } from "../components";

import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";

const usuario1 = [{
    name: 'Joseph',
    lastName: 'Joestar',
    correo: 'jo.jo@gmail.com',
    id: '9647634-8'
},
{
    name: 'Josuke',
    lastName: 'Higashikata',
    correo: 'jojo@gmail.com',
    id: '1797634-8'
}];


const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
    const [user, setUsuario] = useState(usuario1);//state
    const [usuarioEditado, setUsuarioEditado] = useState(null);
    //useEfect esta pendiente a cambios y apenas carga se hace lo que tenga useefects tenga adentro
    useEffect(() => {
        getUsers();
    }, [])
    //getuser trae todo los datos a la variable usuadios bd

    const getUsers = async () => {
        const usuariosBD = await getAllUsers();
        setUsuario(usuariosBD);
    }


    const userAdd = async (usuarioAgregado) => {
        const usuarioBD = await addUser(usuarioAgregado);
        getUsers(usuarioBD);
    }

    const userEdit = async (usuarioEditado) => {
        const usuarioBD = await editUser(usuarioEditado);
        getUsers(usuarioBD);
    }
    
    const userDelete = async (idUsuario) => {
        const usuarioBD = await deleteUser(idUsuario);
        getUsers(usuarioBD);
    }




    //presta atencion a los nmbres!! 
    //para eliminar usuario
    /*const userDelete = (idUsuario) => {
        const changeUser = user.filter(usuario => usuario.id !== idUsuario);
        setUsuario(changeUser)
    }
      //para agregar usuario76
            const userAdd = (usuario)=>{
                const addUsuario =[
                    ...user, usuario
                ]
                setUsuario(addUsuario);
            }
    //para editar usuario
    const userEdit = (usuarioEditado) => {
        const editUser = user.map(usuario => (usuario.id === usuarioEditado.id ? usuarioEditado : usuario))
        setUsuario(editUser)
    }*/

    return (
        <div>

            <div class="container mt-3">
                <div class="row">
                    <div class="col">
                        <FormUsuario
                            userAdd={userAdd}
                            usuarioEditado={usuarioEditado}
                            setUsuarioEditado={setUsuarioEditado}
                            userEdit={userEdit}
                        />
                    </div>
                </div>
                <hr />

                <div class="row">
                    <div class="col">
                        <TableUsuario usuarios={user} userDelete={userDelete}
                            setUsuarioEditado={setUsuarioEditado} />
                    </div>
                </div>
            </div>

            <BotonComponent infoBoton={'Auto'} handleOnClick={handleOnClick}></BotonComponent>
            <BotonComponent infoBoton={'Usuario'}></BotonComponent>


        </div>

    )
}

export default HomePage;