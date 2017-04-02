(function(){

  //adding event listener to the button
  var addCharacter = document.querySelector('#create-character');
  addCharacter.addEventListener('click', createCharacter);

})();

  var characters = [];
  var heroesArena = document.querySelector('#battlefield .good');
  var villiansArena = document.querySelector('#battlefield .bad');

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

  characters.push(myChar)

  console.log(characters);

  displayInfo()

}

// charcters classes

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

  cry(){
    return `${name} is Crying`
  }

}

var tournament = 'Internet War'
Character.tournament = tournament

var tournamentBtn = document.querySelector('#changeTournament')
var tournament = document.querySelector('#tournament').value

tournamentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  tournament = document.querySelector('#tournament').value
  Character.tournament = tournament
  displayInfo()
})



class Warrior extends Character{
  constructor(name, hp, exp, team, race, chant, weapon, armor) {
    super(name, hp, exp, team, race, chant);
    let newWapon = Util.createWeapon();
    this.weapon  = new Weapon(newWapon.name, newWapon.weight, newWapon.attackPower)
    console.log('warrior CREATED');
  }
  equipItem(){
    console.log(`${this.weapon.name} is EQUIPPED`);
    // return `${this.weapon.name} is EQUIPPED`
  }

  cry(){
    console.log(`${this.name} said: I will destroy you with my ${this.weapon.name}`);
    // return `${this.name} said: I will destroy you with my ${this.weapon.name}`
  }
}




class Wizard extends Character{
  constructor(name, hp, exp, team, race, chant, weapon, armor) {
    super(name, hp, exp, team, race, chant);
    let newMagicItem = Util.createMagicItem();
    this.magic  = new MagicItem(newMagicItem.name, newMagicItem.weight, newMagicItem.defense)
    console.log('wizard CREATED');
  }

  equipItem(){
    console.log(`${this.magic.name} is being USED`);
    // return `${this.magic.name} is EQUIPPED`
  }

  cry(){
    console.log(`${this.name} said: I'am the best wizard all over the Internet`);
    // return `${this.name} said: I'am the best wizard all over the Internet`
  }
}

/// ITEM classes
class Item {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    console.log('Abstract ITEM Created');
  }

}


class Weapon extends Item{
  constructor(name, weight, attackPower) {
    super(name, weight);
    this.attackPower = attackPower;
    console.log(`Weapon WAS CREATED: ${name} / ${weight} / ${attackPower}`);

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
  characters.forEach((charcter, i) => {
    charcter.id = i
    let item
    if (charcter.race == 'Warrior') {
      item = `<li class="weapon"><span>Avialable weapon</span> ${charcter.weapon.name} </li>`
    } else {
      item = `<li class="weapon"><span>Avialable weapon</span> ${charcter.magic.name}</li>`
    }

    let caracterCard = `
      <div class="card" data-id='${i}'>
        <ul>
          <li class="name"><span>Name</span>${charcter.name}</li>
          <li class="kind"><span>Kind</span>${charcter.race}</li>
          ${item}
          <li><button id='equipItem'>equip item</button> <button id='cry'>War Cry</button></li>
          <li class="tournament"><span>Tournament</span>${Character.tournament}</li>
        </ul>
      </div>
      `

      //<li class="chant"><span>Chant: </span>${charcter.chant}</li>

    if (charcter.team == 'Heroes') {
        heroesArena.insertAdjacentHTML('beforeend', caracterCard);
    } else {
        villiansArena.insertAdjacentHTML('beforeend', caracterCard);
    }

    //adding event listeners to buttons
    var equip = document.querySelector('[data-id="'+charcter.id+'"] #equipItem')
    equip.addEventListener('click', charcter.equipItem.bind(charcter))

    var cry = document.querySelector('[data-id="'+charcter.id+'"] #cry')
    cry.addEventListener('click', charcter.cry.bind(charcter))
  })


}
