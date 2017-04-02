(function(){

  //adding event listener to the button
  var addCharacter = document.querySelector('#create-character');
  addCharacter.addEventListener('click', createCharacter);

})();

  var Characters = [];
  var heroesArena = document.querySelector('#battlefield .good');
  var villiansArena = document.querySelector('#battlefield .bad');
  console.log(villiansArena);

// creating character
function createCharacter(e){
  e.preventDefault()
  var name =  document.querySelector('#name').value;
  var race = document.querySelector('#race').value;
  var team =  document.querySelector('#team').value;
  var chant = document.querySelector('#chant').value;



  var myChar
  if (race == 'Warrior') {
    myChar = new Warrior(name, 100, 1, team, race, chant);
    console.log(myChar);
  } else if(race == 'Wizard'){
    myChar = new Wizard(name, 100, 1, team, race, chant);
  }

  Characters.push(myChar)

  console.log(Characters);

  displayInfo()

}

class Character {
  constructor(name, hp, exp, team, race, chant) {
    this.name = name;
    this.hp = hp;
    this.exp = exp;
    this.team = team;
    this.race = race;
    this.chant = chant;
    console.log('Abstract Charater CREATED');
  }

  equipItem(){
    return `${name} is EQUIPPED`
  }

  attack(){
    return `${name} was USED`
  }

}

class Warrior extends Character{
  constructor(name, hp, exp, team, race, chant, weapon, armor) {
    super(name, hp, exp, team, race, chant);
    let newWapon = Util.createWeapon();
    this.weapon  = new Weapon(newWapon.name, newWapon.weight, newWapon.attackPower)
    console.log('warrior CREATED');
  }
  equipItem(){
    return `${this.weapon.name} is EQUIPPED`
  }
}

class Wizard extends Character{
  constructor(name, hp, exp, team, race, chant, weapon, armor) {
    super(name, hp, exp, team, race, chant);
    let newMagicItem = Util.createMagicItem();
    this.magic  = new MagicItem(newMagicItem.name, newMagicItem.weight, newMagicItem.defense)
    console.log('wizard CREATED');
  }
  // TODO: OVERWRITE Functions
}


/// ITEM classes
class Item {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    console.log('Abstract ITEM USED');
  }

}


class Weapon extends Item{
  constructor(name, weight, attackPower) {
    super(name, weight);
    this.attackPower = attackPower;
  }

  // TODO: OVERWRITE FUNCTIONS
}

class MagicItem extends Item{
  constructor(name, weight, defensePower) {
    super(name, weight);
    this.defensePower = defensePower;
    console.log(`MAGIC ITEM WAS CREATED: ${name} / ${weight} / ${defensePower}`);
  }

  // TODO: OVERWRITE FUNCTIONS
}



function displayInfo(){
  heroesArena.innerHTML = '';
  villiansArena.innerHTML = '';

  // spliting the teams
  Characters.forEach((charcter, i) => {
    charcter.id = i
    let item
    if (charcter.race == 'Warrior') {
      item = `<li class="weapon"><span>Avialable weapon: </span> ${charcter.weapon.name} </li>`
    } else {
      item = `<li class="weapon"><span>Avialable weapon: </span> ${charcter.magic.name}</li>`
    }

    let caracter = `
      <div class="card" data-id='${i}'>
        <ul>
          <li class="name"><span>Name: </span>${charcter.name}</li>
          <li class="kind"><span>Kind: </span>${charcter.race}</li>
          ${item}
          <li><button id='equipItem'>equip item</button> <button id='equipItem'>War Cry</button></li>
        </ul>
      </div>
      `

      //<li class="chant"><span>Chant: </span>${charcter.chant}</li>

    if (charcter.team == 'Heroes') {
        heroesArena.insertAdjacentHTML('beforeend', caracter);
    } else {
        villiansArena.insertAdjacentHTML('beforeend', caracter);
    }
  })


}
