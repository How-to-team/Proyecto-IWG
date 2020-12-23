import React from 'react'
import {
  Link
} from "react-router-dom";

const oficina = () => {
    return (
            <div>
                <div>
                    <Link to= '/pcoffice/cpuoficina'>
                        <button className='btncpu'>cpu</button>
                    </Link>
                    <Link to='/pcoffice/frontpaneloficina'>
                        <button className='btnfrontpanel'> front Panel </button>
                    </Link>
                    <Link to='/pcoffice/hddoficina'>
                        <button className='btnhdd'> HDD   </button>
                    </Link>
                    <Link to='/pcoffice/lectorCDoficina'>
                        <button>Lector de CD</button>
                    </Link>
                    <Link to='/pcoffice/motheroficina'>
                        <button>Placa madre</button>
                    </Link>
                    <Link to='/pcoffice/psuoficina'>
                        <button> PSU (Fuente de poder)</button>
                    </Link>
                    <Link to='/pcoffice/ramoficina'>
                        <button>RAM</button>
                    </Link>
                </div>
                <div>
                    <img src='https://cdn.discordapp.com/attachments/775904281671893042/786491326820646932/z230_version_pagina.png' alt='Foto Oficina' width='787'></img>
                </div>
            </div>
    );
}

export default oficina;
