export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
  }
}

function render() {
  const container = document.getElementById('container');
}
