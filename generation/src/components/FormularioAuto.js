import React from "react";


const FormAuto = () => {
    return (
        <div>
            <form class="row g-3">
                <div class="col-md-3" >
                    <label for="inputModelo" class="form-label">Modelo</label>
                    <input type="modelo" class="form-control" id="inputModelo"/>
                </div>
                <div class="col-md-3">
                    <label for="inputMarca" class="form-label">Marca</label>
                    <input type="marca" class="form-control" id="inputMarca"/>
                </div>
                <div class="col-md-4">
                    <label for="inputColor" class="form-label">Color</label>
                    <select id="inputColor" class="form-select">
                        <option selected>Selecciona un color</option>
                        <option>Azul</option>
                        <option>Rojo</option>
                        <option>Negro</option>
                        <option>Gris</option>
                        <option>Blanco</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputPatente" class="form-label">Patente</label>
                    <input type="text" class="form-control" id="inputPatente" placeholder="AA-BB-00"/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
};

export default FormAuto;