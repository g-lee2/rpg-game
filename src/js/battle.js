export default battle;
import {changeState, storeState, stateControl} from './game.js';
import enemies from './monsters/enemies.js';

// states that are changing
// Montsers:

// - HP:
// - Spd:
// - Dmg:
// - ExpOut:
// - ItemDrop:

// Characters:

// - lvl:
// - HP:
// - Str:
// - Mana:
// - Def:
// - Exp:

//heals that a charater can use
const lifeJuice = changeState("potion")(10);
const spiritJuice = changeState("mana")(12);
//damage that a charater can make
const physicalAttack = changeState("hands")(1);
const magicAttack = changeState("wingardium leviosa")(2);
//damage that an enemy can make
const physicalDamage = changeState("ouchy")(1);
const physicalDamageMagic = changeState("spooky ouchy")(2);

let scenario = 1

// pulls enemy from enemies list
const battleEnemy = () => {
  if(scenario === 1) {
    enemy1 = enemies[0].type;
    startBattle();
  }
}

// initait battle
const startBattle = () => {
  

}