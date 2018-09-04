import { h } from "hyperapp";
import { Link, Route } from "@hyperapp/router";
import Components from './Components.js';
import SingleStateTree from './SingleStateTree.js';
import Routing from './Routing.js';

export default ({ match }) => (
  <div key="topics">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/single-state-tree`}>Single State Tree</Link>
      </li>
      <li>
        <Link to={`${match.url}/routing`}>Routing</Link>
      </li>
    </ul>

    {match.isExact && <h3>Please select a topic.</h3>}

    <Route parent path={`${match.path}/components`} render={Components} />
    <Route parent path={`${match.path}/single-state-tree`} render={SingleStateTree} />
    <Route parent path={`${match.path}/routing`} render={Routing} />
  </div>
);

