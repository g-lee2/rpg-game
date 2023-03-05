export default battle;
import {changeState, storeState, stateControl} from './game.js';
import enemies from './monsters/enemies.js';
import characters from './classes/character.js';

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
//damage that a charater can maked
const physicalAttack = changeState("hands")(1);
const magicAttack = changeState("wingardium leviosa")(2);
//damage that an enemy can make
const physicalDamage = changeState("ouchy")(1);
const physicalDamageMagic = changeState("spooky ouchy")(2);

let scenario = 1

// Link this to choose player in UI
const selectChar = () => {
  if(characters === "warrior") {
    chosenChar = characters[1].type;
  }
  else {
    chosenChar = characters[0].type;
  }
}

// pulls enemy from enemies list
const battleEnemy = () => {
  if(scenario === 1) {
    enemy1 = enemies[0].type;
    startBattle();
  }
  else if (scenario === 2) {
    enemy2 = enemies[1].type;
    startBattle();
  }
};


// initiate battle
const startBattle = () => {
  let activeEnemy = battleEnemy();
  let monsterHp = activeEnemy.hp;
  let monsterName = activeEnemy.type;
  monsterNameText.innerText = monsterName;
  monsterHealthText.innerText = monsterHp;
};

// Attack function
const attack = () => {
  let activeChar = selectChar();
  let health = activeChar.hp;
  let strenght = activeChar.str;
  let attackInit = activeChar.def;

  if (activeEnemy.spd >= activeChar.def){
    health -= activeEnemy.dmg;
  }
  else if (activeEnemy.spd <= activeChar.def) {
    monsterHp -=  strenght;
  }
};

const spellCast = () => {
   if(activeChar === "mage") {
    monsterHp -= mana;
   }
   else {
    monsterHp -= 0;
   }
}