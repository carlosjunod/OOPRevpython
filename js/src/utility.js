class Util {
  constructor() {
  }

  static createWeapon(){
    let nameOptions = ['sword', 'knife', 'axe', 'spear', 'crossbow', 'staff']
    let weaponName = getRandom(nameOptions.length, 0)
    let weaponWeight = getRandom(1, 5)
    let weaponAttack = getRandom(20, 1)

    return {
      name : nameOptions[weaponName],
      weight : weaponWeight,
      attackPower : weaponAttack
    }

  }

  static createMagicItem(){
    let nameOptions = ['potion', 'wand', 'hypnotize', 'spell']
    let MagicItemName = getRandom(nameOptions.length, 0)
    let MagicItemWeight = getRandom(1, 5)
    let MagicItemDefense = getRandom(20, 1)

    return {
      name : nameOptions[MagicItemName],
      weight : MagicItemWeight,
      defense: MagicItemDefense
    }

  }

}

function getRandom(max, min){
    return Math.floor(max * Math.random()) + min
}
