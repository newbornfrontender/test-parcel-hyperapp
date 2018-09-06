import { h } from "hyperapp";
import { Link, Route } from "@hyperapp/router";

import Components from './Components';
import SingleStateTree from './SingleStateTree';
import Routing from './Routing';

var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    return true
  } else {
    return false
  }
}

export default ({ match }) => (
  <div key="topics">
    <h1>Topics</h1>
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

    {window.matchMedia('(max-width: 768px)').addListener(e => {
      return console.log(e.matches);
    })}

    {window.matchMedia('(max-width: 768px)').addListener(e => {
      return e.matches ? <p>true</p> : <p>false</p>;
    })}

    <Route
      parent
      path={`${match.path}/components`}
      render={Components}
    />
    <Route
      parent
      path={`${match.path}/single-state-tree`}
      render={SingleStateTree}
    />
    <Route
      parent
      path={`${match.path}/routing`}
      render={Routing}
    />
  </div>
);

