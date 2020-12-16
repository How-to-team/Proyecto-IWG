import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function gamer() {
    return (
        <div>
            <div>
            <img src='https://media.discordapp.net/attachments/775904281671893042/786367822825127946/703-Negro-6_version_pagina.png?width=789&height=683' alt='Foto Gamer'></img>
            </div>
            <div>
                <Link to="/pcgamer/mothergamer">
                    <Button>Placa madre</Button>
                </Link>
                <Link to='/pcgamer/cpugamer'>
                    <Button>cpu</Button>
                </Link>
                <Link to='/pcgamer/frontpanelgamer'>
                    <Button> front Panel </Button>
                </Link>
                <Link to='/pcgamer/hddgamer'>
                    <Button> HDD   </Button>
                </Link>
                <Link to='/pcgamer/gpugamer'>
                    <Button>GPU render</Button>
                </Link>
                <Link to='/pcgamer/m2gamer'>
                    <Button>m2 </Button>
                </Link>
                <Link to='/pcgamer/psugamer'>
                    <Button> PSU (Fuente de poder)</Button>
                </Link>
                <Link to='/pcgamer/ramgamer'>
                    <Button>RAM</Button>
                </Link>
            </div>
        </div>
    );
}

export default gamer;
