import React from "react";

//componente diinamico
const BotonComponent = ({infoBoton, handleOnClick}) => {
    return (
      <div>
        <button type="button"
        class="btn btn-outline-secondary"
        onClick={()=>{
        handleOnClick();
        }}
        >{infoBoton}</button>
      </div>
    );
  };

  export default BotonComponent;