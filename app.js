//OBJECT ENHANCEMENTS EXERCISES

//Same Keys & Values
const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

// Computed property names
let favoriteNumber = 42

const instructor1 = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}

//Object Methods

let instructor = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return this.firstName + ' says bye!';
    }
}

//createAnimal Function
const dogAnimal = createAnimal("dog", "bark", "Woooof!")

const sheepAnimal = createAnimal("sheep", "bleet", "BAAAAaaaa")


function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}