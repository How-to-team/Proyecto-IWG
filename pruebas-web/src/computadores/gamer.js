import React from 'react';
import { Link } from "react-router-dom";
import "./gamer.css"

function Gamer() {
    return (
        <div className='App'>
            <div>
                <Link to="/pcgamer/mothergamer">
                    <button className="btnmb"></button>
                </Link>
                <Link to='/pcgamer/cpugamer'>
                    <button className="btncpu"></button>
                </Link>
                <Link to='/pcgamer/ramgamer'>
                    <button className="btnram"></button>
                </Link>
                <Link to='/pcgamer/gpugamer'>
                    <button className="btngpu"></button>
                </Link>
                <Link to='/pcgamer/m2gamer'>
                    <button className="btnm2"></button>
                </Link>
                <Link to='/pcgamer/psugamer'>
                    <button className="btnpsu"></button>
                </Link>
                <Link to='/pcgamer/hddgamer'>
                    <button className="btnhdd"></button>
                </Link>
                <Link to='/pcgamer/frontpanelgamer'>
                    <button className="btnfp"></button>
                </Link>
            </div>
            <div>
                <img className="pcgamer" src='https://media.discordapp.net/attachments/775904281671893042/786367822825127946/703-Negro-6_version_pagina.png?width=789&height=683' alt='Foto Gamer'/>
            </div>
            <br/>
            <div>
                <h3>Te recomendamos empezar por la placa madre para una mejor experiencia aprendiendo ;)</h3>
            </div>
            <Link to='/'>
                    <button type="button" class="btn btn-primary btn-lg btn-block">Volver a la página principal</button>
            </Link>
        </div>
    );
}

export default Gamer;
