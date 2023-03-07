export default game;
import {battleEnemy, selectChar} from './battle.js';

const changeState = (prop) => {
  return (value) => {
    return(state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
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
  
  //heals that a charater can use
  const lifeJuice = changeState("potion")(10);
  const spiritJuice = changeState("mana")(12);
  //damage that a charater can maked
  const physicalAttack = changeState("enemy-hp")(1);
  const magicAttack = changeState("wingardium leviosa")(2);
  //damage that an enemy can make
  const physicalDamage = changeState("ouchy")(1);
  const physicalDamageMagic = changeState("spooky ouchy")(2);


  document.getElementById("phys-attack").onclick = function() {
    const newState = stateControl(physicalAttack);
    document.getElementById("enemy-hp").innerText = `physical dmage: ${newState.physicalAttack}`;
  };

  document.getElementById("magic-attack").onclick = function() {
    const newState = stateControl(magicAttack);
    document.getElementById("fertilizer-val").innerText = `Fertilizer: ${newState.fertilizer}`;
  };

  document.getElementById("life-juice").onclick = function() {
    const newState = stateControl(lifeJuice);
    document.getElementById("light-val").innerText = `Light: ${newState.light}`;
  };

  document.getElementById("spirit-juice").onclick = function() {
    const newState = stateControl(spiritJuice);
    document.getElementById("water-val").innerText = `Water: ${newState.water}`;
  };

  this.document.getElementById()

  // document.getElementById("show-state").onClick = function() {
  //   const currentState = stateControl();
  //   document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  //   document.getElementsByName('fertilizer-val').innderText = `Fertilizer: ${currentState.fertilizer}`;
  //   document.getElementsByName('light-val').innderText = `Light: ${currentState.light}`;
  //   document.getElementsByName('water-val').innderText = `Water: ${currentState.water}`;
  // };
});