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

var Character = (function(){
  function Character(name, hp, exp, team, race, chant){
    this.name = name;
    this.hp = hp;
    this.exp = exp;
    this.team = team;
    this.race = race;
    this.chant = chant;
  }

  Character.prototype.equipItem = function(){
    return this.name +' is EQUIPPED'
  }

  Character.prototype.cry = function(){
    return this.name +' is Crying'
  }

  return Character;
})

var tournament = 'Internet War'
Character.tournament = tournament

var tournamentBtn = document.querySelector('#changeTournament')
var tournament = document.querySelector('#tournament').value

tournamentBtn.addEventListener('click', function(e) => {
  e.preventDefault();
  tournament = document.querySelector('#tournament').value
  Character.tournament = tournament
  displayInfo()
})

var Warrior = (function(){
  Warrior.prototype = Object.create(Character.prototype)

  function Warrior(name, hp, exp, team, race, chant){
    Character.Call(this, name, hp, exp, team, race, chant)
    this.name = name;
    this.hp = hp;
    this.exp = exp;
    this.team = team;
    this.race = race;
    this.chant = chant;
  }

  Warrior.prototype.equipItem = function(){
    console.log(`${this.weapon.name} is EQUIPPED`);
    return this.name +' is EQUIPPED'
  }

  Warrior.prototype.cry = function(){
    console.log(`${this.name} said: I will destroy you with my ${this.weapon.name}`);
    return this.name +' is Crying'
  }
})


var Wizard = (function(){
  Wizard.prototype = Object.create(Character.prototype)

  function Wizard(name, hp, exp, team, race, chant){
    Character.Call(this, name, hp, exp, team, race, chant)
    this.name = name;
    this.hp = hp;
    this.exp = exp;
    this.team = team;
    this.race = race;
    this.chant = chant;
  }

  Wizard.prototype.equipItem = function(){
    console.log(`${this.magic.name} is being USED`);
    return this.name +' is EQUIPPED'
  }

  Wizard.prototype.cry = function(){
    console.log(`${this.name} said: I'am the best wizard all over the Internet`);
    return this.name +' is Crying'
  }
})


/// ITEM classes

var Item = (function(){
  function Item(name, weight){
    this.name = name;
    this.weight = weight;
    console.log('Abstract ITEM Created');
  }

  return Item;
})


var Weapon = (function(){
  function Weapon(name, weight, attackPower){
    Item.Call(this, name, weight);
    this.attackPower = attackPower;
    console.log('Weapon WAS CREATED: ' + name + ' / ' + weight + ' / ' + attackPower);

  }

  return Weapon;
});


var MagicItem = (function(){
  function MagicItem(name, weight, defensePower){
    Item.Call(this, name, weight);
    this.defensePower = defensePower;
    console.log('Weapon WAS CREATED: ' + name + ' / ' + weight + ' / ' + defensePower);

  }

  return MagicItem;
});


function displayInfo(){
  heroesArena.innerHTML = '';
  villiansArena.innerHTML = '';

  // spliting the teams
  characters.forEach( function(charcter, i) {
    charcter.id = i
    var item
    if (charcter.race == 'Warrior') {
      item = '<li class="weapon"><span>Avialable weapon</span> ${charcter.weapon.name} </li>'
    } else {
      item = '<li class="weapon"><span>Avialable weapon</span> ${charcter.magic.name}</li>'
    }

    var caracterCard =
    caracterCard += '<div class="card" data-id=' + i +'>';
    caracterCard +=     '<ul>';
    caracterCard +=     '<li class="name"><span>Name</span>' + charcter.name +'</li>';
    caracterCard +=     '<li class="kind"><span>Kind</span>' + charcter.race +'</li>';
    caracterCard +=     ' ' + item + '';;
    caracterCard +=     '<li><button id="equipItem">equip item</button> <button id="cry">War Cry</button></li>';
    caracterCard +=     '<li class="tournament"><span>Tournament</span>' + Character.tournament + '</li>';
    caracterCard +=     '</ul>';
    caracterCard += '</div>';


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
