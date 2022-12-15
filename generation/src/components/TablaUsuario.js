import React from "react";

const TableUsuario = ({ usuarios, userDelete, setUsuarioEditado }) => {
  return (
    <div>
      <table class="table" border={1}>
        <thead>
          <tr>
            <th scope="col">Rut</th>
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
                {usuario.rut}
              </td>
              <td>
                {usuario.nombre}
              </td>
              <td>
                {usuario.apellido}
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
                    userDelete(usuario.rut);
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