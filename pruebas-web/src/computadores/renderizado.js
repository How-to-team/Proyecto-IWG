import React from 'react'
import {button} from "react-bootstrap";
import {
  Link
} from "react-router-dom";
import "./renderizado.css"
import Popupg from './popuprender'
import Renderizado from "./imagenes/Renderizado.png"

const renderizado = () => {
    return (
            <div className="AppRender">
                <div>
                    <Link to= '/pcrender/cpurender' >
                            <button className="btnrcpu"></button>
                    </Link>
                    <Link to='/pcrender/frontpanelrender' >
                            <button className="btnrfp"></button>
                    </Link>
                    <Link to='/pcrender/hddrender' >
                            <button className="btnrhdd"></button>
                    </Link>
                    <Link to='/pcrender/gpurender' >
                            <button className="btnrgpu"></button>
                    </Link>
                    <Link to='/pcrender/m2render' >
                            <button className="btnrm2"></button>
                    </Link>
                    <Link to='/pcrender/motherrender' >
                            <button className="btnrmb"></button>
                    </Link>
                    <Link to='/pcrender/psurender' >
                            <button className="btnrpsu"></button>
                    </Link>
                    <Link to='/pcrender/ramrender' >
                            <button className="btnrram"></button>
                    </Link>
                </div>
                <div>
                    <img src={Renderizado} alt='Foto Renderizado' width='650' ></img>
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

export default renderizado;
