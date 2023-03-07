
import {selectChar} from './battle.js';

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

// const selectedChar = document.getElementById("warrior-btn").value;
// const displayEn = battleEnemy();
// battleChar = selectChar(selecedChar);

window.addEventListener("load", function() {
  console.log("loaded");
  const form = document.getElementById("char-form");
  form.addEventListener("submit", handleFormSubmission);
  //heals that a charater can use
  const lifeJuice = changeState("potion")(10);
  const spiritJuice = changeState("mana")(12);
  //damage that a charater can maked
  const physicalAttack = changeState("hp")(-1);
  const magicAttack = changeState("wingardium leviosa")(2);
  //damage that an enemy can make
  const physicalDamage = changeState("ouchy")(1);
  const physicalDamageMagic = changeState("spooky ouchy")(2);


  document.getElementById("phys-attack").onclick = function() {
    const newState = stateControl(physicalAttack);
    document.getElementById("enemy-hp").innerText = `physical damage: ${newState.hp}`;

  };

  document.getElementById("magic-attack").onclick = function() {
    const newState = stateControl(magicAttack);
    document.getElementById("enemy-hp").innerText = `Magic Attack Damage: ${newState.magicAttack}`;
  };

  document.getElementById("life-juice").onclick = function() {
    const newState = stateControl(lifeJuice);
    document.getElementById("char-hp").innerText = `Restore hp: ${newState.lifeJuice}`;
  };

  document.getElementById("spirit-juice").onclick = function() {
    const newState = stateControl(spiritJuice);
    document.getElementById("char-mana").innerText = `Restore mana: ${newState.spiritJuice}`;
  };

//I is lost here - Remy

  // const characters = form.getElementById("character").value;
  // const chosenChar = selectChar(characters);
  // console.log(chosenChar);
  
});

function handleFormSubmission(e) {
  e.preventDefault();
  const selectedChar = document.querySelector("#character").value;
  console.log(selectedChar);
  selectChar(selectedChar);
}
