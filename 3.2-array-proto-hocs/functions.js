console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name);
}

console.log(getNames());

function getCountReliableWeapons(value) {
    return weapons.filter(weapon => weapon.durability > value).length;
}

console.log(getCountReliableWeapons(200));

function hasReliableWeapons(value) {
    return weapons.some(weapon => weapon.durability > value);
}

console.log(hasReliableWeapons(200));

function getReliableWeaponsNames(value) {
    return weapons.filter(weapon => weapon.durability > value).map(weapon => weapon.name);
}

console.log(getReliableWeaponsNames(200));

function getTotalDamage() {
    return weapons.map(weapon => weapon.attack).reduce((sum, i) => sum + i, 0);
}

console.log(getTotalDamage());

function getValuestCountToSumValues(arr, sum) {
    const newArr = [];
    let newSum = 0;
    arr.filter(num => {
        if (newSum < sum) {
            newSum += num;
            newArr.push(num);
        }
    });
    return newArr.length;
}

console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10));
console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20));