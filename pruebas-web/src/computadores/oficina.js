import React from 'react'
import {button} from "react-bootstrap";
import {
  Link
} from "react-router-dom";
import "./oficina.css"
import Popupg from './popupoficina'

const oficina = () => {
    return (
            <div className='Appoficina'>
                <div>
                    <img src='https://cdn.discordapp.com/attachments/775904281671893042/786491326820646932/z230_version_pagina.png' alt='Foto Oficina' width='787'></img>
                </div>
                <div>
                    <Link to= '/pcoffice/cpuoficina'>
                        <button className="btnocpu"></button>
                    </Link>
                    <Link to='/pcoffice/frontpaneloficina'>
                        <button className="btnofp"></button>
                    </Link>
                    <Link to='/pcoffice/hddoficina'>
                        <button className="btnohdd"></button>
                    </Link>
                    <Link to='/pcoffice/lectorCDoficina'>
                        <button className="btnolector"></button>
                    </Link>
                    <Link to='/pcoffice/motheroficina'>
                        <button className="btnomb"></button>
                    </Link>
                    <Link to='/pcoffice/psuoficina'>
                        <button className="btnopsu"></button>
                    </Link>
                    <Link to='/pcoffice/ramoficina'>
                        <button className="btnoRAM"></button>
                    </Link>
                </div>
                <br/>
                <div>
                    <h3>Por una mejor experiencia te recomendamos empezar en la placa madre :)</h3>
                </div>
                <Popupg/>
                <Link to='/'>
                        <button type="button" class="btn btn-primary btn-lg btn-block">Volver a la página principal</button>
                </Link>
            </div>
    );
}

export default oficina;
