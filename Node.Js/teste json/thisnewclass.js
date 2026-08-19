class Person {
    name;
    age;

    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person()
newPerson.name = "Luiz"
newPerson.age = 35
newPerson.talk()

class timefootball {
   constructor(Posição){
    console.log(`Esse Jogador e o melhor ${Posição}`)
    this.Posição = Posição

   }

    talk(){
        console.log(`Esse e o melhor no ataque ${this.Posição}`)
    }
}

const timeflamengo = new timefootball("Pedro")

timeflamengo.talk()
