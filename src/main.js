import { h, app } from "hyperapp";
import { Link, Route, location } from "@hyperapp/router";

import Home from './views/Home.js';
import About from './views/About.js';
import Topics from './views/Topics/Index.js';

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const view = state => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />

    <Route path="/" render={Home} />
    <Route path="/about" render={About} />
    <Route parent path="/topics" render={Topics} />
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
