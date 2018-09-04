import { h } from 'hyperapp';

export default (state, actions) => (
  <main>
    <h1>{ state.count }</h1>
    <button onclick={ actions.down } disabled={ state.count <= 0 }>Add</button>
    <button onclick={ actions.up }>Rm</button>
  </main>
);
