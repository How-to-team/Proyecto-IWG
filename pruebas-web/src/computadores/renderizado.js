import React from 'react'
import {Button} from "react-bootstrap";
import {
  Link
} from "react-router-dom";


const renderizado = () => {
    return (
            <div>
                <div>
                    <img src='https://i.imgur.com/GWa6yWs.jpg'alt='Foto Renderizado' width='650' ></img>
                </div>
                <div>
                    <Link to= '/pcrender/cpurender' >
                            <Button>cpu</Button>
                    </Link>
                    <Link to='/pcrender/frontpanelrender' >
                            <Button> front Panel </Button>
                    </Link>
                    <Link to='/pcrender/hddrender' >
                            <Button> HDD   </Button>
                    </Link>
                    <Link to='/pcrender/gpurender' >
                            <Button>GPU render</Button>
                    </Link>
                    <Link to='/pcrender/m2render' >
                            <Button>m2 render</Button>
                    </Link>
                    <Link to='/pcrender/motherrender' >
                            <Button>Placa madre render</Button>
                    </Link>
                    <Link to='/pcrender/psurender' >
                            <Button> PSU (Fuente de poder) render</Button>
                    </Link>
                    <Link to='/pcrender/ramrender' >
                            <Button>RAM</Button>
                    </Link>
                </div>
            </div>
    );
}

export default renderizado;
