import { h, app } from "hyperapp";
import { location } from "@hyperapp/router";

import App from './App';

const state = {
  location: location.state,
};

const actions = {
  location: location.actions,
};

const view = state => <App />;

const main = app(
  state,
  actions,
  view,
  document.body,
);

const unsubscribe = location.subscribe(main.location);
