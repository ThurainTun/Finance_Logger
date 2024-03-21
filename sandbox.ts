let character: string;
let age: number;
let isLoggedIn: true;

let ninjas: string[] = [];

ninjas.push('thurain');

let mixed: (string | number | boolean)[] = [];
mixed.push('thurain');
mixed.push(20);
mixed.push(true);

console.log(mixed);

let thurainDev: object;
thurainDev = { name: 'thurain', age: 20 };

let thurainTwo: {
    name: string,
    age: number,
    isBelt: boolean
}

thurainTwo = { name: 'duat', age: 23, isBelt: true }