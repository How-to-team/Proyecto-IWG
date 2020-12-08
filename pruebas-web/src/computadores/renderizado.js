import React from 'react'
import {Button} from "react-bootstrap";
import Switch from 'react-bootstrap/esm/Switch';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Cpurender from './componentes renderizados/cpurender';
import Frontpanelrender from './componentes renderizados/frontpanelrender';
import Gpurender from './componentes renderizados/gpurender';
import Hddrender from './componentes renderizados/hddrender';
import M2render from './componentes renderizados/m2render';
import Motherrender from './componentes renderizados/motherrender';
import Psurender from './componentes renderizados/psurender';
import Ramrender from './componentes renderizados/ramrender';

const renderizado = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/pcrender' exact>
                        <div>
                        <Link to= './pcrender/cpurender' exact>
                                <Button>cpu</Button>
                        </Link>
                        <Link to='./pcrender/frontpanelrender' exact>
                                <Button> front Panel </Button>
                        </Link>
                        <Link to='./pcrender/hddrender' exact>
                                <Button> HDD   </Button>
                        </Link>
                        <Link to='./pcrender/gpurender' exact>
                                <Button>GPU render</Button>
                        </Link>
                        <Link to='./pcrender/m2render' exact>
                                <Button>m2 render</Button>
                        </Link>
                        <Link to='./pcrender/motherrender' exact>
                                <Button>Placa madre render</Button>
                        </Link>
                        <Link to='./pcrender/psurender' exact>
                                <Button> PSU (Fuente de poder) render</Button>
                        </Link>
                        <Link to='./pcrender/ramrender' exact>
                                <Button>RAM</Button>
                        </Link>
                        </div>

                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/cpurender'>
                        <Cpurender/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/frontpanelrender'>
                        <Frontpanelrender/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/gpurender'>
                        <Gpurender/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/hddrender'>
                        <Hddrender/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/m2render'>
                        <M2render/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/motherrender'>
                        <Motherrender/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/psurender'>
                        <Psurender/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcrender/ramrender'>
                        <Ramrender/>
                    </Route>
                </Switch>
            </div>

        </Router>
    )
}

export default renderizado;
