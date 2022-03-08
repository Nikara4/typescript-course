// const person: {
//     name: string,
//     age: number
// } = {

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Alexandra',
//     age: 28,
//     hobbies: ['board games', 'dance', 'asian dramas'],
//     role: [2, 'author']
// }

enum Role { ADMIN = 5, READ_ONLY, AUTHOR}

const person = {
    name: 'Alexandra',
    age: 28,
    hobbies: ['board games', 'dance', 'asian dramas'],
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10;

// person.role = [10, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['board games', 'dance', 'asian dramas']

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby)
}