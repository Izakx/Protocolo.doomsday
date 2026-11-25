const hero = {
  name: 'Thor',
  team: 'Vingadores',
  power: 98,
  weapons: ['Stormbreaker', 'Mjolnir'],
  origin: { planet: 'Asgard' },
};
//
hero.name;            // 'Thor' (notação de ponto)
hero['team'];         // 'Vingadores' (notação de colchetes)
hero.origin.planet;   // 'Asgard' (objeto dentro de objeto)
hero.weapons[0];      // 'Stormbreaker' (array dentro de objeto)

const key = 'power';
hero[key];            // 98 (colchetes aceitam variável)

hero.age;             // undefined (chave que não existe)]
//
hero.power = 99;
hero.nickname = 'Deus do Trovão';
delete hero.nickname;
// percorrer objeto
for (const prop in hero) {
console.log(`${prop}: ${hero[prop]}`)
}

Object.keys(hero); // ['name', 'team', 'power', 'weapons', 'origin']
Object.values(hero); // ['Thor', 'Vingadores', 99, ['Stormbreaker', 'Mjolnir'], { planet: 'Asgard' }]
// Desestruturação
const { hero_name, team } = hero;
console.log(hero_name, team); // 'Thor' 'Vingadores'
//
const villain = {
name: 'Loki', // não altera o objeto hero
power: 500,
atack(target){
    return `${this.name} atacou ${target.name}!`;
},
powerUp(amount){
    this.power += amount;
    return this.power
},
}
console.log(villain.atack(hero.name)); // 'Loki atacou Thor!'
console.log(villain.powerUp(50)); // 600
//Referência de objeto
const ref = hero

ref.power = 1 
console.log(hero.power); // 1 (alteração reflete no objeto hero)



