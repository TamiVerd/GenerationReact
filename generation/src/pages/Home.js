
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotonComponent, FormUsuario, TableUsuario } from "../components";

const usuario1=[{
    nombre: 'Joseph',
    apellido: 'Joestar',
    correo: 'jo.jo@gmail.com',
    rut:'9647634-8'
},
{
    nombre: 'Josuke',
    apellido: 'Higashikata',
    correo: 'jojo@gmail.com',
    rut:'1797634-8'
}];


const HomePage = () => {
        const navigate = useNavigate();
        const handleOnClick = useCallback (()=> navigate("/Auto", {}, [navigate]));
        const [user, setUsuario] = useState(usuario1);//state
        const [usuarioEditado, setUsuarioEditado] = useState(null);
//presta atencion a los nmbres!! 
//para eliminar usuario
        const userDelete=(rutUsuario)=>{
            const changeUser = user.filter(usuario => usuario.rut !== rutUsuario);
            setUsuario(changeUser)
        }
//para agregar usuario
        const userAdd = (usuario)=>{
            const addUsuario =[
                ...user, usuario
            ]
            setUsuario(addUsuario);
        }
//para editar usuario
        const userEdit =(usuarioEditado)=>{
            const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario))
            setUsuario(editUser)
        }

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
                setUsuarioEditado={setUsuarioEditado}/>
                </div>
            </div>
        </div>

            <BotonComponent infoBoton={'Auto'} handleOnClick={handleOnClick}></BotonComponent>
            <BotonComponent infoBoton={'Usuario'}></BotonComponent>

        </div>

    )
}

export default HomePage;