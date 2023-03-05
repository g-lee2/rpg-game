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

// Need function for getting and settings character and base stats

window.addEventListener("load", function() {
  document.getElementById("phys-attack").onclick = function() {
    const newState = stateControl(physicalAttack);
    document.getElementById("phys-attack").innerText = `physical dmage: ${newState.physicalAttack}`;
  };

  document.getElementById("fertilize").onclick = function() {
    const newState = stateControl(growJuice);
    document.getElementById("fertilizer-val").innerText = `Fertilizer: ${newState.fertilizer}`;
  };

  document.getElementById("light").onclick = function() {
    const newState = stateControl(photosynthesize);
    document.getElementById("light-val").innerText = `Light: ${newState.light}`;
  };

  document.getElementById("waterPlant").onclick = function() {
    const newState = stateControl(hydrate);
    document.getElementById("water-val").innerText = `Water: ${newState.water}`;
  };

  this.document.getElementById()

  document.getElementById("show-state").onClick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    document.getElementsByName('fertilizer-val').innderText = `Fertilizer: ${currentState.fertilizer}`;
    document.getElementsByName('light-val').innderText = `Light: ${currentState.light}`;
    document.getElementsByName('water-val').innderText = `Water: ${currentState.water}`;
  };
});