import React from "react";
import { TableUsuario, FormUsuario, } from "../components";

const UsuarioPage = () => {
    return (
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                <FormUsuario/>
                </div>
            </div>
            <hr />

            <div class="row">
                <div class="col">
                <TableUsuario/>
                </div>
            </div>
        </div>

    )
}

export default UsuarioPage;