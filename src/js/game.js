const changeState = (somethingForNow) => {
  return (value) => {
    return(state) => ({
      ...state,
      [somethingForNow] : (stats[somethingForNow] || 0) + value
    });
  };
};

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();
