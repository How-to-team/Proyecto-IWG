import React from 'react'
import {Button} from "react-bootstrap";
import Switch from 'react-bootstrap/esm/Switch';
import {
  Link
} from "react-router-dom";

const oficina = () => {
    return (
            <div>
                <div>
                    <img src='https://cdn.discordapp.com/attachments/775904281671893042/786491326820646932/z230_version_pagina.png' alt='Foto Oficina' width='787'></img>
                </div>
                <div>
                    <Link to= '/pcoffice/cpuoficina'>
                        <Button>cpu</Button>
                    </Link>
                    <Link to='/pcoffice/frontpaneloficina'>
                        <Button> front Panel </Button>
                    </Link>
                    <Link to='/pcoffice/hddoficina'>
                        <Button> HDD   </Button>
                    </Link>
                    <Link to='/pcoffice/lectorCDoficina'>
                        <Button>Lector de CD</Button>
                    </Link>
                    <Link to='/pcoffice/motheroficina'>
                        <Button>Placa madre</Button>
                    </Link>
                    <Link to='/pcoffice/psuoficina'>
                        <Button> PSU (Fuente de poder)</Button>
                    </Link>
                    <Link to='/pcoffice/ramoficina'>
                        <Button>RAM</Button>
                    </Link>
                </div>
            </div>
    );
}

export default oficina;
