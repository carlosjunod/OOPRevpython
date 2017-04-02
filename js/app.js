'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  //adding event listener to the button
  var addCharacter = document.querySelector('#create-character');
  addCharacter.addEventListener('click', createCharacter);
})();

var characters = [];
var heroesArena = document.querySelector('#battlefield .good');
var villiansArena = document.querySelector('#battlefield .bad');

// creating character
function createCharacter(e) {
  e.preventDefault();
  var name = document.querySelector('#name').value;
  var race = document.querySelector('#race').value;
  var team = document.querySelector('#team').value;
  var chant = document.querySelector('#chant').value;

  var myChar;
  if (race == 'Warrior') {
    myChar = new Warrior(name, 100, 1, team, race, chant);
    console.log(myChar);
  } else if (race == 'Wizard') {
    myChar = new Wizard(name, 100, 1, team, race, chant);
  }

  characters.push(myChar);

  console.log(characters);

  displayInfo();
}

// charcters classes

var Character = function () {
  function Character(name, hp, exp, team, race, chant) {
    _classCallCheck(this, Character);

    this.name = name;
    this.hp = hp;
    this.exp = exp;
    this.team = team;
    this.race = race;
    this.chant = chant;
    console.log('Abstract Charater CREATED');
  }

  _createClass(Character, [{
    key: 'equipItem',
    value: function equipItem() {
      return name + ' is EQUIPPED';
    }
  }, {
    key: 'cry',
    value: function cry() {
      return name + ' is Crying';
    }
  }]);

  return Character;
}();

var tournament = 'Internet War';
Character.tournament = tournament;

var tournamentBtn = document.querySelector('#changeTournament');
var tournament = document.querySelector('#tournament').value;

tournamentBtn.addEventListener('click', function (e) {
  e.preventDefault();
  tournament = document.querySelector('#tournament').value;
  Character.tournament = tournament;
  displayInfo();
});

var Warrior = function (_Character) {
  _inherits(Warrior, _Character);

  function Warrior(name, hp, exp, team, race, chant, weapon, armor) {
    _classCallCheck(this, Warrior);

    var _this = _possibleConstructorReturn(this, (Warrior.__proto__ || Object.getPrototypeOf(Warrior)).call(this, name, hp, exp, team, race, chant));

    var newWapon = Util.createWeapon();
    _this.weapon = new Weapon(newWapon.name, newWapon.weight, newWapon.attackPower);
    console.log('warrior CREATED');
    return _this;
  }

  _createClass(Warrior, [{
    key: 'equipItem',
    value: function equipItem() {
      console.log(this.weapon.name + ' is EQUIPPED');
      // return `${this.weapon.name} is EQUIPPED`
    }
  }, {
    key: 'cry',
    value: function cry() {
      console.log(this.name + ' said: I will destroy you with my ' + this.weapon.name);
      // return `${this.name} said: I will destroy you with my ${this.weapon.name}`
    }
  }]);

  return Warrior;
}(Character);

var Wizard = function (_Character2) {
  _inherits(Wizard, _Character2);

  function Wizard(name, hp, exp, team, race, chant, weapon, armor) {
    _classCallCheck(this, Wizard);

    var _this2 = _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, name, hp, exp, team, race, chant));

    var newMagicItem = Util.createMagicItem();
    _this2.magic = new MagicItem(newMagicItem.name, newMagicItem.weight, newMagicItem.defense);
    console.log('wizard CREATED');
    return _this2;
  }

  _createClass(Wizard, [{
    key: 'equipItem',
    value: function equipItem() {
      console.log(this.magic.name + ' is being USED');
      // return `${this.magic.name} is EQUIPPED`
    }
  }, {
    key: 'cry',
    value: function cry() {
      console.log(this.name + ' said: I\'am the best wizard all over the Internet');
      // return `${this.name} said: I'am the best wizard all over the Internet`
    }
  }]);

  return Wizard;
}(Character);

/// ITEM classes


var Item = function Item(name, weight) {
  _classCallCheck(this, Item);

  this.name = name;
  this.weight = weight;
  console.log('Abstract ITEM Created');
};

var Weapon = function (_Item) {
  _inherits(Weapon, _Item);

  function Weapon(name, weight, attackPower) {
    _classCallCheck(this, Weapon);

    var _this3 = _possibleConstructorReturn(this, (Weapon.__proto__ || Object.getPrototypeOf(Weapon)).call(this, name, weight));

    _this3.attackPower = attackPower;
    console.log('Weapon WAS CREATED: ' + name + ' / ' + weight + ' / ' + attackPower);

    return _this3;
  }

  // TODO: OVERWRITE FUNCTIONS


  return Weapon;
}(Item);

var MagicItem = function (_Item2) {
  _inherits(MagicItem, _Item2);

  function MagicItem(name, weight, defensePower) {
    _classCallCheck(this, MagicItem);

    var _this4 = _possibleConstructorReturn(this, (MagicItem.__proto__ || Object.getPrototypeOf(MagicItem)).call(this, name, weight));

    _this4.defensePower = defensePower;
    console.log('MAGIC ITEM WAS CREATED: ' + name + ' / ' + weight + ' / ' + defensePower);
    return _this4;
  }

  // TODO: OVERWRITE FUNCTIONS


  return MagicItem;
}(Item);

function displayInfo() {
  heroesArena.innerHTML = '';
  villiansArena.innerHTML = '';

  // spliting the teams
  characters.forEach(function (charcter, i) {
    charcter.id = i;
    var item = void 0;
    if (charcter.race == 'Warrior') {
      item = '<li class="weapon"><span>Avialable weapon</span> ' + charcter.weapon.name + ' </li>';
    } else {
      item = '<li class="weapon"><span>Avialable weapon</span> ' + charcter.magic.name + '</li>';
    }

    var caracterCard = '\n      <div class="card" data-id=\'' + i + '\'>\n        <ul>\n          <li class="name"><span>Name</span>' + charcter.name + '</li>\n          <li class="kind"><span>Kind</span>' + charcter.race + '</li>\n          ' + item + '\n          <li><button id=\'equipItem\'>equip item</button> <button id=\'cry\'>War Cry</button></li>\n          <li class="tournament"><span>Tournament</span>' + Character.tournament + '</li>\n        </ul>\n      </div>\n      ';

    //<li class="chant"><span>Chant: </span>${charcter.chant}</li>

    if (charcter.team == 'Heroes') {
      heroesArena.insertAdjacentHTML('beforeend', caracterCard);
    } else {
      villiansArena.insertAdjacentHTML('beforeend', caracterCard);
    }

    //adding event listeners to buttons
    var equip = document.querySelector('[data-id="' + charcter.id + '"] #equipItem');
    equip.addEventListener('click', charcter.equipItem.bind(charcter));

    var cry = document.querySelector('[data-id="' + charcter.id + '"] #cry');
    cry.addEventListener('click', charcter.cry.bind(charcter));
  });
}