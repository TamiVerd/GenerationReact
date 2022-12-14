import React, { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TableAuto, FormAuto, BotonComponent } from "../components";

import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';



const AutoPage = () => {
        const navigate = useNavigate();
        const handleOnClick = useCallback (()=> navigate("/", {}, [Navigate]))

        const Switch = styled(Switch)(({ theme }) => ({
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: pink[600],
              '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: pink[600],
            },
          }));

          const label = { inputProps: { 'aria-label': 'Color switch demo' } };


    return (
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <TableAuto />
                </div>
            </div>
            <hr />

            <div class="row">
                <div class="col">
                    <FormAuto />
                    <Switch {...label} defaultChecked color="default" />
                    <BotonComponent infoBoton={'ir a usuario'} handleOnClick={handleOnClick}/>
                </div>
            </div>
        </div>

    )
}

export default AutoPage;