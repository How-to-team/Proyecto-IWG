import React from 'react';
import { Link } from "react-router-dom";
import "./gamer.css"

function Gamer() {
    return (
        <div>
            <div>
                <Link to="/pcgamer/mothergamer">
                    <button className="btnmb">1-. Placa madre</button>
                </Link>
                <Link to='/pcgamer/cpugamer'>
                    <button className="btncpu"></button>
                </Link>
                <Link to='/pcgamer/ramgamer'>
                    <button>3-. RAM</button>
                </Link>
                <Link to='/pcgamer/gpugamer'>
                    <button>4-. Tarjeta Grafica</button>
                </Link>
                <Link to='/pcgamer/m2gamer'>
                    <button>5-. Memoria SSD </button>
                </Link>
                <Link to='/pcgamer/psugamer'>
                    <button>6-. Fuente de poder</button>
                </Link>
                <Link to='/pcgamer/hddgamer'>
                    <button>7-. Disco Duro</button>
                </Link>
                <Link to='/pcgamer/frontpanelgamer'>
                    <button>8-. Panel Frontal</button>
                </Link>
            </div>
            <div>
                <img className="pcgamer" src='https://media.discordapp.net/attachments/775904281671893042/786367822825127946/703-Negro-6_version_pagina.png?width=789&height=683' alt='Foto Gamer'/>
            </div>
        </div>
    );
}

export default Gamer;
