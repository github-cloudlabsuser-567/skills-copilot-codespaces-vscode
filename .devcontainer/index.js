
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        const person = data[i][j];
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    }
}