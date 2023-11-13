// Nullish COalescing Operator

const idade = 0;

//0,'',[], false, undefined, null => falsy (tvalores nao validos para operador || (ou))

console.log( 'sua idade é (com || )' + (idade || "Não informado") +  " Sua idade é (com ??) " + (idade ?? "Não informado"))

//Objetos - Manipulações úteis no Javascript

const user = {
  name:"Mateus",
  age: 27,
  address:{
    street: "Rua Sete de Setembro",
    number: 379,
     zip:{
       code: "37660000",
       city: "Paraisopolis"
     },
    //  showFullAddres(){
    //   return 'Full Adress'
    //  }
  },
}
console.log('name' in user)
console.log(Object.keys(user))
console.log(JSON.stringify( Object.values(user)))
console.log(JSON.stringify(Object.entries(user)))

//Desestruturação de Objetos

const {address, age: idadeUsuario, nickname = "Goulart" } = user
console.log(JSON.stringify({address , idadeUsuario, nickname}))

function showAge ({age}){
  return age
}

console.log(showAge(user))

//Rest Oparator

const {name, age, ...rest} = user
console.log(JSON.stringify(rest))

const array = [1,2,3,4,5,6,7,8,9,10]

const [first,, third, ...resto] = array
console.log(JSON.stringify({first, third, resto}))

// Short Syntax

 const teamName = "Corinthians"
 const yearFundation = 1910

 const corinthians = {
  teamName,
  yearFundation
 }

console.log(corinthians)

//Optional Chaining

console.log(user.address?.zip?.code ?? 'Não informado')
console.log(user.address?.showFullAddres?.() ?? 'Não informado')