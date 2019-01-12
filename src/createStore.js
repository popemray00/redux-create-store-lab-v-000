export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render()
  }
}

function render() {
  const container = document.getElementById('container');
}
