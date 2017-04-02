'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'createWeapon',
    value: function createWeapon() {
      var nameOptions = ['sword', 'knife', 'axe', 'spear', 'crossbow', 'staff'];
      var weaponName = getRandom(nameOptions.length, 0);
      var weaponWeight = getRandom(1, 5);
      var weaponAttack = getRandom(20, 1);

      return {
        name: nameOptions[weaponName],
        weight: weaponWeight,
        attackPower: weaponAttack
      };
    }
  }, {
    key: 'createMagicItem',
    value: function createMagicItem() {
      var nameOptions = ['potion', 'wand', 'hypnotize', 'spell'];
      var MagicItemName = getRandom(nameOptions.length, 0);
      var MagicItemWeight = getRandom(1, 5);
      var MagicItemDefense = getRandom(20, 1);

      return {
        name: nameOptions[MagicItemName],
        weight: MagicItemWeight,
        defense: MagicItemDefense
      };
    }
  }]);

  return Util;
}();

function getRandom(max, min) {
  return Math.floor(max * Math.random()) + min;
}