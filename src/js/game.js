export default game;
import {battle} from './battle.js';

const changeState = (somethingForNow) => {
  return (value) => {
    return(state) => ({
      ...state,
      [somethingForNow] : (state[somethingForNow] || 0) + value
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

// states that are changing 
// - lvl:
// - HP:
// - Str:
// - Mana:
// - Def:
// - Exp: