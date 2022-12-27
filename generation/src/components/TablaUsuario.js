import React from "react";

const TableUsuario = ({ usuarios, deleteUser, setUsuarioEditado }) => {
  return (
    <div>
      <table class="table" border={1}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>

          {usuarios.map(usuario => (
            <tr>
              <td>
                {usuario.id}
              </td>
              <td>
                {usuario.name}
              </td>
              <td>
                {usuario.lastName}
              </td>
              <td>
                {usuario.correo}
              </td>
              <td>
                
{/* BOTONES ++esta parte tengo que repasarla++ */}
{/* lo de setuser user delete, todo eso :C  */}
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.id);
                  }}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                  Editar
                </button>

              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default TableUsuario;