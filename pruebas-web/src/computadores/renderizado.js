import React from 'react'
import {button} from "react-bootstrap";
import {
  Link
} from "react-router-dom";
import "./renderizado.css"

const renderizado = () => {
    return (
            <div>
                <div>
                    <Link to= '/pcrender/cpurender' >
                            <button className="btncpu">cpu</button>
                    </Link>
                    <Link to='/pcrender/frontpanelrender' >
                            <button className="btnfp"> front Panel </button>
                    </Link>
                    <Link to='/pcrender/hddrender' >
                            <button className="btnhdd"> HDD   </button>
                    </Link>
                    <Link to='/pcrender/gpurender' >
                            <button className="btngpu">GPU render</button>
                    </Link>
                    <Link to='/pcrender/m2render' >
                            <button className="btnm2">m2 render</button>
                    </Link>
                    <Link to='/pcrender/motherrender' >
                            <button className="btnm">Placa madre render</button>
                    </Link>
                    <Link to='/pcrender/psurender' >
                            <button className="btnpsu"> PSU (Fuente de poder) render</button>
                    </Link>
                    <Link to='/pcrender/ramrender' >
                            <button className="btnram">RAM</button>
                    </Link>
                </div>
                <div>
                    <img src='https://i.imgur.com/GWa6yWs.jpg'alt='Foto Renderizado' width='650' ></img>
                </div>
            </div>
    );
}

export default renderizado;
