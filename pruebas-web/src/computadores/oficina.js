import React from 'react'
import {Button} from "react-bootstrap";
import Switch from 'react-bootstrap/esm/Switch';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Cpuoficina from './componentes oficina/cpuoficina';
import Frontpaneloficina from './componentes oficina/frontpaneloficina';
import Hddoficina from './componentes oficina/hddoficina';
import LectorCDoficina from './componentes oficina/lectorCDoficina';
import Motheroficina from './componentes oficina/motheroficina';
import Psuoficina from './componentes oficina/psuoficina';
import Ramoficina from './componentes oficina/ramoficina';


const oficina = () => {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/pcoffice' exact>
                        <div>
                            
                            <Link to= './pcoffice/cpuoficina' exact>
                                <Button>cpu</Button>
                            </Link>
                            <Link to='./pcoffice/frontpaneloficina' exact>
                                <Button> front Panel </Button>
                            </Link>
                            <Link to='./pcoffice/hddoficina' exact>
                                <Button> HDD   </Button>
                            </Link>
                            <Link to='./pcoffice/lectorCDoficina' exact>
                                <Button>Lector de CD</Button>
                            </Link>
                            <Link to='./pcoffice/motheroficina' exact>
                                <Button>Placa madre</Button>
                            </Link>
                            <Link to='./pcoffice/psuoficina' exact>
                                <Button> PSU (Fuente de poder)</Button>
                            </Link>
                            <Link to='./pcoffice/ramoficina' exact>
                                <Button>RAM</Button>
                            </Link>
                        </div>
                    </Route>    
                </Switch>
                <Switch>
                    <Route path='/pcoffice/cpuoficina'>
                        <Cpuoficina/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcoffice/frontpaneloficina'>
                        <Frontpaneloficina/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcoffice/hddoficina'>
                        <Hddoficina/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcoffice/lectorCDoficina'>
                        <LectorCDoficina/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcoffice/motheroficina'>
                        <Motheroficina/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcoffice/psuoficina'>
                        <Psuoficina/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcoffice/ramoficina'>
                        <Ramoficina/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default oficina;
