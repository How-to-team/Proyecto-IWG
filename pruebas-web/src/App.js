import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./navegacion";
import Gamer from "./computadores/gamer";
import Cpugamer from './computadores/componentes gamer/cpugamer';
import Frontpanelgamer from './computadores/componentes gamer/frontpanelgamer';
import Gpugamer from './computadores/componentes gamer/gpugamer';
import Hddgamer from './computadores/componentes gamer/hddgamer';
import M2gamer from './computadores/componentes gamer/m2gamer';
import Mothergamer from './computadores/componentes gamer/mothergamer';
import Psugamer from './computadores/componentes gamer/psugamer';
import Ramgamer from './computadores/componentes gamer/ramgamer';
import Office from "./computadores/oficina";
import Cpuoficina from './computadores/componentes oficina/cpuoficina';
import Frontpaneloficina from './computadores/componentes oficina/frontpaneloficina';
import Hddoficina from './computadores/componentes oficina/hddoficina';
import LectorCDoficina from './computadores/componentes oficina/lectorCDoficina';
import Motheroficina from './computadores/componentes oficina/motheroficina';
import Psuoficina from './computadores/componentes oficina/psuoficina';
import Ramoficina from './computadores/componentes oficina/ramoficina';
import Render from "./computadores/renderizado";
import Cpurender from './computadores/componentes renderizados/cpurender';
import Frontpanelrender from './computadores/componentes renderizados/frontpanelrender';
import Gpurender from './computadores/componentes renderizados/gpurender';
import Hddrender from './computadores/componentes renderizados/hddrender';
import M2render from './computadores/componentes renderizados/m2render';
import Motherrender from './computadores/componentes renderizados/motherrender';
import Psurender from './computadores/componentes renderizados/psurender';
import Ramrender from './computadores/componentes renderizados/ramrender';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Nav}/>
          <Route path="/pcgamer" exact component={Gamer}/>
          <Route path='/pcgamer/cpugamer' component={Cpugamer}/>
          <Route path='/pcgamer/frontpanelgamer' component={Frontpanelgamer}/>
          <Route path='/pcgamer/gpugamer' component={Gpugamer}/>
          <Route path='/pcgamer/hddgamer' component={Hddgamer}/>
          <Route path='/pcgamer/m2gamer' component={M2gamer}/>
          <Route path='/pcgamer/mothergamer' component={Mothergamer}/>
          <Route path='/pcgamer/psugamer' component={Psugamer}/>
          <Route path='/pcgamer/ramgamer' component={Ramgamer}/>
          <Route path="/pcoffice" exact component={Office}/>
          <Route path="/pcoffice/cpuoficina" component={Cpuoficina} />
          <Route path='/pcoffice/frontpaneloficina' component={Frontpaneloficina} />
          <Route path='/pcoffice/hddoficina' component={Hddoficina} />
          <Route path='/pcoffice/lectorCDoficina' component={LectorCDoficina} />
          <Route path='/pcoffice/motheroficina' component={Motheroficina} />
          <Route path='/pcoffice/psuoficina' component={Psuoficina} />
          <Route path='/pcoffice/ramoficina' component={Ramoficina} />
          <Route path="/pcrender" exact component={Render}/>
          <Route path='/pcrender/cpurender' exact component={Cpurender}/>
          <Route path='/pcrender/frontpanelrender' exact component={Frontpanelrender}/>
          <Route path='/pcrender/gpurender' exact component={Gpurender}/>
          <Route path='/pcrender/hddrender' exact component={Hddrender}/>
          <Route path='/pcrender/m2render' exact component={M2render}/>
          <Route path='/pcrender/motherrender' exact component={Motherrender}/>
          <Route path='/pcrender/psurender' exact component={Psurender}/>
          <Route path='/pcrender/ramrender' exact component={Ramrender}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App




