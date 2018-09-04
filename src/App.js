import { h } from 'hyperapp';

export default (state, actions) => (
  <main>
    <h1>{ state.count }</h1>
    <button onclick={ actions.down } disabled={ state.count <= 0 }>Remove</button>
    <button onclick={ actions.up }>Add</button>
  </main>
);
