import React from 'react'
import {Button} from "react-bootstrap";
import Switch from 'react-bootstrap/esm/Switch';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Cpugamer from './componentes gamer/cpugamer';
import Frontpanelgamer from './componentes gamer/frontpanelgamer';
import Gpugamer from './componentes gamer/gpugamer';
import Hddgamer from './componentes gamer/hddgamer';
import M2gamer from './componentes gamer/m2gamer';
import Mothergamer from './componentes gamer/mothergamer';
import Psugamer from './componentes gamer/psugamer';
import Ramgamer from './componentes gamer/ramgamer';

const gamer = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/pcgamer' exact>
                    <div>
                        <Link to='./pcgamer/mothergamer' exact>
                                    <Button>Placa madre render</Button>
                        </Link>
                        <Link to= './pcgamer/cpugamer' exact>
                            <Button>cpu</Button>
                        </Link>
                        <Link to='./pcgamer/frontpanelgamer' exact>
                                    <Button> front Panel </Button>
                        </Link>
                        <Link to='./pcgamer/hddgamer' exact>
                                    <Button> HDD   </Button>
                        </Link>
                        <Link to='./pcgamer/gpugamer' exact>
                                    <Button>GPU render</Button>
                        </Link>
                        <Link to='./pcgamer/m2gamer' exact>
                                    <Button>m2 render</Button>
                        </Link>
                        <Link to='./pcgamer/psugamer' exact>
                                    <Button> PSU (Fuente de poder) render</Button>
                        </Link>
                        <Link to='./pcgamer/ramgamer' exact>
                                    <Button>RAM</Button>
                        </Link>
                    </div>

                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/cpugamer'>
                        <Cpugamer/>
                        
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/frontpanelgamer'>
                        <Frontpanelgamer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/gpugamer'>
                        <Gpugamer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/hddgamer'>
                        <Hddgamer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/m2gamer'>
                        <M2gamer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/mothergamer'>
                        <Mothergamer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/psugamer'>
                        <Psugamer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/pcgamer/ramgamer'>
                        <Ramgamer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default gamer;
